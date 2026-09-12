> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/launchoptions/allowingclassicstartup](https://developer.apple.com/documentation/appkit/nsworkspace/launchoptions/allowingclassicstartup)

# allowingClassicStartup (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.3+ (deprecated in 10.11)

Start up the Classic compatibility environment, if it is required by the app.

> The Classic environment is no longer supported.

## Declaration

```swift
static var allowingClassicStartup: NSWorkspace.LaunchOptions { get }
```

## See Also

### Options

- [andPrint](andprint.md): Deprecated. Print items instead of opening them.
- [withErrorPresentation](witherrorpresentation.md): Deprecated. Display an error panel to the user if a failure occurs.
- [inhibitingBackgroundOnly](inhibitingbackgroundonly.md): Deprecated. Causes launch to fail if the target is background-only.
- [withoutAddingToRecents](withoutaddingtorecents.md): Deprecated. Do not add the app or documents to the Recents menu.
- [withoutActivation](withoutactivation.md): Deprecated. Launch the app but do not bring it into the foreground.
- [async](async.md): Deprecated. Launch the app and return the results asynchronously.
- [preferringClassic](preferringclassic.md): Deprecated. Force the app to launch in the Classic compatibility environment.
- [newInstance](newinstance.md): Deprecated. Create a new instance of the app, even if one is already running.
- [andHide](andhide.md): Deprecated. Tell the app to hide itself as soon as it finishes launching.
- [andHideOthers](andhideothers.md): Deprecated. Hide all apps except the newly launched one.
- [default](default.md): Deprecated. Launch the app asynchronously and launch it in the Classic environment, if required.

# NSWorkspaceLaunchAllowingClassicStartup (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+ (deprecated in 10.11)

Start up the Classic compatibility environment, if it is required by the app.

> The Classic environment is no longer supported.

## Declaration

```objectivec
NSWorkspaceLaunchAllowingClassicStartup
```

## See Also

### Options

- [NSWorkspaceLaunchAndPrint](andprint.md): Deprecated. Print items instead of opening them.
- [NSWorkspaceLaunchWithErrorPresentation](witherrorpresentation.md): Deprecated. Display an error panel to the user if a failure occurs.
- [NSWorkspaceLaunchInhibitingBackgroundOnly](inhibitingbackgroundonly.md): Deprecated. Causes launch to fail if the target is background-only.
- [NSWorkspaceLaunchWithoutAddingToRecents](withoutaddingtorecents.md): Deprecated. Do not add the app or documents to the Recents menu.
- [NSWorkspaceLaunchWithoutActivation](withoutactivation.md): Deprecated. Launch the app but do not bring it into the foreground.
- [NSWorkspaceLaunchAsync](async.md): Deprecated. Launch the app and return the results asynchronously.
- [NSWorkspaceLaunchPreferringClassic](preferringclassic.md): Deprecated. Force the app to launch in the Classic compatibility environment.
- [NSWorkspaceLaunchNewInstance](newinstance.md): Deprecated. Create a new instance of the app, even if one is already running.
- [NSWorkspaceLaunchAndHide](andhide.md): Deprecated. Tell the app to hide itself as soon as it finishes launching.
- [NSWorkspaceLaunchAndHideOthers](andhideothers.md): Deprecated. Hide all apps except the newly launched one.
- [NSWorkspaceLaunchDefault](default.md): Deprecated. Launch the app asynchronously and launch it in the Classic environment, if required.
