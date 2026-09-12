> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontrollerdelegate/appcontroller(_:didfail:)](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontrollerdelegate/appcontroller(_:didfail:))

# appController(\_:didFail:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Tell the delegate the app controller failed due to an error.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func appController(_ appController: TVApplicationController, didFail error: any Error)
```

## Parameters

- `appController`: The [TVApplicationController](../tvapplicationcontroller.md) object that has failed.
- `error`: An [NSError](../../foundation/nserror.md) object describing why the app controller failed.

## See Also

### Managing the App Controller

- [appController(\_:didFinishLaunching:)](appcontroller%28__didfinishlaunching_%29.md): Deprecated. Tells the delegate the app controller has finished launching.
- [appController(\_:didStop:)](appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [appController(\_:evaluateAppJavaScriptIn:)](appcontroller%28__evaluateappjavascriptin_%29.md): Deprecated. Tells the delegate to add JavaScript classes and objects.
- [player(for:)](player%28for_%29.md): Deprecated. Asks the delegate for a custom player object for a particular player bridge.

# appController:didFailWithError: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Tell the delegate the app controller failed due to an error.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (void) appController:(TVApplicationController *) appController didFailWithError:(NSError *) error;
```

## Parameters

- `appController`: The [TVApplicationController](../tvapplicationcontroller.md) object that has failed.
- `error`: An [NSError](../../foundation/nserror.md) object describing why the app controller failed.

## See Also

### Managing the App Controller

- [appController:didFinishLaunchingWithOptions:](appcontroller%28__didfinishlaunching_%29.md): Deprecated. Tells the delegate the app controller has finished launching.
- [appController:didStopWithOptions:](appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [appController:evaluateAppJavaScriptInContext:](appcontroller%28__evaluateappjavascriptin_%29.md): Deprecated. Tells the delegate to add JavaScript classes and objects.
- [playerForAppController:](player%28for_%29.md): Deprecated. Asks the delegate for a custom player object for a particular player bridge.
