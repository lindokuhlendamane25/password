

describe("password_is_valid", function() {
  it("should have more than 8 characters", function() {
    expect(password_is_valid("cdK3egffnggdcsdd")).toBe(true);
  });

  it("should not be null", function() {
    expect(password_is_valid("Lin25cde12345")).toBe(true);
  });

  it("should have at least one uppercase letter", function() {
    expect(password_is_valid("M678hhbnBcde")).toBe(true);
  });

  it("should have at least one lowercase letter", function() {
    expect(password_is_valid("Vjndjfn481")).toBe(true);
  });

  it("should have at least one number", function() {
    expect(password_is_valid("cxsddwsC58qssadsa")).toBe(true);
  });

  it("should have at least one number", function() {
    expect(password_is_valid("lnd5jnCVsd")).toBe(true);
  });

  it("should throw an exception when password is invalid", function() {
    console.log(typeof password_is_valid);
    expect(function(){
      var result = password_is_valid(null);
    }).toThrow(new  Error("Password must contain atleast one uppercase letter, lowercase letter and a number"));
  });
});


describe("password_is_ok", function() {
  it("should have more than 8 characters", function() {
    expect(password_is_ok("qwe43maskdqn")).toBe(true);
  });

  it("should not be null", function() {
    expect(password_is_ok("psjkdSDF23")).toBe(true);
  });

  it("should have at least one uppercase letter", function() {
    expect(password_is_ok("sdfmmkssdfkler234F")).toBe(true);
  });

  it("should have at least one lowercase letter", function() {
    expect(password_is_ok("mncnmnsdjowR23ewd")).toBe(true);
  });

  it("should have at least one number", function() {
    expect(password_is_ok("90320ndfbhsdweasFv")).toBe(true);
  });
});

describe("neverOk(passw)", function() {
  it("should have more than 8 characters", function() {
    expect(neverOk("12345ABcde")).toBe(undefined);
  });
});
