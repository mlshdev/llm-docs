> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityreportscene/context](https://developer.apple.com/documentation/deviceactivity/deviceactivityreportscene/context)

# context

**Framework:** DeviceActivity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

The context of the scene.

## Declaration

```swift
var context: DeviceActivityReport.Context { get }
```

<a id="discussion"></a>

## Discussion

When your app creates a `DeviceActivityReport` with this context, the system uses this scene to render the report’s content.
