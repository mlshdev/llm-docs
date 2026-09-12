> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue](https://developer.apple.com/documentation/testing/issue)

# Issue

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A type describing a failure or warning which occurred during a test.

## Declaration

```swift
struct Issue
```

## Mentioned In

- [Associating bugs with tests](associatingbugs.md)
- [Interpreting bug identifiers](bugidentifiers.md)

## Topics

### Instance Properties

- [comments](issue/comments.md): Any comments provided by the developer and associated with this issue.
- [error](issue/error.md): The error which was associated with this issue, if any.
- [isFailure](issue/isfailure.md): Whether or not this issue should cause the test it’s associated with to be considered a failure.
- [kind](issue/kind-swift.property.md): The kind of issue this value represents.
- [severity](issue/severity-swift.property.md): The severity of this issue.
- [sourceLocation](issue/sourcelocation.md): The location in source where this issue occurred, if available.

### Type Methods

- [record(\_:\_:sourceLocation:)](issue/record%28____sourcelocation_%29.md): Record a new issue when a running test unexpectedly catches an error.
- [record(\_:severity:sourceLocation:)](issue/record%28__severity_sourcelocation_%29.md): Records an issue that a test encounters while it’s running.
- [record(\_:sourceLocation:)](issue/record%28__sourcelocation_%29.md): Deprecated. Records an issue that a test encounters while it’s running.

### Enumerations

- [Issue.Kind](issue/kind-swift.enum.md): Kinds of issues which may be recorded.
- [Issue.Severity](issue/severity-swift.enum.md): An enumeration representing the level of severity of a recorded issue.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
