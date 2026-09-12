> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoview/stopplayback(animated:)](https://developer.apple.com/documentation/photosui/phlivephotoview/stopplayback(animated:))

# stopPlayback(animated:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Stops playback of a Live Photo in an animated manner.

## Declaration

```swift
func stopPlayback(animated: Bool)
```

## Parameters

- `animated`: A Boolean value that indicates whether playback stops immediately or with animation.

<a id="Discussion"></a>

## Discussion

Calling this method with a value of `false` is the same as calling [stopPlayback()](stopplayback%28%29.md).

## See Also

### Manually Playing Live Photo Content

- [startPlayback(with:)](startplayback%28with_%29.md): Begins playback of Live Photo content in the view.
- [stopPlayback()](stopplayback%28%29.md): Stops playback of a Live Photo.

# stopPlaybackAnimated: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Stops playback of a Live Photo in an animated manner.

## Declaration

```objectivec
- (void) stopPlaybackAnimated:(BOOL) animated;
```

## Parameters

- `animated`: A Boolean value that indicates whether playback stops immediately or with animation.

<a id="Discussion"></a>

## Discussion

Calling this method with a value of `false` is the same as calling [stopPlayback](stopplayback%28%29.md).

## See Also

### Manually Playing Live Photo Content

- [startPlaybackWithStyle:](startplayback%28with_%29.md): Begins playback of Live Photo content in the view.
- [stopPlayback](stopplayback%28%29.md): Stops playback of a Live Photo.
