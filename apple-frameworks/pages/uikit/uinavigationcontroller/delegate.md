> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/delegate](https://developer.apple.com/documentation/uikit/uinavigationcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate of the navigation controller object.

## Declaration

```swift
weak var delegate: (any UINavigationControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use the navigation delegate to perform additional actions in response to changes in the navigation interface. For more information about implementing the delegate, see [UINavigationControllerDelegate](../uinavigationcontrollerdelegate.md).

## See Also

### Customizing the navigation interface behavior

- [UINavigationControllerDelegate](../uinavigationcontrollerdelegate.md): The interface for an object that serves as a navigation controller’s delegate.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate of the navigation controller object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UINavigationControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

You can use the navigation delegate to perform additional actions in response to changes in the navigation interface. For more information about implementing the delegate, see [UINavigationControllerDelegate](../uinavigationcontrollerdelegate.md).

## See Also

### Customizing the navigation interface behavior

- [UINavigationControllerDelegate](../uinavigationcontrollerdelegate.md): The interface for an object that serves as a navigation controller’s delegate.
