> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/globallyuniquestring](https://developer.apple.com/documentation/foundation/processinfo/globallyuniquestring)

# globallyUniqueString (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Global unique identifier for the process.

## Declaration

```swift
var globallyUniqueString: String { get }
```

<a id="Discussion"></a>

## Discussion

The global ID for the process includes the host name, process ID, and a time stamp, which ensures that the ID is unique for the network. This property generates a new string each time its getter is invoked, and it uses a counter to guarantee that strings created from the same process are unique.

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [isMacCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [isiOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [isiOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.

# globallyUniqueString (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Global unique identifier for the process.

## Declaration

```objectivec
@property (copy, readonly) NSString * globallyUniqueString;
```

<a id="Discussion"></a>

## Discussion

The global ID for the process includes the host name, process ID, and a time stamp, which ensures that the ID is unique for the network. This property generates a new string each time its getter is invoked, and it uses a counter to guarantee that strings created from the same process are unique.

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [macCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [iOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [iOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.
