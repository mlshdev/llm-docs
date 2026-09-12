> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenerestorationbehavior/automatic](https://developer.apple.com/documentation/swiftui/scenerestorationbehavior/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The automatic behavior. The scene’s windows will be restored as defined by the underlying platform.

## Declaration

```swift
static let automatic: SceneRestorationBehavior
```

<a id="discussion"></a>

## Discussion

On macOS, this behavior is governed by a system setting which can be toggled on and off by the user. On all other platforms, it is enabled by default.
