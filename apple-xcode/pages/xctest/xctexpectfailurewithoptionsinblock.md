> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctexpectfailurewithoptionsinblock](https://developer.apple.com/documentation/xctest/xctexpectfailurewithoptionsinblock)

# XCTExpectFailureWithOptionsInBlock

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Function

Instructs the test to expect a failure in an assertion in the provided block of code, with options to customize expected failure checking and handling.

## Declaration

```objectivec
extern void XCTExpectFailureWithOptionsInBlock(NSString *failureReason, XCTExpectedFailureOptions *options, void (^failingBlock)());
```

## See Also

### Expected Failures

- [XCTExpectedFailure](xctexpectedfailure.md): An object that represents an expected test failure.
- [XCTExpectedFailureOptions](xctexpectedfailure/options.md): Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.
- [XCTExpectFailure](xctexpectfailure.md): Instructs the test to expect a failure in an upcoming assertion.
- [XCTExpectFailureInBlock](xctexpectfailureinblock.md): Instructs the test to expect a failure in an assertion in the provided block of code.
- [XCTExpectFailureWithOptions](xctexpectfailurewithoptions.md): Instructs the test to expect a failure in an upcoming assertion, with options to customize expected failure checking and handling.
