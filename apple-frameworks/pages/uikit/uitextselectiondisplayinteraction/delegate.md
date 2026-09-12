> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectiondisplayinteraction/delegate](https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A delegate that provides a container view to manage the system-supplied selection views.

## Declaration

```swift
weak var delegate: (any UITextSelectionDisplayInteractionDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

Provide a delegate object if your UI displays selection highlights below your text input view. The delegate provides the container view for the system to use when adding the selection-related views.

## See Also

### Managing the drawing view

- [UITextSelectionDisplayInteractionDelegate](../uitextselectiondisplayinteractiondelegate.md): An object you use to customize the presentation of text selections in your interface.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A delegate that provides a container view to manage the system-supplied selection views.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) id<UITextSelectionDisplayInteractionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Provide a delegate object if your UI displays selection highlights below your text input view. The delegate provides the container view for the system to use when adding the selection-related views.

## See Also

### Managing the drawing view

- [UITextSelectionDisplayInteractionDelegate](../uitextselectiondisplayinteractiondelegate.md): An object you use to customize the presentation of text selections in your interface.
