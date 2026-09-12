> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/delegate](https://developer.apple.com/documentation/appkit/nspagecontroller/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The page controller’s delegate object.

## Declaration

```swift
@IBOutlet weak var delegate: (any NSPageControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSPageControllerDelegate](../nspagecontrollerdelegate.md) protocol.

## See Also

### Customizing the Paged Interface Behavior

- [NSPageControllerDelegate](../nspagecontrollerdelegate.md): The `NSPageControllerDelegate` protocol allows you to customize the behavior of instances of the NSPageController class.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The page controller’s delegate object.

## Declaration

```objectivec
@property (weak, nullable) id<NSPageControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSPageControllerDelegate](../nspagecontrollerdelegate.md) protocol.

## See Also

### Customizing the Paged Interface Behavior

- [NSPageControllerDelegate](../nspagecontrollerdelegate.md): The `NSPageControllerDelegate` protocol allows you to customize the behavior of instances of the NSPageController class.
