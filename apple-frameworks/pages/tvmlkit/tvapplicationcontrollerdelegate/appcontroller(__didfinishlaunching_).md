> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontrollerdelegate/appcontroller(_:didfinishlaunching:)](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontrollerdelegate/appcontroller(_:didfinishlaunching:))

# appController(\_:didFinishLaunching:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Tells the delegate the app controller has finished launching.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func appController(_ appController: TVApplicationController, didFinishLaunching options: [String : Any]?)
```

## Parameters

- `appController`: The [TVApplicationController](../tvapplicationcontroller.md) object that finished launching.
- `options`: The launch options passed to the app controller.

## See Also

### Managing the App Controller

- [appController(\_:didFail:)](appcontroller%28__didfail_%29.md): Deprecated. Tell the delegate the app controller failed due to an error.
- [appController(\_:didStop:)](appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [appController(\_:evaluateAppJavaScriptIn:)](appcontroller%28__evaluateappjavascriptin_%29.md): Deprecated. Tells the delegate to add JavaScript classes and objects.
- [player(for:)](player%28for_%29.md): Deprecated. Asks the delegate for a custom player object for a particular player bridge.

# appController:didFinishLaunchingWithOptions: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Tells the delegate the app controller has finished launching.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (void) appController:(TVApplicationController *) appController didFinishLaunchingWithOptions:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `appController`: The [TVApplicationController](../tvapplicationcontroller.md) object that finished launching.
- `options`: The launch options passed to the app controller.

## See Also

### Managing the App Controller

- [appController:didFailWithError:](appcontroller%28__didfail_%29.md): Deprecated. Tell the delegate the app controller failed due to an error.
- [appController:didStopWithOptions:](appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [appController:evaluateAppJavaScriptInContext:](appcontroller%28__evaluateappjavascriptin_%29.md): Deprecated. Tells the delegate to add JavaScript classes and objects.
- [playerForAppController:](player%28for_%29.md): Deprecated. Asks the delegate for a custom player object for a particular player bridge.
