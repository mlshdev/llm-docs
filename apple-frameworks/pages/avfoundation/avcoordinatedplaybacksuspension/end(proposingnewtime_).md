> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybacksuspension/end(proposingnewtime:)](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/end(proposingnewtime:))

# end(proposingNewTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Ends a suspension and proposes a new playback time to the group.

## Declaration

```swift
func end(proposingNewTime time: CMTime)
```

## Parameters

- `time`: The proposed playback time. Passing a nonnumeric time results in the same behavior as calling the [end()](end%28%29.md) method.

<a id="Discussion"></a>

## Discussion

If this is the last suspension, the coordinator proposes a new time to the group without changing the group’s playback rate. If it isn’t, the coordinator only proposes the new time after all other suspensions end.

A suspension that ends after this one ends can override the proposed time. Similarly, playback commands from the group that arrive after this suspension ends, override a pending proposal.

## See Also

### Ending a suspension

- [end()](end%28%29.md): Ends a suspension.

# endProposingNewTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Ends a suspension and proposes a new playback time to the group.

## Declaration

```objectivec
- (void) endProposingNewTime:(CMTime) time;
```

## Parameters

- `time`: The proposed playback time. Passing a nonnumeric time results in the same behavior as calling the [end](end%28%29.md) method.

<a id="Discussion"></a>

## Discussion

If this is the last suspension, the coordinator proposes a new time to the group without changing the group’s playback rate. If it isn’t, the coordinator only proposes the new time after all other suspensions end.

A suspension that ends after this one ends can override the proposed time. Similarly, playback commands from the group that arrive after this suspension ends, override a pending proposal.

## See Also

### Ending a suspension

- [end](end%28%29.md): Ends a suspension.
