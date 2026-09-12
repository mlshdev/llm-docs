> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/addlayoutguide(_:)](https://developer.apple.com/documentation/uikit/uiview/addlayoutguide(_:))

# addLayoutGuide(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified layout guide to the view.

## Declaration

```swift
func addLayoutGuide(_ layoutGuide: UILayoutGuide)
```

## Parameters

- `layoutGuide`: The layout guide to be added.

<a id="Discussion"></a>

## Discussion

This method adds the specified layout guide to the end of the view’s [layoutGuides](layoutguides.md) array. It also assigns the view to the guide’s [owningView](../uilayoutguide/owningview.md) property. Each guide can have only one owning view.

After the guide has been added to a view, it can participate in Auto Layout constraints with that view’s hierarchy.

## See Also

### Working with layout guides

- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide representing the view’s margins.
- [readableContentGuide](readablecontentguide.md): A layout guide representing an area with a readable width within the view.
- [removeLayoutGuide(\_:)](removelayoutguide%28__%29.md): Removes the specified layout guide from the view.

# addLayoutGuide: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the specified layout guide to the view.

## Declaration

```objectivec
- (void) addLayoutGuide:(UILayoutGuide *) layoutGuide;
```

## Parameters

- `layoutGuide`: The layout guide to be added.

<a id="Discussion"></a>

## Discussion

This method adds the specified layout guide to the end of the view’s [layoutGuides](layoutguides.md) array. It also assigns the view to the guide’s [owningView](../uilayoutguide/owningview.md) property. Each guide can have only one owning view.

After the guide has been added to a view, it can participate in Auto Layout constraints with that view’s hierarchy.

## See Also

### Working with layout guides

- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide representing the view’s margins.
- [readableContentGuide](readablecontentguide.md): A layout guide representing an area with a readable width within the view.
- [removeLayoutGuide:](removelayoutguide%28__%29.md): Removes the specified layout guide from the view.
