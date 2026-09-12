> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackviewdelegate/stackview(_:willdetach:)](https://developer.apple.com/documentation/appkit/nsstackviewdelegate/stackview(_:willdetach:))

# stackView(\_:willDetach:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Called when the stack view is about to automatically detach one or more of its views.

## Declaration

```swift
@MainActor optional func stackView(_ stackView: NSStackView, willDetach views: [NSView])
```

## Parameters

- `stackView`: The stack view that is about to detach one or more of its views.
- `views`: An array of one or more views, managed by the stack view, that are about to be automatically detached.

<a id="Discussion"></a>

## Discussion

To configure a custom class to respond to the automatic detachment of views from a stack view’s view hierarchy, implement this method in the class. This method is not called when your code explicitly removes a view from a stack view’s [views](../nsstackview/views.md) array.

## See Also

### Responding to View Detachment and Reattachment

- [stackView(\_:didReattach:)](stackview%28__didreattach_%29.md): Called when the stack view has automatically reattached one or more previously-detached views.

# stackView:willDetachViews: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called when the stack view is about to automatically detach one or more of its views.

## Declaration

```objectivec
- (void) stackView:(NSStackView *) stackView willDetachViews:(NSArray<NSView *> *) views;
```

## Parameters

- `stackView`: The stack view that is about to detach one or more of its views.
- `views`: An array of one or more views, managed by the stack view, that are about to be automatically detached.

<a id="Discussion"></a>

## Discussion

To configure a custom class to respond to the automatic detachment of views from a stack view’s view hierarchy, implement this method in the class. This method is not called when your code explicitly removes a view from a stack view’s [views](../nsstackview/views.md) array.

## See Also

### Responding to View Detachment and Reattachment

- [stackView:didReattachViews:](stackview%28__didreattach_%29.md): Called when the stack view has automatically reattached one or more previously-detached views.
