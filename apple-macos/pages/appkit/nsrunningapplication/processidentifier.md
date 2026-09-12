> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/processidentifier](https://developer.apple.com/documentation/appkit/nsrunningapplication/processidentifier)

# processIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the process identifier (pid) of the application.

## Declaration

```swift
var processIdentifier: pid_t { get }
```

<a id="Discussion"></a>

## Discussion

Not all applications have a pid.  Applications without a pid return a value of -1.

Do not rely on this for comparing processes, instead compare NSRunningApplication instances using [isEqual(\_:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29).

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [isFinishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.

# processIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates the process identifier (pid) of the application.

## Declaration

```objectivec
@property (readonly) pid_t processIdentifier;
```

<a id="Discussion"></a>

## Discussion

Not all applications have a pid.  Applications without a pid return a value of -1.

Do not rely on this for comparing processes, instead compare NSRunningApplication instances using [isEqual:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29).

## See Also

### Application information

- [localizedName](localizedname.md): Indicates the localized name of the application.
- [icon](icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](launchdate.md): Indicates the date when the application was launched.
- [finishedLaunching](isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [ownsMenuBar](ownsmenubar.md): Returns whether the application owns the current menu bar.
