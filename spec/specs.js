describe ('pingPong', function(){
  it ("returns a range of numbers from 1 to the number chosen", function (){
    expect(pingPong(2)).to.eql([1, 2]);
  });

  it ("returns 'ping' if the entered number is divisable by 3", function (){
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  });

  it ("returns 'pong' if the entered number is divisable by 5", function (){
    expect(pingPong(5)).to.eql([1, 2, "ping", 4, "pong"]);
  });

  it ("returns 'pingpong' if the entered number is divisable by 15", function (){
    expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", 6, 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]);
  });
});
