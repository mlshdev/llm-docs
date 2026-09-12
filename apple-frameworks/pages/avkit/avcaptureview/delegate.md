> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureview/delegate](https://developer.apple.com/documentation/avkit/avcaptureview/delegate)

# delegate (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The capture view’s delegate object.

## Declaration

```swift
weak var delegate: (any AVCaptureViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The capture view disables the start recording button if you don’t provide a delegate object.

## See Also

### Configuring the Delegate

- [AVCaptureViewDelegate](../avcaptureviewdelegate.md): The protocol that defines the methods you can implement to respond to capture view events.

# delegate (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The capture view’s delegate object.

## Declaration

```objectivec
@property (weak, nullable) id<AVCaptureViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The capture view disables the start recording button if you don’t provide a delegate object.

## See Also

### Configuring the Delegate

- [AVCaptureViewDelegate](../avcaptureviewdelegate.md): The protocol that defines the methods you can implement to respond to capture view events.
