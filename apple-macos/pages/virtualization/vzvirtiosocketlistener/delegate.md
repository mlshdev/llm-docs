> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketlistener/delegate](https://developer.apple.com/documentation/virtualization/vzvirtiosocketlistener/delegate)

# delegate (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The custom object you use to respond to port-based connection attempts.

## Declaration

```swift
weak var delegate: (any VZVirtioSocketListenerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Your delegate object must conform to the [VZVirtioSocketListenerDelegate](../vzvirtiosocketlistenerdelegate.md) protocol.

## See Also

### Responding to new connections

- [VZVirtioSocketListenerDelegate](../vzvirtiosocketlistenerdelegate.md): An interface you use to manage connections between the guest operating system and host computer.

# delegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The custom object you use to respond to port-based connection attempts.

## Declaration

```objectivec
@property (weak, nullable) id<VZVirtioSocketListenerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Your delegate object must conform to the [VZVirtioSocketListenerDelegate](../vzvirtiosocketlistenerdelegate.md) protocol.

## See Also

### Responding to new connections

- [VZVirtioSocketListenerDelegate](../vzvirtiosocketlistenerdelegate.md): An interface you use to manage connections between the guest operating system and host computer.
