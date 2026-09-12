> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/pause(_:)](https://developer.apple.com/documentation/scenekit/scnview/pause(_:))

# pause(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Pauses playback of the view’s scene.

## Declaration

```swift
@IBAction func pause(_ sender: Any?)
```

## Parameters

- `sender`: The object requesting the action (used when connecting a control in Interface Builder). SceneKit ignores this parameter.

<a id="Discussion"></a>

## Discussion

This method has no effect if the scene is already paused.

## See Also

### Playing Action and Animation in a View’s Scene

- [play(\_:)](play%28__%29.md): Resumes playback of the view’s scene.
- [stop(\_:)](stop%28__%29.md): Stops playback of the view’s scene and resets the scene time to its start time.

# pause: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Pauses playback of the view’s scene.

## Declaration

```objectivec
- (void) pause:(id) sender;
```

## Parameters

- `sender`: The object requesting the action (used when connecting a control in Interface Builder). SceneKit ignores this parameter.

<a id="Discussion"></a>

## Discussion

This method has no effect if the scene is already paused.

## See Also

### Playing Action and Animation in a View’s Scene

- [play:](play%28__%29.md): Resumes playback of the view’s scene.
- [stop:](stop%28__%29.md): Stops playback of the view’s scene and resets the scene time to its start time.
