> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/localizedname](https://developer.apple.com/documentation/appkit/nsrunningapplication/localizedname)

# localizedName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the localized name of the application.

## Declaration

```swift
var localizedName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is dependent on the current localization of the application and is suitable for presentation to the user.

## See Also

### Application information

- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [isFinishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.

# localizedName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the localized name of the application.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * localizedName;
```

<a id="Discussion"></a>

## Discussion

The value of this property is dependent on the current localization of the application and is suitable for presentation to the user.

## See Also

### Application information

- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [finishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.
