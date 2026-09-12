> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/issupported](https://developer.apple.com/documentation/roomplan/roomcapturesession/issupported)

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
