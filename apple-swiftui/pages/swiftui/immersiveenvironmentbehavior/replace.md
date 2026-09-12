> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersiveenvironmentbehavior/replace](https://developer.apple.com/documentation/swiftui/immersiveenvironmentbehavior/replace)

# replace

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 26.0+

A behavior that replaces any currently opened immersive environment with the new scene.

## Declaration

```swift
static var replace: ImmersiveEnvironmentBehavior { get }
```

<a id="discussion"></a>

## Discussion

Use this value with the [immersiveEnvironmentBehavior(\_:)](../scene/immersiveenvironmentbehavior%28__%29.md) scene modifier to define that the system should hide the system’s immersive environment before opening the scene.
