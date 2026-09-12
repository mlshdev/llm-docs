> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback/beginseekingforward()](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback/beginseekingforward())

# beginSeekingForward() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Begins seeking forward through the media content.

## Declaration

```swift
func beginSeekingForward()
```

<a id="Discussion"></a>

## Discussion

Use this method to move the current playback position forward in time at an accelerated rate. Seeking begins when you call this method and continues until you call the [endSeeking()](endseeking%28%29.md) method.

This method has no effect on streamed content.

## See Also

### Seeking within media

- [beginSeekingBackward()](beginseekingbackward%28%29.md): Begins seeking backward through the media content.
- [endSeeking()](endseeking%28%29.md): Ends forward and backward seeking through the media content.

# beginSeekingForward (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Begins seeking forward through the media content.

## Declaration

```objectivec
- (void) beginSeekingForward;
```

<a id="Discussion"></a>

## Discussion

Use this method to move the current playback position forward in time at an accelerated rate. Seeking begins when you call this method and continues until you call the [endSeeking](endseeking%28%29.md) method.

This method has no effect on streamed content.

## See Also

### Seeking within media

- [beginSeekingBackward](beginseekingbackward%28%29.md): Begins seeking backward through the media content.
- [endSeeking](endseeking%28%29.md): Ends forward and backward seeking through the media content.
