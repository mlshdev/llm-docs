> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeskviewapplication/launchconfiguration/requiressetupmodecompletion](https://developer.apple.com/documentation/avfoundation/avcapturedeskviewapplication/launchconfiguration/requiressetupmodecompletion)

# requiresSetUpModeCompletion (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

A Boolean value that specifies whether the system requires the user to complete setup mode before it executes the completion handler.

## Declaration

```swift
var requiresSetUpModeCompletion: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which tells the system to execute the completion handler as soon as it displays Desk View. If [true](https://developer.apple.com/documentation/swift/true), the system executes the completion handler after the user completes setup and starts Desk View.

## See Also

### Customizing the presentation

- [mainWindowFrame](mainwindowframe.md): The frame for Desk View after it launches.

# requiresSetUpModeCompletion (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

A Boolean value that specifies whether the system requires the user to complete setup mode before it executes the completion handler.

## Declaration

```objectivec
@property BOOL requiresSetUpModeCompletion;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which tells the system to execute the completion handler as soon as it displays Desk View. If [true](https://developer.apple.com/documentation/swift/true), the system executes the completion handler after the user completes setup and starts Desk View.

## See Also

### Customizing the presentation

- [mainWindowFrame](mainwindowframe.md): The frame for Desk View after it launches.
