> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionviewfocusupdatecontext/nextfocusedindexpath

# nextFocusedIndexPath (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The index path of the collection view cell that’s receiving the focus.

## Declaration

```swift
var nextFocusedIndexPath: IndexPath? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the index path only when the view receiving focus belongs to a cell of the collection view. If focus is moving to a view outside of the collection view and its cells, this property is `nil`.

## See Also

### Locating focusable items in the collection view

- [previouslyFocusedIndexPath](previouslyfocusedindexpath.md): The index path of the collection view cell that previously had the focus.

# nextFocusedIndexPath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The index path of the collection view cell that’s receiving the focus.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSIndexPath * nextFocusedIndexPath;
```

<a id="Discussion"></a>

## Discussion

This property contains the index path only when the view receiving focus belongs to a cell of the collection view. If focus is moving to a view outside of the collection view and its cells, this property is `nil`.

## See Also

### Locating focusable items in the collection view

- [previouslyFocusedIndexPath](previouslyfocusedindexpath.md): The index path of the collection view cell that previously had the focus.
