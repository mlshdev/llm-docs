> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/delegate](https://developer.apple.com/documentation/uikit/uisearchcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The search controller’s delegate.

## Declaration

```swift
weak var delegate: (any UISearchControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the delegate object to receive notifications when the search results controller is presented and dismissed. You might use these notifications to customize the search interface or perform related actions.

## See Also

### Responding to presentation and dismissal

- [UISearchControllerDelegate](../uisearchcontrollerdelegate.md): A set of delegate methods for search controller objects.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The search controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UISearchControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use the delegate object to receive notifications when the search results controller is presented and dismissed. You might use these notifications to customize the search interface or perform related actions.

## See Also

### Responding to presentation and dismissal

- [UISearchControllerDelegate](../uisearchcontrollerdelegate.md): A set of delegate methods for search controller objects.
