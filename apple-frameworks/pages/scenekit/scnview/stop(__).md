> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/stop(_:)](https://developer.apple.com/documentation/scenekit/scnview/stop(_:))

# stop(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Stops playback of the view’s scene and resets the scene time to its start time.

## Declaration

```swift
@IBAction func stop(_ sender: Any?)
```

## Parameters

- `sender`: The object requesting the action (used when connecting a control in Interface Builder). SceneKit ignores this parameter.

## See Also

### Playing Action and Animation in a View’s Scene

- [pause(\_:)](pause%28__%29.md): Pauses playback of the view’s scene.
- [play(\_:)](play%28__%29.md): Resumes playback of the view’s scene.

# stop: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Stops playback of the view’s scene and resets the scene time to its start time.

## Declaration

```objectivec
- (void) stop:(id) sender;
```

## Parameters

- `sender`: The object requesting the action (used when connecting a control in Interface Builder). SceneKit ignores this parameter.

## See Also

### Playing Action and Animation in a View’s Scene

- [pause:](pause%28__%29.md): Pauses playback of the view’s scene.
- [play:](play%28__%29.md): Resumes playback of the view’s scene.
