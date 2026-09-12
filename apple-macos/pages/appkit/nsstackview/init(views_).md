> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/init(views:)](https://developer.apple.com/documentation/appkit/nsstackview/init(views:))

# init(views:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.9+

Creates and returns a stack view with a specified array of views.

## Declaration

```swift
convenience init(views: [NSView])
```

## Parameters

- `views`: The array of views for the new stack view.

<a id="return-value"></a>

## Return Value

A stack view initialized with the specified array of views.

<a id="Discussion"></a>

## Discussion

The returned stack view has horizontal layout direction and its [translatesAutoresizingMaskIntoConstraints](../nsview/translatesautoresizingmaskintoconstraints.md) property is set to the Boolean value [false](https://developer.apple.com/documentation/swift/false). The views you provide in the `views` parameter are placed into the stack view’s leading gravity area.

## See Also

### Related Documentation

- [View Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaViewsGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40002978)
- [NSLayoutConstraint](../nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.

# stackViewWithViews: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Creates and returns a stack view with a specified array of views.

## Declaration

```objectivec
+ (instancetype) stackViewWithViews:(NSArray<NSView *> *) views;
```

## Parameters

- `views`: The array of views for the new stack view.

<a id="return-value"></a>

## Return Value

A stack view initialized with the specified array of views.

<a id="Discussion"></a>

## Discussion

The returned stack view has horizontal layout direction and its [translatesAutoresizingMaskIntoConstraints](../nsview/translatesautoresizingmaskintoconstraints.md) property is set to the Boolean value [false](https://developer.apple.com/documentation/swift/false). The views you provide in the `views` parameter are placed into the stack view’s leading gravity area.

## See Also

### Related Documentation

- [View Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaViewsGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40002978)
- [NSLayoutConstraint](../nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
