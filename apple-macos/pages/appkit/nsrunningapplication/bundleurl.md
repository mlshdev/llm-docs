> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/bundleurl](https://developer.apple.com/documentation/appkit/nsrunningapplication/bundleurl)

# bundleURL (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the URL to the application’s bundle.

## Declaration

```swift
var bundleURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` of the application does not have a bundle structure.

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [isFinishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.

# bundleURL (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the URL to the application’s bundle.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * bundleURL;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` of the application does not have a bundle structure.

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [finishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.
