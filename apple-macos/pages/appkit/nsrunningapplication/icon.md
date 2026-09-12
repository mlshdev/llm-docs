> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/icon](https://developer.apple.com/documentation/appkit/nsrunningapplication/icon)

# icon (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Returns the icon for the receiver’s application.

## Declaration

```swift
var icon: NSImage? { get }
```

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [isFinishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.

# icon (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Returns the icon for the receiver’s application.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSImage * icon;
```

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [finishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.
