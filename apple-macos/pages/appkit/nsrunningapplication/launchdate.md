> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/launchdate](https://developer.apple.com/documentation/appkit/nsrunningapplication/launchdate)

# launchDate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the date when the application was launched.

## Declaration

```swift
var launchDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This property is only available for applications that were launched by LaunchServices.

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [isFinishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.

# launchDate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the date when the application was launched.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * launchDate;
```

<a id="Discussion"></a>

## Discussion

This property is only available for applications that were launched by LaunchServices.

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [finishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.
