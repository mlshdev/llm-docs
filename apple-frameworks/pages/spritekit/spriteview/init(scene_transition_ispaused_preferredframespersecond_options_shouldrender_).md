> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/spriteview/init(scene:transition:ispaused:preferredframespersecond:options:shouldrender:)](https://developer.apple.com/documentation/spritekit/spriteview/init(scene:transition:ispaused:preferredframespersecond:options:shouldrender:))

# init(scene:transition:isPaused:preferredFramesPerSecond:options:shouldRender:)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS

## Declaration

```swift
@preconcurrency nonisolated init(scene: SKScene, transition: SKTransition? = nil, isPaused: Bool = false, preferredFramesPerSecond: Int = 60, options: SpriteView.Options = [.shouldCullNonVisibleNodes], shouldRender: @escaping @MainActor (TimeInterval) -> Bool = { _ in true })
```

## See Also

### Creating a Sprite View

- [init(scene:transition:isPaused:preferredFramesPerSecond:)](init%28scene_transition_ispaused_preferredframespersecond_%29.md)
- [init(scene:transition:isPaused:preferredFramesPerSecond:options:debugOptions:shouldRender:)](init%28scene_transition_ispaused_preferredframespersecond_options_debugoptions_shouldrender_%29.md)
- [SpriteView.Options](options.md)
- [SpriteView.DebugOptions](debugoptions.md)
