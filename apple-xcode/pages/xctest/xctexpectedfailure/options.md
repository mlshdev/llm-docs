> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctexpectedfailure/options](https://developer.apple.com/documentation/xctest/xctexpectedfailure/options)

# XCTExpectedFailure.Options (Swift)

**Framework:** XCTest  
**Kind:** Class

Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.

## Declaration

```swift
class Options
```

<a id="overview"></a>

## Overview

Create options and provide them to `XCTExpectFailure` functions to tell the test system how to match an expected failure, whether to enable an expected failure during a test, and whether an unfulfilled expected failure generates a test failure.

## Topics

### Matching Failures

- [issueMatcher](options/issuematcher.md): A block of code that determines whether the test issue fulfills the expected failure.

### Specifying Options

- [nonStrict()](options/nonstrict%28%29.md): Options that specify that an unfulfilled expected failure doesn’t generate a test failure.
- [isEnabled](options/isenabled.md): A Boolean value that indicates whether the test checks for the expected failure.
- [isStrict](options/isstrict.md): A Boolean value that indicates whether the test reports an error if the expected failure doesn’t occur.

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
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Expected Failures

- [XCTExpectedFailure](../xctexpectedfailure.md): An object that represents an expected test failure.
- [XCTExpectFailure(\_:options:)](../xctexpectfailure%28__options_%29.md): Instructs the test to expect a failure in an upcoming assertion, with options to customize expected failure checking and handling.
- [XCTExpectFailure(\_:enabled:strict:issueMatcher:)](../xctexpectfailure%28__enabled_strict_issuematcher_%29.md): Instructs the test to expect a failure in an upcoming assertion, with parameters to customize expected failure checking and handling.
- [XCTExpectFailure(\_:options:failingBlock:)](../xctexpectfailure%28__options_failingblock_%29.md): Instructs the test to expect a failure in an assertion in the provided block of code, with options to customize expected failure checking and handling.
- [XCTExpectFailure(\_:enabled:strict:failingBlock:issueMatcher:)](../xctexpectfailure%28__enabled_strict_failingblock_issuematcher_%29.md): Instructs the test to expect a failure in an assertion in the provided block of code, with parameters to customize expected failure checking and handling.

# XCTExpectedFailureOptions (Objective-C)

**Framework:** XCTest  
**Kind:** Class

Options that determine how the test matches the expected failure to an actual test failure, and whether an unfulfilled expected failure results in a test failure.

## Declaration

```objectivec
@interface XCTExpectedFailureOptions : NSObject
```

<a id="overview"></a>

## Overview

Create options and provide them to `XCTExpectFailure` functions to tell the test system how to match an expected failure, whether to enable an expected failure during a test, and whether an unfulfilled expected failure generates a test failure.

## Topics

### Matching Failures

- [issueMatcher](options/issuematcher.md): A block of code that determines whether the test issue fulfills the expected failure.

### Specifying Options

- [nonStrictOptions](options/nonstrict%28%29.md): Options that specify that an unfulfilled expected failure doesn’t generate a test failure.
- [enabled](options/isenabled.md): A Boolean value that indicates whether the test checks for the expected failure.
- [strict](options/isstrict.md): A Boolean value that indicates whether the test reports an error if the expected failure doesn’t occur.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Expected Failures

- [XCTExpectedFailure](../xctexpectedfailure.md): An object that represents an expected test failure.
- [XCTExpectFailure](../xctexpectfailure.md): Instructs the test to expect a failure in an upcoming assertion.
- [XCTExpectFailureInBlock](../xctexpectfailureinblock.md): Instructs the test to expect a failure in an assertion in the provided block of code.
- [XCTExpectFailureWithOptions](../xctexpectfailurewithoptions.md): Instructs the test to expect a failure in an upcoming assertion, with options to customize expected failure checking and handling.
- [XCTExpectFailureWithOptionsInBlock](../xctexpectfailurewithoptionsinblock.md): Instructs the test to expect a failure in an assertion in the provided block of code, with options to customize expected failure checking and handling.
