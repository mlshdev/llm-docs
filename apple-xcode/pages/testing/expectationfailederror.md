> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/expectationfailederror](https://developer.apple.com/documentation/testing/expectationfailederror)

# ExpectationFailedError

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A type describing an error thrown when an expectation fails during evaluation.

## Declaration

```swift
struct ExpectationFailedError
```

<a id="overview"></a>

## Overview

The testing library throws instances of this type when the `#require()` macro records an issue.

## Topics

### Instance Properties

- [expectation](expectationfailederror/expectation.md): The expectation that failed.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving information about checked expectations

- [Expectation](expectation.md): A type describing an expectation that has been evaluated.
