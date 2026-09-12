> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinatorratechangeoptions](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorratechangeoptions)

# AVDelegatingPlaybackCoordinatorRateChangeOptions (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Constants that define rate change options.

## Declaration

```swift
struct AVDelegatingPlaybackCoordinatorRateChangeOptions
```

## Topics

### Rate change options

- [playImmediately](avdelegatingplaybackcoordinatorratechangeoptions/playimmediately.md): Indicates that the coordinator should begin playback as soon as possible, regardless of other participant’s readiness or suspensions.

### Initializers

- [init(rawValue:)](avdelegatingplaybackcoordinatorratechangeoptions/init%28rawvalue_%29.md): Creates a rate change option with a string.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Coordinating state changes

- [coordinateRateChange(to:options:)](avdelegatingplaybackcoordinator/coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [coordinateSeek(to:options:)](avdelegatingplaybackcoordinator/coordinateseek%28to_options_%29.md): Coordinates a seek to the specified time for all connected participants.
- [transitionToItem(withIdentifier:proposingInitialTimingBasedOn:)](avdelegatingplaybackcoordinator/transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md): Tells the coordinator to transition to a new item.
- [reapplyCurrentItemStateToPlaybackControlDelegate()](avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md): Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.
- [AVDelegatingPlaybackCoordinatorSeekOptions](avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.

# AVDelegatingPlaybackCoordinatorRateChangeOptions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define rate change options.

## Declaration

```objectivec
enum AVDelegatingPlaybackCoordinatorRateChangeOptions : NSUInteger;
```

## Topics

### Rate change options

- [AVDelegatingPlaybackCoordinatorRateChangeOptionPlayImmediately](avdelegatingplaybackcoordinatorratechangeoptions/playimmediately.md): Indicates that the coordinator should begin playback as soon as possible, regardless of other participant’s readiness or suspensions.

## See Also

### Coordinating state changes

- [coordinateRateChangeToRate:options:](avdelegatingplaybackcoordinator/coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [coordinateSeekToTime:options:](avdelegatingplaybackcoordinator/coordinateseek%28to_options_%29.md): Coordinates a seek to the specified time for all connected participants.
- [transitionToItemWithIdentifier:proposingInitialTimingBasedOnTimebase:](avdelegatingplaybackcoordinator/transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md): Tells the coordinator to transition to a new item.
- [reapplyCurrentItemStateToPlaybackControlDelegate](avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md): Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.
- [AVDelegatingPlaybackCoordinatorSeekOptions](avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.
