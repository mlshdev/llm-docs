> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackviewdelegate/stackview(_:didreattach:)](https://developer.apple.com/documentation/appkit/nsstackviewdelegate/stackview(_:didreattach:))

# stackView(\_:didReattach:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Called when the stack view has automatically reattached one or more previously-detached views.

## Declaration

```swift
@MainActor optional func stackView(_ stackView: NSStackView, didReattach views: [NSView])
```

## Parameters

- `stackView`: The stack view that has reattached one or more detached views.
- `views`: An array of one or more views, managed by the stack view, that were reattached.

<a id="Discussion"></a>

## Discussion

To configure a custom class to respond to the automatic reattachment of views to a stack view’s view hierarchy, implement this method in the class. This method is not called when your code explicitly adds a view to a stack view’s [views](../nsstackview/views.md) array.

## See Also

### Responding to View Detachment and Reattachment

- [stackView(\_:willDetach:)](stackview%28__willdetach_%29.md): Called when the stack view is about to automatically detach one or more of its views.

# stackView:didReattachViews: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called when the stack view has automatically reattached one or more previously-detached views.

## Declaration

```objectivec
- (void) stackView:(NSStackView *) stackView didReattachViews:(NSArray<NSView *> *) views;
```

## Parameters

- `stackView`: The stack view that has reattached one or more detached views.
- `views`: An array of one or more views, managed by the stack view, that were reattached.

<a id="Discussion"></a>

## Discussion

To configure a custom class to respond to the automatic reattachment of views to a stack view’s view hierarchy, implement this method in the class. This method is not called when your code explicitly adds a view to a stack view’s [views](../nsstackview/views.md) array.

## See Also

### Responding to View Detachment and Reattachment

- [stackView:willDetachViews:](stackview%28__willdetach_%29.md): Called when the stack view is about to automatically detach one or more of its views.
