> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/reason-swift.property

# reason (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The reason for the suspension.

## Declaration

```swift
var reason: AVCoordinatedPlaybackSuspension.Reason { get }
```

<a id="Discussion"></a>

## Discussion

The coordinator communicates the suspension reason to other participants.

## See Also

### Inspecting a suspension

- [beginDate](begindate.md): The time the suspension begins.
- [AVCoordinatedPlaybackSuspension.Reason](reason-swift.struct.md): Constants that identify playback suspension reasons.

# reason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The reason for the suspension.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCoordinatedPlaybackSuspensionReason reason;
```

<a id="Discussion"></a>

## Discussion

The coordinator communicates the suspension reason to other participants.

## See Also

### Inspecting a suspension

- [beginDate](begindate.md): The time the suspension begins.
- [AVCoordinatedPlaybackSuspensionReason](reason-swift.struct.md): Constants that identify playback suspension reasons.
