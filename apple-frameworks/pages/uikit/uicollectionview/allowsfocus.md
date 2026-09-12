> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/allowsfocus](https://developer.apple.com/documentation/uikit/uicollectionview/allowsfocus)

# allowsFocus (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that determines whether the collection view allows its cells to become focused.

## Declaration

```swift
var allowsFocus: Bool { get set }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

If you implement [collectionView(\_:canFocusItemAt:)](../uicollectionviewdelegate/collectionview%28__canfocusitemat_%29.md), its return value takes precedence over the value of this property.

The system determines the default value of this property according to the platform and other properties of the collection view.

## See Also

### Working with focus

- [allowsFocusDuringEditing](allowsfocusduringediting.md): A Boolean value that determines whether the collection view allows its cells to become focused in edit mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [remembersLastFocusedIndexPath](rememberslastfocusedindexpath.md): A Boolean value that indicates whether the collection view automatically assigns the focus to the item at the last focused index path.

# allowsFocus (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that determines whether the collection view allows its cells to become focused.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsFocus;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

If you implement [collectionView:canFocusItemAtIndexPath:](../uicollectionviewdelegate/collectionview%28__canfocusitemat_%29.md), its return value takes precedence over the value of this property.

The system determines the default value of this property according to the platform and other properties of the collection view.

## See Also

### Working with focus

- [allowsFocusDuringEditing](allowsfocusduringediting.md): A Boolean value that determines whether the collection view allows its cells to become focused in edit mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
- [remembersLastFocusedIndexPath](rememberslastfocusedindexpath.md): A Boolean value that indicates whether the collection view automatically assigns the focus to the item at the last focused index path.
