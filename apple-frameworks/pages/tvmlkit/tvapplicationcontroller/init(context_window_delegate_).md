> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontroller/init(context:window:delegate:)](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontroller/init(context:window:delegate:))

# init(context:window:delegate:) (Swift)

**Framework:** TVMLKit  
**Kind:** Initializer  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Initializes and returns an app controller.

> Please use SwiftUI or UIKit

## Declaration

```swift
init(context: TVApplicationControllerContext, window: UIWindow?, delegate: (any TVApplicationControllerDelegate)?)
```

## Parameters

- `context`: A [TVApplicationControllerContext](../tvapplicationcontrollercontext.md) object containing information about the JavaScript app.
- `window`: A [UIWindow](../../uikit/uiwindow.md) object that presents the application controller’s navigation controller.
- `delegate`: The app controller delegate.

<a id="return-value"></a>

## Return Value

The initialized [TVApplicationController](../tvapplicationcontroller.md) object.

<a id="Discussion"></a>

## Discussion

An app controller coordinates activity between the JavaScript environments and tvOS. There are three options when presenting the application controller. If you provide a valid [UIWindow](../../uikit/uiwindow.md) object, the application controller’s navigation controller is presented immediately and managed by [TVApplicationController](../tvapplicationcontroller.md). If no window is provided, the navigation controller can be presented and dismissed manually within the binary app. Finally, if you wish to present native view controllers alongside a [TVApplicationController](../tvapplicationcontroller.md) object, you can push additional view controllers onto [navigationController](navigationcontroller.md).

# initWithContext:window:delegate: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Initializes and returns an app controller.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (instancetype) initWithContext:(TVApplicationControllerContext *) context window:(UIWindow *) window delegate:(id<TVApplicationControllerDelegate>) delegate;
```

## Parameters

- `context`: A [TVApplicationControllerContext](../tvapplicationcontrollercontext.md) object containing information about the JavaScript app.
- `window`: A [UIWindow](../../uikit/uiwindow.md) object that presents the application controller’s navigation controller.
- `delegate`: The app controller delegate.

<a id="return-value"></a>

## Return Value

The initialized [TVApplicationController](../tvapplicationcontroller.md) object.

<a id="Discussion"></a>

## Discussion

An app controller coordinates activity between the JavaScript environments and tvOS. There are three options when presenting the application controller. If you provide a valid [UIWindow](../../uikit/uiwindow.md) object, the application controller’s navigation controller is presented immediately and managed by [TVApplicationController](../tvapplicationcontroller.md). If no window is provided, the navigation controller can be presented and dismissed manually within the binary app. Finally, if you wish to present native view controllers alongside a [TVApplicationController](../tvapplicationcontroller.md) object, you can push additional view controllers onto [navigationController](navigationcontroller.md).
