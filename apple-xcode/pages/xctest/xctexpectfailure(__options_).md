> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctexpectfailure(_:options:)](https://developer.apple.com/documentation/xctest/xctexpectfailure(_:options:))

# XCTExpectFailure(\_:options:)

**Framework:** XCTest  
**Kind:** Function

Instructs the test to expect a failure in an upcoming assertion, with options to customize expected failure checking and handling.

## Declaration

```swift
func XCTExpectFailure(_ failureReason: String? = nil, options: XCTExpectedFailure.Options = .init())
```

## Parameters

- `failureReason`: An optional string that describes why the test expects a failure.
- `options`: Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.

## See Also

### Expected Failures

- [XCTExpectedFailure](xctexpectedfailure.md): An object that represents an expected test failure.
- [XCTExpectedFailure.Options](xctexpectedfailure/options.md): Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.
- [XCTExpectFailure(\_:enabled:strict:issueMatcher:)](xctexpectfailure%28__enabled_strict_issuematcher_%29.md): Instructs the test to expect a failure in an upcoming assertion, with parameters to customize expected failure checking and handling.
- [XCTExpectFailure(\_:options:failingBlock:)](xctexpectfailure%28__options_failingblock_%29.md): Instructs the test to expect a failure in an assertion in the provided block of code, with options to customize expected failure checking and handling.
- [XCTExpectFailure(\_:enabled:strict:failingBlock:issueMatcher:)](xctexpectfailure%28__enabled_strict_failingblock_issuematcher_%29.md): Instructs the test to expect a failure in an assertion in the provided block of code, with parameters to customize expected failure checking and handling.
