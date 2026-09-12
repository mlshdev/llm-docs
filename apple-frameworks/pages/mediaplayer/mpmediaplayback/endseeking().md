> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback/endseeking()](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback/endseeking())

# endSeeking() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Ends forward and backward seeking through the media content.

## Declaration

```swift
func endSeeking()
```

<a id="Discussion"></a>

## Discussion

You must call this method to end a seeking operation begun by calling either the [beginSeekingBackward()](beginseekingbackward%28%29.md) or [beginSeekingForward()](beginseekingforward%28%29.md) method. After calling this method, the player returns to the same state it was in prior to seeking. In other words, if the item was playing before seeking began, it continues playing from the new playhead position after calling this method.

This method has no effect on streamed content.

## See Also

### Seeking within media

- [beginSeekingBackward()](beginseekingbackward%28%29.md): Begins seeking backward through the media content.
- [beginSeekingForward()](beginseekingforward%28%29.md): Begins seeking forward through the media content.

# endSeeking (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Ends forward and backward seeking through the media content.

## Declaration

```objectivec
- (void) endSeeking;
```

<a id="Discussion"></a>

## Discussion

You must call this method to end a seeking operation begun by calling either the [beginSeekingBackward](beginseekingbackward%28%29.md) or [beginSeekingForward](beginseekingforward%28%29.md) method. After calling this method, the player returns to the same state it was in prior to seeking. In other words, if the item was playing before seeking began, it continues playing from the new playhead position after calling this method.

This method has no effect on streamed content.

## See Also

### Seeking within media

- [beginSeekingBackward](beginseekingbackward%28%29.md): Begins seeking backward through the media content.
- [beginSeekingForward](beginseekingforward%28%29.md): Begins seeking forward through the media content.
