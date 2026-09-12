> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avroutepickerview/delegate](https://developer.apple.com/documentation/avkit/avroutepickerview/delegate)

# delegate (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+

The delegate object for the route picker.

## Declaration

```swift
weak var delegate: (any AVRoutePickerViewDelegate)? { get set }
```

## See Also

### Configuring the delegate

- [AVRoutePickerViewDelegate](../avroutepickerviewdelegate.md): A protocol that defines the methods to adopt to respond to route picker view presentation events.

# delegate (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+

The delegate object for the route picker.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<AVRoutePickerViewDelegate> delegate;
```

## See Also

### Configuring the delegate

- [AVRoutePickerViewDelegate](../avroutepickerviewdelegate.md): A protocol that defines the methods to adopt to respond to route picker view presentation events.
