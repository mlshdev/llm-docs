> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaycommand/rate

# rate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A rate to use when starting playback.

## Declaration

```swift
var rate: Float { get }
```

<a id="Discussion"></a>

## Discussion

This value is always nonzero.

## See Also

### Accessing command details

- [itemTime](itemtime.md): A time in the item timeline to use to begin playback.
- [hostClockTime](hostclocktime.md): A host clock time to use to begin playback.

# rate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A rate to use when starting playback.

## Declaration

```objectivec
@property (nonatomic, readonly) float rate;
```

<a id="Discussion"></a>

## Discussion

This value is always nonzero.

## See Also

### Accessing command details

- [itemTime](itemtime.md): A time in the item timeline to use to begin playback.
- [hostClockTime](hostclocktime.md): A host clock time to use to begin playback.
