> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvalueexpression](https://developer.apple.com/documentation/appintents/intentvalueexpression)

# IntentValueExpression

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that represents a lazily evaluated intent value.

## Declaration

```swift
struct IntentValueExpression
```

<a id="overview"></a>

## Overview

`IntentValueExpression` provides a mechanism for lazy evaluation of intent values, allowing values to be converted to containers only when needed. This approach improves performance by deferring potentially expensive conversions until they’re actually required.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Intent queries

- [IntentValueQuery](intentvaluequery.md): A query that provides entity values to the system; for example, for visual intelligence search.
- [IntentValueContainer](intentvaluecontainer.md): A container that stores a value that supports intent value conversion.
