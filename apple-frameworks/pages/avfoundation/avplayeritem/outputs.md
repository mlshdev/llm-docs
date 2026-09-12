> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/outputs](https://developer.apple.com/documentation/avfoundation/avplayeritem/outputs)

# outputs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of outputs associated with the player item.

## Declaration

```swift
nonisolated var outputs: [AVPlayerItemOutput] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the collection of [AVPlayerItemOutput](../avplayeritemoutput.md) objects used to transfer media data to the player object.

## See Also

### Managing player item outputs

- [add(\_:)](add%28__%29-16ctk.md): Adds the specified player item output object to the receiver.
- [remove(\_:)](remove%28__%29-46b1r.md): Removes the specified player item output object from the receiver.

# outputs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of outputs associated with the player item.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVPlayerItemOutput *> * outputs;
```

<a id="Discussion"></a>

## Discussion

This property contains the collection of [AVPlayerItemOutput](../avplayeritemoutput.md) objects used to transfer media data to the player object.

## See Also

### Managing player item outputs

- [addOutput:](add%28__%29-16ctk.md): Adds the specified player item output object to the receiver.
- [removeOutput:](remove%28__%29-46b1r.md): Removes the specified player item output object from the receiver.
