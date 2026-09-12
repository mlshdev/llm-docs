> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/addlayoutguide(_:)](https://developer.apple.com/documentation/appkit/nsview/addlayoutguide(_:))

# addLayoutGuide(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds the provided layout guide to the view.

## Declaration

```swift
func addLayoutGuide(_ guide: NSLayoutGuide)
```

## Parameters

- `guide`: The layout guide to be added.

<a id="Discussion"></a>

## Discussion

This method adds the provided layout guide to the end of the view’s [layoutGuides](layoutguides.md) array. It also assigns the view to the guide’s [owningView](../nslayoutguide/owningview.md) property. Each guide can have only one owning view.

After the guide has been added to a view, it can participate in Auto Layout constraints with that view’s hierarchy.

## See Also

### Managing Layout Guides

- [removeLayoutGuide(\_:)](removelayoutguide%28__%29.md): Removes the provided layout guide from the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide that provides the recommended amount of padding for content inside of a view.

# addLayoutGuide: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds the provided layout guide to the view.

## Declaration

```objectivec
- (void) addLayoutGuide:(NSLayoutGuide *) guide;
```

## Parameters

- `guide`: The layout guide to be added.

<a id="Discussion"></a>

## Discussion

This method adds the provided layout guide to the end of the view’s [layoutGuides](layoutguides.md) array. It also assigns the view to the guide’s [owningView](../nslayoutguide/owningview.md) property. Each guide can have only one owning view.

After the guide has been added to a view, it can participate in Auto Layout constraints with that view’s hierarchy.

## See Also

### Managing Layout Guides

- [removeLayoutGuide:](removelayoutguide%28__%29.md): Removes the provided layout guide from the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide that provides the recommended amount of padding for content inside of a view.
