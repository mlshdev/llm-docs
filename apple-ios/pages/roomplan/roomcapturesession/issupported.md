> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/roomcapturesession/issupported

# isSupported

**Framework:** RoomPlan  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A Boolean value that indicates whether the user’s device supports the framework.

## Declaration

```swift
static var isSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

Before attempting to begin a session, ensure the user’s device supports room scanning. This property is `true` if the device contains a LiDAR Scanner; otherwise, `false`.
