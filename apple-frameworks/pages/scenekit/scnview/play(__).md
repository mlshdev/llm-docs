> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/play(_:)](https://developer.apple.com/documentation/scenekit/scnview/play(_:))

# play(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Resumes playback of the view’s scene.

## Declaration

```swift
@IBAction func play(_ sender: Any?)
```

## Parameters

- `sender`: The object requesting the action (used when connecting a control in Interface Builder). SceneKit ignores this parameter.

<a id="Discussion"></a>

## Discussion

This method has no effect if the scene is not paused.

## See Also

### Playing Action and Animation in a View’s Scene

- [pause(\_:)](pause%28__%29.md): Pauses playback of the view’s scene.
- [stop(\_:)](stop%28__%29.md): Stops playback of the view’s scene and resets the scene time to its start time.

# play: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Resumes playback of the view’s scene.

## Declaration

```objectivec
- (void) play:(id) sender;
```

## Parameters

- `sender`: The object requesting the action (used when connecting a control in Interface Builder). SceneKit ignores this parameter.

<a id="Discussion"></a>

## Discussion

This method has no effect if the scene is not paused.

## See Also

### Playing Action and Animation in a View’s Scene

- [pause:](pause%28__%29.md): Pauses playback of the view’s scene.
- [stop:](stop%28__%29.md): Stops playback of the view’s scene and resets the scene time to its start time.
