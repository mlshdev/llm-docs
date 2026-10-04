> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/begindate

# beginDate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The time the suspension begins.

## Declaration

```swift
var beginDate: Date { get }
```

## See Also

### Inspecting a suspension

- [reason](reason-swift.property.md): The reason for the suspension.
- [AVCoordinatedPlaybackSuspension.Reason](reason-swift.struct.md): Constants that identify playback suspension reasons.

# beginDate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The time the suspension begins.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * beginDate;
```

## See Also

### Inspecting a suspension

- [reason](reason-swift.property.md): The reason for the suspension.
- [AVCoordinatedPlaybackSuspensionReason](reason-swift.struct.md): Constants that identify playback suspension reasons.
