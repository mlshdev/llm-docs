> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/delegate](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The delegate that receives timecode updates from the timecode generator.

## Declaration

```swift
var delegate: (any AVCaptureTimecodeGeneratorDelegate)? { get }
```

<a id="discussion"></a>

## Discussion

You can use your [delegate](delegate.md) to receive real-time timecode updates. Implement the `timecodeGenerator:didReceiveUpdate:` method in your delegate to handle updates.

## See Also

### Handling delegate callbacks

- [delegateCallbackQueue](delegatecallbackqueue.md): The dispatch queue on which delegate callbacks are invoked.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The delegate that receives timecode updates from the timecode generator.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVCaptureTimecodeGeneratorDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

You can use your [delegate](delegate.md) to receive real-time timecode updates. Implement the `timecodeGenerator:didReceiveUpdate:` method in your delegate to handle updates.

## See Also

### Handling delegate callbacks

- [delegateCallbackQueue](delegatecallbackqueue.md): The dispatch queue on which delegate callbacks are invoked.
