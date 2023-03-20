const Voting = artifacts.require("Voting");

contract('Voting', () => {
  it('should read newly written values', async() => {
    const VotingInstance = await Voting.deployed();
    var value = (await VotingInstance.read()).toNumber();

    assert.equal(value, 0, "0 wasn't the initial value");

    await VotingInstance.write(1);
    value = (awaitVotingInstance.read()).toNumber();
    assert.equal(value, 1, "1 was not written");

    await VotingInstance.write(2);
    value = (await VotingInstance.read()).toNumber();
    assert.equal(value, 2, "2 was not written");
  });
});
