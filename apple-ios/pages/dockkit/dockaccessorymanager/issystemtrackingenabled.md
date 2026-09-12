> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessorymanager/issystemtrackingenabled](https://developer.apple.com/documentation/dockkit/dockaccessorymanager/issystemtrackingenabled)

# isSystemTrackingEnabled

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An indication of whether system tracking is enabled.

## Declaration

```swift
var isSystemTrackingEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is `true` if system tracking is enabled; otherwise the property is `false`. To change system tracking behavior, see [setSystemTrackingEnabled(\_:)](setsystemtrackingenabled%28__%29.md).

## See Also

### Changing tracking behavior

- [setSystemTrackingEnabled(\_:)](setsystemtrackingenabled%28__%29.md): Enable and disable system tracking for camera-enabled apps.
