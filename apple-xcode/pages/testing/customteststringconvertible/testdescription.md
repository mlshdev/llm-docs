> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/customteststringconvertible/testdescription](https://developer.apple.com/documentation/testing/customteststringconvertible/testdescription)

# testDescription

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A description of this instance to use when presenting it in a test’s output.

## Declaration

```swift
var testDescription: String { get }
```

## Mentioned In

- [Describing and reflecting values](../describing-values.md)

<a id="discussion"></a>

## Discussion

Do not use this property directly. To get the test description of a value, use `Swift/String/init(describingForTest:)`.

## Default Implementations

### CustomTestStringConvertible Implementations

- [testDescription](testdescription-3ar66.md): Conforms when `Self` conforms to `StringProtocol`. A description of this instance to use when presenting it in a test’s output.
