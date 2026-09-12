> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewfocusupdatecontext/previouslyfocusedindexpath](https://developer.apple.com/documentation/uikit/uicollectionviewfocusupdatecontext/previouslyfocusedindexpath)

# previouslyFocusedIndexPath (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The index path of the collection view cell that previously had the focus.

## Declaration

```swift
var previouslyFocusedIndexPath: IndexPath? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an index path only when the view receiving focus belongs to a cell of the collection view. If focus was previously in a view outside of the collection view and its cells, this property is `nil`. This property is also `nil` when the collection view receives focus for the first time.

## See Also

### Locating focusable items in the collection view

- [nextFocusedIndexPath](nextfocusedindexpath.md): The index path of the collection view cell that’s receiving the focus.

# previouslyFocusedIndexPath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The index path of the collection view cell that previously had the focus.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSIndexPath * previouslyFocusedIndexPath;
```

<a id="Discussion"></a>

## Discussion

This property contains an index path only when the view receiving focus belongs to a cell of the collection view. If focus was previously in a view outside of the collection view and its cells, this property is `nil`. This property is also `nil` when the collection view receives focus for the first time.

## See Also

### Locating focusable items in the collection view

- [nextFocusedIndexPath](nextfocusedindexpath.md): The index path of the collection view cell that’s receiving the focus.
