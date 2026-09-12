> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/expectation](https://developer.apple.com/documentation/testing/expectation)

# Expectation

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A type describing an expectation that has been evaluated.

## Declaration

```swift
struct Expectation
```

## Topics

### Instance Properties

- [isPassing](expectation/ispassing.md): Whether the expectation passed or failed.
- [isRequired](expectation/isrequired.md): Whether or not the expectation was required to pass.
- [sourceLocation](expectation/sourcelocation.md): The source location where this expectation was evaluated.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving information about checked expectations

- [ExpectationFailedError](expectationfailederror.md): A type describing an error thrown when an expectation fails during evaluation.
