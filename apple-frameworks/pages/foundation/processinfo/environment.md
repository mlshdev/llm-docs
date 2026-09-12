> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/environment](https://developer.apple.com/documentation/foundation/processinfo/environment)

# environment (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The variable names (keys) and their values in the environment from which the process was launched.

## Declaration

```swift
var environment: [String : String] { get }
```

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [isMacCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [isiOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [isiOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.

# environment (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The variable names (keys) and their values in the environment from which the process was launched.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSString *> * environment;
```

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [macCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [iOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [iOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.
