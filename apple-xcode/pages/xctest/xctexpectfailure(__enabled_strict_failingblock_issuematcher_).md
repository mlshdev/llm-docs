> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctexpectfailure(_:enabled:strict:failingblock:issuematcher:)](https://developer.apple.com/documentation/xctest/xctexpectfailure(_:enabled:strict:failingblock:issuematcher:))

# XCTExpectFailure(\_:enabled:strict:failingBlock:issueMatcher:)

**Framework:** XCTest  
**Kind:** Function

Instructs the test to expect a failure in an assertion in the provided block of code, with parameters to customize expected failure checking and handling.

## Declaration

```swift
func XCTExpectFailure<R>(_ failureReason: String? = nil, enabled: Bool? = nil, strict: Bool? = nil, failingBlock: () throws -> R, issueMatcher: ((XCTIssue) -> Bool)? = nil) rethrows -> R
```

## Parameters

- `failureReason`: An optional string that describes why the test expects a failure.
- `enabled`: A Boolean value that indicates whether the test checks for the expected failure.
- `strict`: A Boolean value that indicates whether the test reports an error if the expected failure doesn’t occur.
- `failingBlock`: A block of test code and assertions where the test expects a failure.
- `issueMatcher`: A block of code that determines whether the test issue fulfills the expected failure.

<a id="return-value"></a>

## Return Value

If the `failingBlock` you provide returns a value or throws an error, the function returns that value or rethrows the error.

## See Also

### Expected Failures

- [XCTExpectedFailure](xctexpectedfailure.md): An object that represents an expected test failure.
- [XCTExpectedFailure.Options](xctexpectedfailure/options.md): Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.
- [XCTExpectFailure(\_:options:)](xctexpectfailure%28__options_%29.md): Instructs the test to expect a failure in an upcoming assertion, with options to customize expected failure checking and handling.
- [XCTExpectFailure(\_:enabled:strict:issueMatcher:)](xctexpectfailure%28__enabled_strict_issuematcher_%29.md): Instructs the test to expect a failure in an upcoming assertion, with parameters to customize expected failure checking and handling.
- [XCTExpectFailure(\_:options:failingBlock:)](xctexpectfailure%28__options_failingblock_%29.md): Instructs the test to expect a failure in an assertion in the provided block of code, with options to customize expected failure checking and handling.
