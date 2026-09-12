> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceskscene/ispaused](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene/ispaused)

# isPaused (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

A Boolean value that determines whether the view’s scene animations are paused.

## Declaration

```swift
var isPaused: Bool { get set }
```

## Mentioned In

- [Configuring a WatchKit Scene in a Storyboard](../configuring-a-watchkit-scene-in-a-storyboard.md)

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the scene’s content is fixed onscreen. No actions are executed and no physics simulation is performed.

## See Also

### Controlling the Timing of a Scene’s Rendering

- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the interface uses to render its scene.

# paused (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

A Boolean value that determines whether the view’s scene animations are paused.

## Declaration

```objectivec
@property (nonatomic, getter=isPaused) BOOL paused;
```

## Mentioned In

- [Configuring a WatchKit Scene in a Storyboard](../configuring-a-watchkit-scene-in-a-storyboard.md)

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the scene’s content is fixed onscreen. No actions are executed and no physics simulation is performed.

## See Also

### Controlling the Timing of a Scene’s Rendering

- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the interface uses to render its scene.
