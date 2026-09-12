> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/test(_:_:arguments:)-8kn7a](https://developer.apple.com/documentation/testing/test(_:_:arguments:)-8kn7a)

# Test(\_:\_:arguments:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Declare a test parameterized over a collection of values.

## Declaration

```swift
@attached(peer) macro Test<C>(_ displayName: String? = nil, _ traits: any TestTrait..., arguments collection: C) where C : Collection, C : Sendable, C.Element : Sendable
```

## Parameters

- `displayName`: The customized display name of this test. If the value of this argument is `nil`, the display name of the test is derived from the associated function’s name.
- `traits`: Zero or more traits to apply to this test.
- `collection`: A collection of values to pass to the associated test function.

<a id="overview"></a>

## Overview

You can prefix the expression you pass to `collection` with `try` or `await`. The testing library evaluates the expression lazily only if it determines that the associated test will run. During testing, the testing library calls the associated test function once for each element in `collection`.

## See Also

### Related Documentation

- [Defining test functions](definingtests.md): Define a test function to validate that code is working correctly.

### Test parameterization

- [Implementing parameterized tests](parameterizedtesting.md): Specify different input parameters to generate multiple test cases from a test function.
- [Test(\_:\_:arguments:\_:)](test%28____arguments___%29.md): Declare a test parameterized over two collections of values.
- [Test(\_:\_:arguments:)](test%28____arguments_%29-3rzok.md): Declare a test parameterized over two zipped collections of values.
- [CustomTestArgumentEncodable](customtestargumentencodable.md): A protocol for customizing how arguments passed to parameterized tests are encoded, which is used to match against when running specific arguments.
- [Test.Case](test/case.md): A single test case from a parameterized [Test](test.md).
