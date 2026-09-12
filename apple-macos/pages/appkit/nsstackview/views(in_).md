> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/views(in:)](https://developer.apple.com/documentation/appkit/nsstackview/views(in:))

# views(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the array of views in the specified gravity area in the stack view.

## Declaration

```swift
func views(in gravity: NSStackView.Gravity) -> [NSView]
```

## Parameters

- `gravity`: The gravity area whose view array you want to get. Valid values are those in the [NSStackView.Gravity](gravity.md) enumeration, according to the stack view’s layout direction..

<a id="return-value"></a>

## Return Value

The array of views in a specified gravity area.

<a id="Discussion"></a>

## Discussion

The returned array contains all of the views in the specified gravity area of the stack view, regardless of whether they are attached. The index position of each view in the array matches the view ordering within the gravity area. A detached view’s index position is its gravity area position when attached.

## See Also

### Inspecting a Stack View

- [views](views.md): The array of views owned by the stack view.
- [detachedViews](detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [clippingResistancePriority(for:)](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [huggingPriority(for:)](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

# viewsInGravity: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the array of views in the specified gravity area in the stack view.

## Declaration

```objectivec
- (NSArray<__kindof NSView *> *) viewsInGravity:(NSStackViewGravity) gravity;
```

## Parameters

- `gravity`: The gravity area whose view array you want to get. Valid values are those in the [NSStackViewGravity](gravity.md) enumeration, according to the stack view’s layout direction..

<a id="return-value"></a>

## Return Value

The array of views in a specified gravity area.

<a id="Discussion"></a>

## Discussion

The returned array contains all of the views in the specified gravity area of the stack view, regardless of whether they are attached. The index position of each view in the array matches the view ordering within the gravity area. A detached view’s index position is its gravity area position when attached.

## See Also

### Inspecting a Stack View

- [views](views.md): The array of views owned by the stack view.
- [detachedViews](detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [clippingResistancePriorityForOrientation:](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [huggingPriorityForOrientation:](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.
