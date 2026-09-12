> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinputpickerinteraction/delegate-swift.property](https://developer.apple.com/documentation/avkit/avinputpickerinteraction/delegate-swift.property)

# delegate (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The input picker view’s delegate.

## Declaration

```swift
weak var delegate: (any AVInputPickerInteraction.Delegate)? { get set }
```

## See Also

### Setting the delegate

- [AVInputPickerInteraction.Delegate](delegate-swift.protocol.md): The `AVInputPickerInteractionDelegate` protocol defines methods you use to receive notifications about transitions in an `AVInputPickerInteraction` object.

# delegate (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The input picker view’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<AVInputPickerInteractionDelegate> delegate;
```

## See Also

### Setting the delegate

- [AVInputPickerInteractionDelegate](delegate-swift.protocol.md): The `AVInputPickerInteractionDelegate` protocol defines methods you use to receive notifications about transitions in an `AVInputPickerInteraction` object.
