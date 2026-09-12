> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/removelayoutguide(_:)](https://developer.apple.com/documentation/appkit/nsview/removelayoutguide(_:))

# removeLayoutGuide(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Removes the provided layout guide from the view.

## Declaration

```swift
func removeLayoutGuide(_ guide: NSLayoutGuide)
```

## Parameters

- `guide`: The layout guide to be removed.

<a id="Discussion"></a>

## Discussion

This method removes the provided layout guide from the view’s [layoutGuides](layoutguides.md) array. It also sets the guide’s [owningView](../nslayoutguide/owningview.md) property to `nil`. Finally, it removes any constraints to the layout guide.

Layout guides cannot participate in Auto Layout constraints unless they are added by a view in the view hierarchy.

## See Also

### Managing Layout Guides

- [addLayoutGuide(\_:)](addlayoutguide%28__%29.md): Adds the provided layout guide to the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide that provides the recommended amount of padding for content inside of a view.

# removeLayoutGuide: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Removes the provided layout guide from the view.

## Declaration

```objectivec
- (void) removeLayoutGuide:(NSLayoutGuide *) guide;
```

## Parameters

- `guide`: The layout guide to be removed.

<a id="Discussion"></a>

## Discussion

This method removes the provided layout guide from the view’s [layoutGuides](layoutguides.md) array. It also sets the guide’s [owningView](../nslayoutguide/owningview.md) property to `nil`. Finally, it removes any constraints to the layout guide.

Layout guides cannot participate in Auto Layout constraints unless they are added by a view in the view hierarchy.

## See Also

### Managing Layout Guides

- [addLayoutGuide:](addlayoutguide%28__%29.md): Adds the provided layout guide to the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide that provides the recommended amount of padding for content inside of a view.
