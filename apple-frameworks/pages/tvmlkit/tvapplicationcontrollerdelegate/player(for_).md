> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontrollerdelegate/player(for:)](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontrollerdelegate/player(for:))

# player(for:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Asks the delegate for a custom player object for a particular player bridge.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func player(for appController: TVApplicationController) -> TVPlayer?
```

## Parameters

- `appController`: The [TVApplicationController](../tvapplicationcontroller.md) object that contains the player object.

<a id="return-value"></a>

## Return Value

A customizable [TVPlayer](../tvplayer.md) object.

## See Also

### Managing the App Controller

- [appController(\_:didFail:)](appcontroller%28__didfail_%29.md): Deprecated. Tell the delegate the app controller failed due to an error.
- [appController(\_:didFinishLaunching:)](appcontroller%28__didfinishlaunching_%29.md): Deprecated. Tells the delegate the app controller has finished launching.
- [appController(\_:didStop:)](appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [appController(\_:evaluateAppJavaScriptIn:)](appcontroller%28__evaluateappjavascriptin_%29.md): Deprecated. Tells the delegate to add JavaScript classes and objects.

# playerForAppController: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Asks the delegate for a custom player object for a particular player bridge.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (TVPlayer *) playerForAppController:(TVApplicationController *) appController;
```

## Parameters

- `appController`: The [TVApplicationController](../tvapplicationcontroller.md) object that contains the player object.

<a id="return-value"></a>

## Return Value

A customizable [TVPlayer](../tvplayer.md) object.

## See Also

### Managing the App Controller

- [appController:didFailWithError:](appcontroller%28__didfail_%29.md): Deprecated. Tell the delegate the app controller failed due to an error.
- [appController:didFinishLaunchingWithOptions:](appcontroller%28__didfinishlaunching_%29.md): Deprecated. Tells the delegate the app controller has finished launching.
- [appController:didStopWithOptions:](appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [appController:evaluateAppJavaScriptInContext:](appcontroller%28__evaluateappjavascriptin_%29.md): Deprecated. Tells the delegate to add JavaScript classes and objects.
