> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontrollercontext/launchoptions](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontrollercontext/launchoptions)

# launchOptions (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Data passed to the JavaScript launch callback method.

> Please use SwiftUI or UIKit

## Declaration

```swift
var launchOptions: [String : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

The system will pass this data to the JavaScript [onLaunch](../../tvmljs/app/1627407-onlaunch.md) method. The values contained in this property must be serializable. You must include [url](../../uikit/uiapplication/launchoptionskey/url.md) and [sourceApplication](../../uikit/uiapplication/launchoptionskey/sourceapplication.md) in the launch options if the JavaScript implements the [openURL(\_:)](../../uikit/uiapplication/openurl%28__%29.md) method.

## See Also

### Providing Launch Information

- [javaScriptApplicationURL](javascriptapplicationurl.md): Deprecated. URL pointing to the controlling JavaScript file for the application.
- [storageIdentifier](storageidentifier.md): Deprecated. Optional identifier for a local storage file.
- [supportsPictureInPicturePlayback](supportspictureinpictureplayback.md): Deprecated. A Boolean value that indicates whether your app can display content in a picture-in-picture format.

# launchOptions (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Data passed to the JavaScript launch callback method.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSString *,id> * launchOptions;
```

<a id="Discussion"></a>

## Discussion

The system will pass this data to the JavaScript [onLaunch](../../tvmljs/app/1627407-onlaunch.md) method. The values contained in this property must be serializable. You must include [UIApplicationLaunchOptionsURLKey](../../uikit/uiapplication/launchoptionskey/url.md) and [UIApplicationLaunchOptionsSourceApplicationKey](../../uikit/uiapplication/launchoptionskey/sourceapplication.md) in the launch options if the JavaScript implements the [openURL:](../../uikit/uiapplication/openurl%28__%29.md) method.

## See Also

### Providing Launch Information

- [javaScriptApplicationURL](javascriptapplicationurl.md): Deprecated. URL pointing to the controlling JavaScript file for the application.
- [storageIdentifier](storageidentifier.md): Deprecated. Optional identifier for a local storage file.
- [supportsPictureInPicturePlayback](supportspictureinpictureplayback.md): Deprecated. A Boolean value that indicates whether your app can display content in a picture-in-picture format.
