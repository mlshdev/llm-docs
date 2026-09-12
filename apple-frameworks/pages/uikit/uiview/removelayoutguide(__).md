> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/removelayoutguide(_:)](https://developer.apple.com/documentation/uikit/uiview/removelayoutguide(_:))

# removeLayoutGuide(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified layout guide from the view.

## Declaration

```swift
func removeLayoutGuide(_ layoutGuide: UILayoutGuide)
```

## Parameters

- `layoutGuide`: The layout guide to be removed.

<a id="Discussion"></a>

## Discussion

This method removes the layout guide from the view’s [layoutGuides](layoutguides.md) array and sets the guide’s [owningView](../uilayoutguide/owningview.md) property to `nil`. It also removes any constraints to the layout guide.

Layout guides cannot participate in Auto Layout constraints unless they are added to a view in the view hierarchy.

## See Also

### Working with layout guides

- [addLayoutGuide(\_:)](addlayoutguide%28__%29.md): Adds the specified layout guide to the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide representing the view’s margins.
- [readableContentGuide](readablecontentguide.md): A layout guide representing an area with a readable width within the view.

# removeLayoutGuide: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified layout guide from the view.

## Declaration

```objectivec
- (void) removeLayoutGuide:(UILayoutGuide *) layoutGuide;
```

## Parameters

- `layoutGuide`: The layout guide to be removed.

<a id="Discussion"></a>

## Discussion

This method removes the layout guide from the view’s [layoutGuides](layoutguides.md) array and sets the guide’s [owningView](../uilayoutguide/owningview.md) property to `nil`. It also removes any constraints to the layout guide.

Layout guides cannot participate in Auto Layout constraints unless they are added to a view in the view hierarchy.

## See Also

### Working with layout guides

- [addLayoutGuide:](addlayoutguide%28__%29.md): Adds the specified layout guide to the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide representing the view’s margins.
- [readableContentGuide](readablecontentguide.md): A layout guide representing an area with a readable width within the view.
