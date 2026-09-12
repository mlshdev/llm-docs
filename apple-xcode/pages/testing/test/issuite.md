> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/test/issuite](https://developer.apple.com/documentation/testing/test/issuite)

# isSuite

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Whether or not this instance is a test suite containing other tests.

## Declaration

```swift
var isSuite: Bool { get }
```

<a id="discussion"></a>

## Discussion

Instances of [Test](../test.md) attached to types rather than functions are test suites. They do not contain any test logic of their own, but they may have traits added to them that also apply to their subtests.

A test suite can be declared using the [Suite(\_:\_:)](../suite%28____%29.md) macro.
