> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/sortsubviews(_:context:)](https://developer.apple.com/documentation/appkit/nsview/sortsubviews(_:context:))

# sortSubviews(\_:context:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Orders the view’s immediate subviews using the specified comparator function.

## Declaration

```swift
func sortSubviews(_ compare: (NSView, NSView, UnsafeMutableRawPointer?) -> ComparisonResult, context: UnsafeMutableRawPointer?)
```

## Parameters

- `compare`: A pointer to the comparator function. This function must take as arguments two subviews to be ordered and contextual data (supplied in `context` which may be arbitrary data used to help in the comparison. The comparator function should return `NSOrderedAscending` if the first subview should be ordered lower, `NSOrderedDescending` if the second subview should be ordered lower, and `NSOrderedSame` if their ordering isn’t important.
- `context`: Arbitrary data that might help the comparator function `compare` in its decisions.

## See Also

### Related Documentation

- [sortedArray(\_:context:)](https://developer.apple.com/documentation/foundation/nsarray/sortedarray%28_:context:%29): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.

### Adding and Removing Subviews

- [addSubview(\_:)](addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [addSubview(\_:positioned:relativeTo:)](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview()](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [removeFromSuperviewWithoutNeedingDisplay()](removefromsuperviewwithoutneedingdisplay%28%29.md): Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.
- [replaceSubview(\_:with:)](replacesubview%28__with_%29.md): Replaces one of the view’s subviews with another view.

# sortSubviewsUsingFunction:context: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Orders the view’s immediate subviews using the specified comparator function.

## Declaration

```objectivec
- (void) sortSubviewsUsingFunction:(enum NSComparisonResult (*)(__kindof NSView *, __kindof NSView *, void *)) compare context:(void *) context;
```

## Parameters

- `compare`: A pointer to the comparator function. This function must take as arguments two subviews to be ordered and contextual data (supplied in `context` which may be arbitrary data used to help in the comparison. The comparator function should return `NSOrderedAscending` if the first subview should be ordered lower, `NSOrderedDescending` if the second subview should be ordered lower, and `NSOrderedSame` if their ordering isn’t important.
- `context`: Arbitrary data that might help the comparator function `compare` in its decisions.

## See Also

### Related Documentation

- [sortedArrayUsingFunction:context:](https://developer.apple.com/documentation/foundation/nsarray/sortedarray%28_:context:%29): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.

### Adding and Removing Subviews

- [addSubview:](addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [addSubview:positioned:relativeTo:](addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [removeFromSuperviewWithoutNeedingDisplay](removefromsuperviewwithoutneedingdisplay%28%29.md): Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.
- [replaceSubview:with:](replacesubview%28__with_%29.md): Replaces one of the view’s subviews with another view.
