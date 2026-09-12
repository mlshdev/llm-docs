> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatiming/fillmode](https://developer.apple.com/documentation/quartzcore/camediatiming/fillmode)

# fillMode (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines if the receiver’s presentation is frozen or removed once its active duration has completed.

## Declaration

```swift
var fillMode: CAMediaTimingFillMode { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values are described in [Fill Modes](../fill-modes.md). The default is [removed](../camediatimingfillmode/removed.md).

## See Also

### Playback Modes

- [autoreverses](autoreverses.md): Determines if the receiver plays in the reverse upon completion.

# fillMode (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines if the receiver’s presentation is frozen or removed once its active duration has completed.

## Declaration

```objectivec
@property (copy) CAMediaTimingFillMode fillMode;
```

<a id="Discussion"></a>

## Discussion

The possible values are described in [Fill Modes](../fill-modes.md). The default is [kCAFillModeRemoved](../camediatimingfillmode/removed.md).

## See Also

### Playback Modes

- [autoreverses](autoreverses.md): Determines if the receiver plays in the reverse upon completion.
