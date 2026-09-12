> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/customtestargumentencodable](https://developer.apple.com/documentation/testing/customtestargumentencodable)

# CustomTestArgumentEncodable

**Framework:** Swift Testing  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A protocol for customizing how arguments passed to parameterized tests are encoded, which is used to match against when running specific arguments.

## Declaration

```swift
protocol CustomTestArgumentEncodable : Sendable
```

## Mentioned In

- [Implementing parameterized tests](parameterizedtesting.md)

<a id="overview"></a>

## Overview

The testing library checks whether a test argument conforms to this protocol, or any of several other known protocols, when running selected test cases. When a test argument conforms to this protocol, that conformance takes highest priority, and the testing library will then call [encodeTestArgument(to:)](customtestargumentencodable/encodetestargument%28to_%29.md) on the argument. A type that conforms to this protocol is not required to conform to either `Encodable` or `Decodable`.

See [Implementing parameterized tests](parameterizedtesting.md) for a list of the other supported ways to allow running selected test cases.

## Topics

### Instance Methods

- [encodeTestArgument(to:)](customtestargumentencodable/encodetestargument%28to_%29.md): Encode this test argument.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [Implementing parameterized tests](parameterizedtesting.md): Specify different input parameters to generate multiple test cases from a test function.

### Test parameterization

- [Implementing parameterized tests](parameterizedtesting.md): Specify different input parameters to generate multiple test cases from a test function.
- [Test(\_:\_:arguments:)](test%28____arguments_%29-8kn7a.md): Declare a test parameterized over a collection of values.
- [Test(\_:\_:arguments:\_:)](test%28____arguments___%29.md): Declare a test parameterized over two collections of values.
- [Test(\_:\_:arguments:)](test%28____arguments_%29-3rzok.md): Declare a test parameterized over two zipped collections of values.
- [Test.Case](test/case.md): A single test case from a parameterized [Test](test.md).
