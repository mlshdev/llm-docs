> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/confirmation](https://developer.apple.com/documentation/testing/confirmation)

# Confirmation

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A type that can be used to confirm that an event occurs zero or more times.

## Declaration

```swift
struct Confirmation
```

## Mentioned In

- [Migrating a test from XCTest](migratingfromxctest.md)
- [Testing asynchronous code](testing-asynchronous-code.md)

## Topics

### Instance Methods

- [callAsFunction(count:)](confirmation/callasfunction%28count_%29.md): Confirm this confirmation.
- [confirm(count:)](confirmation/confirm%28count_%29.md): Confirm this confirmation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Confirming that asynchronous events occur

- [Testing asynchronous code](testing-asynchronous-code.md): Validate whether your code causes expected events to happen.
- [confirmation(\_:expectedCount:isolation:sourceLocation:\_:)](confirmation%28__expectedcount_isolation_sourcelocation___%29-5mqz2.md): Confirm that some event occurs during the invocation of a function.
- [confirmation(\_:expectedCount:isolation:sourceLocation:\_:)](confirmation%28__expectedcount_isolation_sourcelocation___%29-l3il.md): Confirm that some event occurs during the invocation of a function.
