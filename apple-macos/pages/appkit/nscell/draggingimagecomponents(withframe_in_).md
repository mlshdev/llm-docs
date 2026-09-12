> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/draggingimagecomponents(withframe:in:)](https://developer.apple.com/documentation/appkit/nscell/draggingimagecomponents(withframe:in:))

# draggingImageComponents(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Generates dragging image components with the specified frame in the view.

## Declaration

```swift
func draggingImageComponents(withFrame frame: NSRect, in view: NSView) -> [NSDraggingImageComponent]
```

## Parameters

- `frame`: The bounding rectangle of the receiver.
- `view`: The view that manages the cell.

<a id="return-value"></a>

## Return Value

An array of [NSDraggingImageComponent](../nsdraggingimagecomponent.md) objects representing the cell.

<a id="Discussion"></a>

## Discussion

The default implementation generates an image from the cell and return two components: one for [label](../nsdraggingitem/imagecomponentkey/label.md) and another for [icon](../nsdraggingitem/imagecomponentkey/icon.md). This is done by capturing the portion from the [titleRect(forBounds:)](titlerect%28forbounds_%29.md) and [imageRect(forBounds:)](imagerect%28forbounds_%29.md) methods respectively.

This method can be subclassed and overridden to provide a custom set of [NSDraggingImageComponent](../nsdraggingimagecomponent.md) to create the drag image for the cell. This method is generally used by NSTableView/NSOutlineView.

> **Note**

>  NSCell currently has an issue where it will return an empty array from `draggingImageComponentsWithFrame:inView:` if the cell does not have an image portion. To work around this, subclass NSCell and override `draggingImageComponentsWithFrame:inView:` and generate your own [NSDraggingImageComponent](../nsdraggingimagecomponent.md) in the returned array.

# draggingImageComponentsWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Generates dragging image components with the specified frame in the view.

## Declaration

```objectivec
- (NSArray<NSDraggingImageComponent *> *) draggingImageComponentsWithFrame:(NSRect) frame inView:(NSView *) view;
```

## Parameters

- `frame`: The bounding rectangle of the receiver.
- `view`: The view that manages the cell.

<a id="return-value"></a>

## Return Value

An array of [NSDraggingImageComponent](../nsdraggingimagecomponent.md) objects representing the cell.

<a id="Discussion"></a>

## Discussion

The default implementation generates an image from the cell and return two components: one for [NSDraggingImageComponentLabelKey](../nsdraggingitem/imagecomponentkey/label.md) and another for [NSDraggingImageComponentIconKey](../nsdraggingitem/imagecomponentkey/icon.md). This is done by capturing the portion from the [titleRectForBounds:](titlerect%28forbounds_%29.md) and [imageRectForBounds:](imagerect%28forbounds_%29.md) methods respectively.

This method can be subclassed and overridden to provide a custom set of [NSDraggingImageComponent](../nsdraggingimagecomponent.md) to create the drag image for the cell. This method is generally used by NSTableView/NSOutlineView.

> **Note**

>  NSCell currently has an issue where it will return an empty array from `draggingImageComponentsWithFrame:inView:` if the cell does not have an image portion. To work around this, subclass NSCell and override `draggingImageComponentsWithFrame:inView:` and generate your own [NSDraggingImageComponent](../nsdraggingimagecomponent.md) in the returned array.
