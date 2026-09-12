> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationmain(_:_:_:)](https://developer.apple.com/documentation/watchkit/wkapplicationmain(_:_:_:))

# WKApplicationMain(\_:\_:\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Function  
**Availability:** watchOS 7.0+

Creates the application object and the application delegate, and sets up the app’s event cycle.

## Declaration

```swift
func WKApplicationMain(_ argc: Int32, _ argv: UnsafeMutablePointer<UnsafeMutablePointer<CChar>?>, _ applicationDelegateClassName: String?) -> Int32
```

## Parameters

- `argc`: The count of arguments in `argv`. This is usually the corresponding parameter to `main`.
- `argv`: A variable list of arguments. This is usually the corresponding parameter to `main`.
- `applicationDelegateClassName`: The name of the app delegate’s class. This class must subclass [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class) and adopt the [WKApplicationDelegate](wkapplicationdelegate.md) protocol.

<a id="return-value"></a>

## Return Value

Even though this function specifies an integer return type, it never returns. When the user exits a watchOS app, the app moves to the background.

<a id="Discussion"></a>

## Discussion

This function instantiates the application object and the specified delegate (if any), and then sets the delegate for the application. It also sets up the main event loop, including the application’s run loop, and begins processing events.

## See Also

### App structure

- [Setting up a watchOS project](../watchos-apps/setting-up-a-watchos-project.md): Create a new watchOS project or add a watch target to an existing iOS project.
- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.

# WKApplicationMain (Objective-C)

**Framework:** WatchKit  
**Kind:** Function  
**Availability:** watchOS 7.0+

Creates the application object and the application delegate, and sets up the app’s event cycle.

## Declaration

```objectivec
extern int WKApplicationMain(int argc, char * argv[], NSString *applicationDelegateClassName);
```

## Parameters

- `argc`: The count of arguments in `argv`. This is usually the corresponding parameter to `main`.
- `argv`: A variable list of arguments. This is usually the corresponding parameter to `main`.
- `applicationDelegateClassName`: The name of the app delegate’s class. This class must subclass [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class) and adopt the [WKApplicationDelegate](wkapplicationdelegate.md) protocol.

<a id="return-value"></a>

## Return Value

Even though this function specifies an integer return type, it never returns. When the user exits a watchOS app, the app moves to the background.

<a id="Discussion"></a>

## Discussion

This function instantiates the application object and the specified delegate (if any), and then sets the delegate for the application. It also sets up the main event loop, including the application’s run loop, and begins processing events.

## See Also

### App structure

- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKInterfaceDevice](wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.
