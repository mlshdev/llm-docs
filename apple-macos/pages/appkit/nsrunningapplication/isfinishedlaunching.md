> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/isfinishedlaunching](https://developer.apple.com/documentation/appkit/nsrunningapplication/isfinishedlaunching)

# isFinishedLaunching (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that determines whether the receiver’s process has finished launching.

## Declaration

```swift
var isFinishedLaunching: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property corresponds to the running application having received an [didFinishLaunchingNotification](../nsapplication/didfinishlaunchingnotification.md) notification internally. Some applications do not post this notification (applications that do not rely on [NSApplication](../nsapplication.md)) and so are never reported as finished launching.

This property is observable using key-value observing.

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.

# finishedLaunching (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that determines whether the receiver’s process has finished launching.

## Declaration

```objectivec
@property (readonly, getter=isFinishedLaunching) BOOL finishedLaunching;
```

<a id="Discussion"></a>

## Discussion

The value of this property corresponds to the running application having received an [NSApplicationDidFinishLaunchingNotification](../nsapplication/didfinishlaunchingnotification.md) notification internally. Some applications do not post this notification (applications that do not rely on [NSApplication](../nsapplication.md)) and so are never reported as finished launching.

This property is observable using key-value observing.

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.
