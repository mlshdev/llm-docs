> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragpreview/init(view:parameters:)](https://developer.apple.com/documentation/uikit/uidragpreview/init(view:parameters:))

# init(view:parameters:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new drag item preview with a view and with a set of appearance parameters.

## Declaration

```swift
init(view: UIView, parameters: UIDragPreviewParameters)
```

## Parameters

- `view`: A [UIView](../uiview.md) object representing the drag item.
- `parameters`: A [UIDragPreviewParameters](../uidragpreviewparameters.md) object containing appearance parameters for the drag item preview.

<a id="return-value"></a>

## Return Value

A drag preview that is based on the specified view and has specific appearance parameters.

<a id="Discussion"></a>

## Discussion

Use this method to display a custom drag item preview based on the provided view and appearance parameters. The appearance parameters specify display options for the preview, such as a background color and a Bézier path of the visible area of the provided view. The appearance parameters affect only the display of the preview, and not the provided view. The drag item preview uses a snapshot of the view for the display, and it never changes or moves the view.

## See Also

### Initializing a drag item preview

- [init(view:)](init%28view_%29.md): Initializes a new drag item preview with a view, using the default appearance parameters.
- [init(forURL:)](init%28forurl_%29.md): Initializes a new drag item preview with a URL.
- [init(forURL:title:)](init%28forurl_title_%29.md): Initializes a drag item preview with a URL and title.

# initWithView:parameters: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new drag item preview with a view and with a set of appearance parameters.

## Declaration

```objectivec
- (instancetype) initWithView:(UIView *) view parameters:(UIDragPreviewParameters *) parameters;
```

## Parameters

- `view`: A [UIView](../uiview.md) object representing the drag item.
- `parameters`: A [UIDragPreviewParameters](../uidragpreviewparameters.md) object containing appearance parameters for the drag item preview.

<a id="return-value"></a>

## Return Value

A drag preview that is based on the specified view and has specific appearance parameters.

<a id="Discussion"></a>

## Discussion

Use this method to display a custom drag item preview based on the provided view and appearance parameters. The appearance parameters specify display options for the preview, such as a background color and a Bézier path of the visible area of the provided view. The appearance parameters affect only the display of the preview, and not the provided view. The drag item preview uses a snapshot of the view for the display, and it never changes or moves the view.

## See Also

### Initializing a drag item preview

- [initWithView:](init%28view_%29.md): Initializes a new drag item preview with a view, using the default appearance parameters.
