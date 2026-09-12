> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/isiosapponvision](https://developer.apple.com/documentation/foundation/processinfo/isiosapponvision)

# isiOSAppOnVision (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.1+ · watchOS 26.1+

A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.

## Declaration

```swift
var isiOSAppOnVision: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) only when the process is an iOS app running on a visionOS device. The value of the property is [false](https://developer.apple.com/documentation/swift/false) for all other apps on visionOS. The property is also [false](https://developer.apple.com/documentation/swift/false) for processes running on platforms other than visonOS.

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [isMacCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [isiOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.

# iOSAppOnVision (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.1+ · watchOS 26.1+

A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.

## Declaration

```objectivec
@property (readonly, getter=isiOSAppOnVision) BOOL iOSAppOnVision;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) only when the process is an iOS app running on a visionOS device. The value of the property is [false](https://developer.apple.com/documentation/swift/false) for all other apps on visionOS. The property is also [false](https://developer.apple.com/documentation/swift/false) for processes running on platforms other than visonOS.

## See Also

### Accessing process information

- [arguments](arguments.md): Array of strings with the command-line arguments for the process.
- [environment](environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](globallyuniquestring.md): Global unique identifier for the process.
- [macCatalystApp](ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [iOSAppOnMac](isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [processIdentifier](processidentifier.md): The identifier of the process (often called process ID).
- [processName](processname.md): The name of the process.
