> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/test(_:_:arguments:_:)](https://developer.apple.com/documentation/testing/test(_:_:arguments:_:))

# Test(\_:\_:arguments:\_:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Declare a test parameterized over two collections of values.

## Declaration

```swift
@attached(peer) macro Test<C1, C2>(_ displayName: String? = nil, _ traits: any TestTrait..., arguments collection1: C1, _ collection2: C2) where C1 : Collection, C1 : Sendable, C2 : Collection, C2 : Sendable, C1.Element : Sendable, C2.Element : Sendable
```

## Parameters

- `displayName`: The customized display name of this test. If the value of this argument is `nil`, the display name of the test is derived from the associated function’s name.
- `traits`: Zero or more traits to apply to this test.
- `collection1`: A collection of values to pass to `testFunction`.
- `collection2`: A second collection of values to pass to `testFunction`.

<a id="overview"></a>

## Overview

You can prefix the expressions you pass to `collection1` or `collection2` with `try` or `await`. The testing library evaluates the expressions lazily only if it determines that the associated test will run. During testing, the testing library calls the associated test function once for each pair of elements in `collection1` and `collection2`.

## See Also

### Related Documentation

- [Defining test functions](definingtests.md): Define a test function to validate that code is working correctly.

### Test parameterization

- [Implementing parameterized tests](parameterizedtesting.md): Specify different input parameters to generate multiple test cases from a test function.
- [Test(\_:\_:arguments:)](test%28____arguments_%29-8kn7a.md): Declare a test parameterized over a collection of values.
- [Test(\_:\_:arguments:)](test%28____arguments_%29-3rzok.md): Declare a test parameterized over two zipped collections of values.
- [CustomTestArgumentEncodable](customtestargumentencodable.md): A protocol for customizing how arguments passed to parameterized tests are encoded, which is used to match against when running specific arguments.
- [Test.Case](test/case.md): A single test case from a parameterized [Test](test.md).
