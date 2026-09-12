> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadataoutput/advanceintervalfordelegateinvocation](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/advanceintervalfordelegateinvocation)

# advanceIntervalForDelegateInvocation (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.

## Declaration

```swift
var advanceIntervalForDelegateInvocation: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

If  possible, an `AVPlayerItemMetadataOutput` will message its delegate `advanceIntervalForDelegateInvocation` seconds earlier than otherwise. If the value you provide is large, effectively requesting provision of samples earlier than the `AVPlayerItemMetadataOutput` is prepared to act on them, the delegate will be invoked as soon as possible.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate object.
- [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [delegateQueue](delegatequeue.md): The dispatch queue on which messages are sent to the delegate.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.

# advanceIntervalForDelegateInvocation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The time interval, in seconds, the player item metadata output object messages its delegate earlier than normal.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSTimeInterval advanceIntervalForDelegateInvocation;
```

<a id="Discussion"></a>

## Discussion

If  possible, an `AVPlayerItemMetadataOutput` will message its delegate `advanceIntervalForDelegateInvocation` seconds earlier than otherwise. If the value you provide is large, effectively requesting provision of samples earlier than the `AVPlayerItemMetadataOutput` is prepared to act on them, the delegate will be invoked as soon as possible.

## See Also

### Configuring the delegate

- [delegate](delegate.md): The delegate object.
- [AVPlayerItemMetadataOutputPushDelegate](../avplayeritemmetadataoutputpushdelegate.md): Methods you can implement to provide additional metadata.
- [delegateQueue](delegatequeue.md): The dispatch queue on which messages are sent to the delegate.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate and a dispatch queue on which the delegate is called.
