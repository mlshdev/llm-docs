> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybacksuspension/end()](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/end())

# end() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Ends a suspension.

## Declaration

```swift
func end()
```

<a id="Discussion"></a>

## Discussion

If this is the last suspension, the coordinator adjusts the timing of its playback object to match the group.

To end a suspension and simultaneously propose a new playback time to the group, call the [end(proposingNewTime:)](end%28proposingnewtime_%29.md) method.

## See Also

### Ending a suspension

- [end(proposingNewTime:)](end%28proposingnewtime_%29.md): Ends a suspension and proposes a new playback time to the group.

# end (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Ends a suspension.

## Declaration

```objectivec
- (void) end;
```

<a id="Discussion"></a>

## Discussion

If this is the last suspension, the coordinator adjusts the timing of its playback object to match the group.

To end a suspension and simultaneously propose a new playback time to the group, call the [endProposingNewTime:](end%28proposingnewtime_%29.md) method.

## See Also

### Ending a suspension

- [endProposingNewTime:](end%28proposingnewtime_%29.md): Ends a suspension and proposes a new playback time to the group.
