> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitargetedpreview/init(view:parameters:target:)](https://developer.apple.com/documentation/uikit/uitargetedpreview/init(view:parameters:target:))

# init(view:parameters:target:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a targeted preview with the specified view, parameters, and target container.

## Declaration

```swift
init(view: UIView, parameters: UIPreviewParameters, target: UIPreviewTarget)
```

## Parameters

- `view`: The view to animate.
- `parameters`: The animation parameters.
- `target`: The container for the view.

<a id="return-value"></a>

## Return Value

A new targeted preview object.

## See Also

### Creating a targeted preview object

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [init(view:parameters:)](init%28view_parameters_%29.md): Creates a targeted preview for a view in the current window and including the specified parameters.
- [init(view:)](init%28view_%29.md): Creates a targeted preview for a view in the current window.

# initWithView:parameters:target: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a targeted preview with the specified view, parameters, and target container.

## Declaration

```objectivec
- (instancetype) initWithView:(UIView *) view parameters:(UIPreviewParameters *) parameters target:(UIPreviewTarget *) target;
```

## Parameters

- `view`: The view to animate.
- `parameters`: The animation parameters.
- `target`: The container for the view.

<a id="return-value"></a>

## Return Value

A new targeted preview object.

## See Also

### Creating a targeted preview object

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [initWithView:parameters:](init%28view_parameters_%29.md): Creates a targeted preview for a view in the current window and including the specified parameters.
- [initWithView:](init%28view_%29.md): Creates a targeted preview for a view in the current window.
