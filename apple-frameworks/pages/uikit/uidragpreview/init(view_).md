> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragpreview/init(view:)](https://developer.apple.com/documentation/uikit/uidragpreview/init(view:))

# init(view:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new drag item preview with a view, using the default appearance parameters.

## Declaration

```swift
convenience init(view: UIView)
```

## Parameters

- `view`: A [UIView](../uiview.md) object representing the drag item.

<a id="return-value"></a>

## Return Value

A drag preview that is based on the specified view.

<a id="Discussion"></a>

## Discussion

Use this method to display a drag item preview based on a view that you provide. The preview displays a snapshot of the provided view. Changes to the view don’t appear after the preview is shown, and the preview doesn’t change or move the view.

## See Also

### Initializing a drag item preview

- [init(view:parameters:)](init%28view_parameters_%29.md): Initializes a new drag item preview with a view and with a set of appearance parameters.
- [init(forURL:)](init%28forurl_%29.md): Initializes a new drag item preview with a URL.
- [init(forURL:title:)](init%28forurl_title_%29.md): Initializes a drag item preview with a URL and title.

# initWithView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new drag item preview with a view, using the default appearance parameters.

## Declaration

```objectivec
- (instancetype) initWithView:(UIView *) view;
```

## Parameters

- `view`: A [UIView](../uiview.md) object representing the drag item.

<a id="return-value"></a>

## Return Value

A drag preview that is based on the specified view.

<a id="Discussion"></a>

## Discussion

Use this method to display a drag item preview based on a view that you provide. The preview displays a snapshot of the provided view. Changes to the view don’t appear after the preview is shown, and the preview doesn’t change or move the view.

## See Also

### Initializing a drag item preview

- [initWithView:parameters:](init%28view_parameters_%29.md): Initializes a new drag item preview with a view and with a set of appearance parameters.
