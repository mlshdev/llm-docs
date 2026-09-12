> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/isiosapponmac](https://developer.apple.com/documentation/foundation/processinfo/isiosapponmac)

# isiOSAppOnMac (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.

## Declaration

```swift
var isiOSAppOnMac: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) only when the process is an iOS app running on a Mac. The value of the property is [false](https://developer.apple.com/documentation/swift/false) for all other apps on the Mac, including Mac apps built using Mac Catalyst. The property is also [false](https://developer.apple.com/documentation/swift/false) for processes running on platforms other than macOS.

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [isMacCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [isiOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.

# iOSAppOnMac (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.

## Declaration

```objectivec
@property (readonly, getter=isiOSAppOnMac) BOOL iOSAppOnMac;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) only when the process is an iOS app running on a Mac. The value of the property is [false](https://developer.apple.com/documentation/swift/false) for all other apps on the Mac, including Mac apps built using Mac Catalyst. The property is also [false](https://developer.apple.com/documentation/swift/false) for processes running on platforms other than macOS.

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [macCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [iOSAppOnVision](isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.
