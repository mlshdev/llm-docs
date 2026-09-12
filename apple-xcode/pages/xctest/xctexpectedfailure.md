> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctexpectedfailure](https://developer.apple.com/documentation/xctest/xctexpectedfailure)

# XCTExpectedFailure (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that represents an expected test failure.

## Declaration

```swift
class XCTExpectedFailure
```

<a id="overview"></a>

## Overview

The test system creates and tracks instances of `XCTExpectedFailure` when you call one of the `XCTExpectFailure` functions. Don’t create or use them directly.

## Topics

### Detailing Expected Failure

- [failureReason](xctexpectedfailure/failurereason.md): An optional string that describes why the test expects a failure.
- [issue](xctexpectedfailure/issue.md): The issue that fulfills the expected failure.

### Setting Options

- [XCTExpectedFailure.Options](xctexpectedfailure/options.md): Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Expected Failures

- [XCTExpectedFailure.Options](xctexpectedfailure/options.md): Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.
- [XCTExpectFailure(\_:options:)](xctexpectfailure%28__options_%29.md): Instructs the test to expect a failure in an upcoming assertion, with options to customize expected failure checking and handling.
- [XCTExpectFailure(\_:enabled:strict:issueMatcher:)](xctexpectfailure%28__enabled_strict_issuematcher_%29.md): Instructs the test to expect a failure in an upcoming assertion, with parameters to customize expected failure checking and handling.
- [XCTExpectFailure(\_:options:failingBlock:)](xctexpectfailure%28__options_failingblock_%29.md): Instructs the test to expect a failure in an assertion in the provided block of code, with options to customize expected failure checking and handling.
- [XCTExpectFailure(\_:enabled:strict:failingBlock:issueMatcher:)](xctexpectfailure%28__enabled_strict_failingblock_issuematcher_%29.md): Instructs the test to expect a failure in an assertion in the provided block of code, with parameters to customize expected failure checking and handling.

# XCTExpectedFailure (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that represents an expected test failure.

## Declaration

```objectivec
@interface XCTExpectedFailure : NSObject
```

<a id="overview"></a>

## Overview

The test system creates and tracks instances of `XCTExpectedFailure` when you call one of the `XCTExpectFailure` functions. Don’t create or use them directly.

## Topics

### Detailing Expected Failure

- [failureReason](xctexpectedfailure/failurereason.md): An optional string that describes why the test expects a failure.
- [issue](xctexpectedfailure/issue.md): The issue that fulfills the expected failure.

### Setting Options

- [XCTExpectedFailureOptions](xctexpectedfailure/options.md): Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Expected Failures

- [XCTExpectedFailureOptions](xctexpectedfailure/options.md): Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.
- [XCTExpectFailure](xctexpectfailure.md): Instructs the test to expect a failure in an upcoming assertion.
- [XCTExpectFailureInBlock](xctexpectfailureinblock.md): Instructs the test to expect a failure in an assertion in the provided block of code.
- [XCTExpectFailureWithOptions](xctexpectfailurewithoptions.md): Instructs the test to expect a failure in an upcoming assertion, with options to customize expected failure checking and handling.
- [XCTExpectFailureWithOptionsInBlock](xctexpectfailurewithoptionsinblock.md): Instructs the test to expect a failure in an assertion in the provided block of code, with options to customize expected failure checking and handling.
