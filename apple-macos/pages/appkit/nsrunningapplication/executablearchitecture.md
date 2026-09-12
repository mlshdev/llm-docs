> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/executablearchitecture](https://developer.apple.com/documentation/appkit/nsrunningapplication/executablearchitecture)

# executableArchitecture (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the executing processor architecture for the application.

## Declaration

```swift
var executableArchitecture: Int { get }
```

<a id="Discussion"></a>

## Discussion

The returned value will be one of the constants in Mach-O Architecture in [Bundle](https://developer.apple.com/documentation/foundation/bundle).

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [isFinishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.

# executableArchitecture (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the executing processor architecture for the application.

## Declaration

```objectivec
@property (readonly) NSInteger executableArchitecture;
```

<a id="Discussion"></a>

## Discussion

The returned value will be one of the constants in Mach-O Architecture in [NSBundle](https://developer.apple.com/documentation/foundation/bundle).

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [finishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.
