> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/remove(_:)-46b1r](https://developer.apple.com/documentation/avfoundation/avplayeritem/remove(_:)-46b1r)

# remove(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the specified player item output object from the receiver.

## Declaration

```swift
nonisolated func remove(_ output: AVPlayerItemOutput)
```

## Parameters

- `output`: The player item output object to remove.

## See Also

### Managing player item outputs

- [outputs](outputs.md): An array of outputs associated with the player item.
- [add(\_:)](add%28__%29-16ctk.md): Adds the specified player item output object to the receiver.

# removeOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Removes the specified player item output object from the receiver.

## Declaration

```objectivec
- (void) removeOutput:(AVPlayerItemOutput *) output;
```

## Parameters

- `output`: The player item output object to remove.

## See Also

### Managing player item outputs

- [outputs](outputs.md): An array of outputs associated with the player item.
- [addOutput:](add%28__%29-16ctk.md): Adds the specified player item output object to the receiver.
