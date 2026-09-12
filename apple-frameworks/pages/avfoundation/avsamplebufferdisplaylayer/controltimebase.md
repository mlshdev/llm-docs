> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/controltimebase](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/controltimebase)

# controlTimebase (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A timebase that determines how the layer interprets timestamps.

## Declaration

```swift
var controlTimebase: CMTimebase? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is `nil`, which indicates the layer interprets timestamps according the host time clock (`mach_absolute_time` with the appropriate timescale conversion; this is the same as Core Animation’s [CACurrentMediaTime()](../../quartzcore/cacurrentmediatime%28%29.md)). Without a control timebase, it isn’t possible to change when the layer displays frames after enqueuing them.

Setting a valid time base enables you to control the timing of frame display by setting the rate and time of the control timebase.

If you’re synchronizing video to audio, you should use a timebase whose host clock is a [CMClock](../../coremedia/cmclock.md) for the appropriate audio device to prevent drift. See [CMAudioClock](../../coremedia/cmaudioclock-api.md) for more information.

## See Also

### Configuring the layer

- [isReadyForDisplay](isreadyfordisplay.md): A Boolean value that indicates whether the first video frame is ready for display.
- [videoGravity](videogravity.md): A value that indicates how the layer displays video within its bounds.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

# controlTimebase (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A timebase that determines how the layer interprets timestamps.

## Declaration

```objectivec
@property (retain, nullable) CMTimebaseRef controlTimebase;
```

<a id="Discussion"></a>

## Discussion

By default, this property is `nil`, which indicates the layer interprets timestamps according the host time clock (`mach_absolute_time` with the appropriate timescale conversion; this is the same as Core Animation’s [CACurrentMediaTime](../../quartzcore/cacurrentmediatime%28%29.md)). Without a control timebase, it isn’t possible to change when the layer displays frames after enqueuing them.

Setting a valid time base enables you to control the timing of frame display by setting the rate and time of the control timebase.

If you’re synchronizing video to audio, you should use a timebase whose host clock is a [CMClockRef](../../coremedia/cmclock.md) for the appropriate audio device to prevent drift. See [CMAudioClock](../../coremedia/cmaudioclock-api.md) for more information.

## See Also

### Configuring the layer

- [readyForDisplay](isreadyfordisplay.md): A Boolean value that indicates whether the first video frame is ready for display.
- [videoGravity](videogravity.md): A value that indicates how the layer displays video within its bounds.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.
