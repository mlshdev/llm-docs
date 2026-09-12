> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/test/case](https://developer.apple.com/documentation/testing/test/case)

# Test.Case

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A single test case from a parameterized [Test](../test.md).

## Declaration

```swift
struct Case
```

<a id="overview"></a>

## Overview

A test case represents a test run with a particular combination of inputs. Tests that are *not* parameterized map to a single instance of [Test.Case](case.md).

## Topics

### Instance Properties

- [isParameterized](case/isparameterized.md): Whether or not this test case is from a parameterized test.

### Type Properties

- [current](case/current.md): The test case that is running on the current task, if any.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Test parameterization

- [Implementing parameterized tests](../parameterizedtesting.md): Specify different input parameters to generate multiple test cases from a test function.
- [Test(\_:\_:arguments:)](../test%28____arguments_%29-8kn7a.md): Declare a test parameterized over a collection of values.
- [Test(\_:\_:arguments:\_:)](../test%28____arguments___%29.md): Declare a test parameterized over two collections of values.
- [Test(\_:\_:arguments:)](../test%28____arguments_%29-3rzok.md): Declare a test parameterized over two zipped collections of values.
- [CustomTestArgumentEncodable](../customtestargumentencodable.md): A protocol for customizing how arguments passed to parameterized tests are encoded, which is used to match against when running specific arguments.
