> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/activationoptions/activateignoringotherapps](https://developer.apple.com/documentation/appkit/nsapplication/activationoptions/activateignoringotherapps)

# activateIgnoringOtherApps (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+ (deprecated in 14.0)

The application is activated regardless of the currently active app.

> Use NSApplication method [activate()](../activate%28%29.md) instead.

## Declaration

```swift
static var activateIgnoringOtherApps: NSApplication.ActivationOptions { get }
```

<a id="Discussion"></a>

## Discussion

By default, activation deactivates the calling app (assuming it was active), and then the new app is activated only if there’s no currently active application. This prevents the new app from stealing focus from the user, if the app is slow to activate and the user has switched to a different app in the interim. However, if you specify [activateIgnoringOtherApps](activateignoringotherapps.md), the application is activated regardless of the currently active app, potentially stealing focus from the user.

> **Important**

>  You should **rarely pass this flag** because stealing key focus produces a poor user experience.

# NSApplicationActivateIgnoringOtherApps (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+ (deprecated in 14.0)

The application is activated regardless of the currently active app.

> Use NSApplication method [activate](../activate%28%29.md) instead.

## Declaration

```objectivec
NSApplicationActivateIgnoringOtherApps
```

<a id="Discussion"></a>

## Discussion

By default, activation deactivates the calling app (assuming it was active), and then the new app is activated only if there’s no currently active application. This prevents the new app from stealing focus from the user, if the app is slow to activate and the user has switched to a different app in the interim. However, if you specify [NSApplicationActivateIgnoringOtherApps](activateignoringotherapps.md), the application is activated regardless of the currently active app, potentially stealing focus from the user.

> **Important**

>  You should **rarely pass this flag** because stealing key focus produces a poor user experience.
