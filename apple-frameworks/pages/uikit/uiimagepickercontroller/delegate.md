> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/delegate](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The image picker’s delegate object.

## Declaration

```swift
weak var delegate: (any UIImagePickerControllerDelegate & UINavigationControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate receives notifications when the user picks an image or movie, or exits the picker interface. The delegate also decides when to dismiss the picker interface, so you must provide a delegate to use a picker. If this property is `nil`, the picker is dismissed immediately if you try to show it.

For information about the methods you can implement for your delegate object, see [UIImagePickerControllerDelegate](../uiimagepickercontrollerdelegate.md).

## See Also

### Responding to interactions with the picker

- [UIImagePickerControllerDelegate](../uiimagepickercontrollerdelegate.md): A set of methods that your delegate object must implement to interact with the image picker interface.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The image picker’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIImagePickerControllerDelegate,UINavigationControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate receives notifications when the user picks an image or movie, or exits the picker interface. The delegate also decides when to dismiss the picker interface, so you must provide a delegate to use a picker. If this property is `nil`, the picker is dismissed immediately if you try to show it.

For information about the methods you can implement for your delegate object, see [UIImagePickerControllerDelegate](../uiimagepickercontrollerdelegate.md).

## See Also

### Responding to interactions with the picker

- [UIImagePickerControllerDelegate](../uiimagepickercontrollerdelegate.md): A set of methods that your delegate object must implement to interact with the image picker interface.
