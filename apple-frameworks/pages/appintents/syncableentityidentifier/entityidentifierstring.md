> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/syncableentityidentifier/entityidentifierstring](https://developer.apple.com/documentation/appintents/syncableentityidentifier/entityidentifierstring)

# entityIdentifierString

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the string representation of this identifier’s local ID.

## Declaration

```swift
var entityIdentifierString: String { get }
```

<a id="return-value"></a>

## Return Value

The local ID’s string representation

<a id="discussion"></a>

## Discussion

This method requires a local ID to be present. Stable-only identifiers (created via the `@_spi(_)` initializer) should not have this method called.

> **Precondition**

> The identifier must have a local ID
