> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/syncableentityidentifier/stable](https://developer.apple.com/documentation/appintents/syncableentityidentifier/stable)

# stable

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The identifier you use to refer to the entity across devices.

## Declaration

```swift
let stable: StableID?
```

<a id="discussion"></a>

## Discussion

Use this property to retrieve the stable identifier value you specified at initialization time. When the framework creates identifiers for on-device operations, it can set this property to `nil` if it doesn’t need the stable identifier.
