> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/syncableentityidentifier/init(local:stable:)](https://developer.apple.com/documentation/appintents/syncableentityidentifier/init(local:stable:))

# init(local:stable:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an identifier with both local and stable IDs.

## Declaration

```swift
init(local: LocalID, stable: StableID)
```

## Parameters

- `local`: The device-specific identifier
- `stable`: The cross-device stable identifier

<a id="discussion"></a>

## Discussion

Use this initializer when you use separate local and stable identifiers to refer to your entity.
