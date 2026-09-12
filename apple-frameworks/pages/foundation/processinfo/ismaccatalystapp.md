> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/ismaccatalystapp](https://developer.apple.com/documentation/foundation/processinfo/ismaccatalystapp)

# isMacCatalystApp (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.

## Declaration

```swift
var isMacCatalystApp: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the process is:

- A Mac app built with Mac Catalyst, or an iOS app running on Apple silicon.
- Running on a Mac.

Frameworks that support iOS and macOS use this property to determine if the process is a Mac app built with Mac Catalyst. To conditionally compile source code intended to run only in macOS, use `#if targetEnvironment(macCatalyst)` (or `#if TARGET_OS_MACCATALYST` in Objective-C) instead.

> **Note**

>  To distinguish between an iOS app running on Apple silicon and a Mac app built with Mac Catalyst, use the [isiOSAppOnMac](isiosapponmac.md) property.

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [isiOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [isiOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.

# macCatalystApp (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.

## Declaration

```objectivec
@property (readonly, getter=isMacCatalystApp) BOOL macCatalystApp;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the process is:

- A Mac app built with Mac Catalyst, or an iOS app running on Apple silicon.
- Running on a Mac.

Frameworks that support iOS and macOS use this property to determine if the process is a Mac app built with Mac Catalyst. To conditionally compile source code intended to run only in macOS, use `#if targetEnvironment(macCatalyst)` (or `#if TARGET_OS_MACCATALYST` in Objective-C) instead.

> **Note**

>  To distinguish between an iOS app running on Apple silicon and a Mac app built with Mac Catalyst, use the [iOSAppOnMac](isiosapponmac.md) property.

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [iOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [iOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.
