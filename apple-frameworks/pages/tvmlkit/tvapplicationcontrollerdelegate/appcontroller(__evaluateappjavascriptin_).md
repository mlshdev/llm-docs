> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontrollerdelegate/appcontroller(_:evaluateappjavascriptin:)](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontrollerdelegate/appcontroller(_:evaluateappjavascriptin:))

# appController(\_:evaluateAppJavaScriptIn:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Tells the delegate to add JavaScript classes and objects.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func appController(_ appController: TVApplicationController, evaluateAppJavaScriptIn jsContext: JSContext)
```

## Parameters

- `appController`: The [TVApplicationController](../tvapplicationcontroller.md) object that is evaluating the JavaScript context.
- `jsContext`: The [JSContext](../../javascriptcore/jscontext.md) object being evaluated.

<a id="Discussion"></a>

## Discussion

This method serves as a callback function, giving the delegate the ability to add JavaScript classes and objects through the [setObject(\_:forKey:)](../../foundation/nsmutabledictionary/setobject%28__forkey_%29.md) method using the `jsContext` parameter. This method is called before the JavaScript is parsed into the execution context and is called on the JavaScript execution thread, not the main thread. Any object exposed to [JSContext](../../javascriptcore/jscontext.md) must not be retained on any other thread.

## See Also

### Managing the App Controller

- [appController(\_:didFail:)](appcontroller%28__didfail_%29.md): Deprecated. Tell the delegate the app controller failed due to an error.
- [appController(\_:didFinishLaunching:)](appcontroller%28__didfinishlaunching_%29.md): Deprecated. Tells the delegate the app controller has finished launching.
- [appController(\_:didStop:)](appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [player(for:)](player%28for_%29.md): Deprecated. Asks the delegate for a custom player object for a particular player bridge.

# appController:evaluateAppJavaScriptInContext: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Tells the delegate to add JavaScript classes and objects.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (void) appController:(TVApplicationController *) appController evaluateAppJavaScriptInContext:(JSContext *) jsContext;
```

## Parameters

- `appController`: The [TVApplicationController](../tvapplicationcontroller.md) object that is evaluating the JavaScript context.
- `jsContext`: The [JSContext](../../javascriptcore/jscontext.md) object being evaluated.

<a id="Discussion"></a>

## Discussion

This method serves as a callback function, giving the delegate the ability to add JavaScript classes and objects through the [setObject:forKey:](../../foundation/nsmutabledictionary/setobject%28__forkey_%29.md) method using the `jsContext` parameter. This method is called before the JavaScript is parsed into the execution context and is called on the JavaScript execution thread, not the main thread. Any object exposed to [JSContext](../../javascriptcore/jscontext.md) must not be retained on any other thread.

## See Also

### Managing the App Controller

- [appController:didFailWithError:](appcontroller%28__didfail_%29.md): Deprecated. Tell the delegate the app controller failed due to an error.
- [appController:didFinishLaunchingWithOptions:](appcontroller%28__didfinishlaunching_%29.md): Deprecated. Tells the delegate the app controller has finished launching.
- [appController:didStopWithOptions:](appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [playerForAppController:](player%28for_%29.md): Deprecated. Asks the delegate for a custom player object for a particular player bridge.
