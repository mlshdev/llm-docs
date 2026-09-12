> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/processidentifier](https://developer.apple.com/documentation/foundation/processinfo/processidentifier)

# processIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier of the process (often called process ID).

## Declaration

```swift
var processIdentifier: Int32 { get }
```

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [isMacCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [isiOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [isiOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processName](processname.md): The name of the process.

# processIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier of the process (often called process ID).

## Declaration

```objectivec
@property (readonly) int processIdentifier;
```

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [macCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [iOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [iOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processName](processname.md): The name of the process.
