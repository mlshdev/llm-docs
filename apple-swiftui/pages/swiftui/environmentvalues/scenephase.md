> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/scenephase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase)

# scenePhase

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The current phase of the scene.

## Declaration

```swift
var scenePhase: ScenePhase { get set }
```

<a id="discussion"></a>

## Discussion

The system sets this value to provide an indication of the operational state of a scene or collection of scenes. The exact meaning depends on where you access the value. For more information, see [ScenePhase](../scenephase.md).

## See Also

### Monitoring scene life cycle

- [ScenePhase](../scenephase.md): An indication of a scene’s operational state.
