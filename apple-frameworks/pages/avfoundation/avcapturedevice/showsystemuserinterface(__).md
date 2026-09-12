> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/showsystemuserinterface(_:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/showsystemuserinterface(_:))

# showSystemUserInterface(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Displays the system’s user interface to configure video effects or microphone modes.

## Declaration

```swift
class func showSystemUserInterface(_ systemUserInterface: AVCaptureDevice.SystemUserInterface)
```

## Parameters

- `systemUserInterface`: The system user interface to present.

<a id="Discussion"></a>

## Discussion

Use this method to prompt the user to make changes to Video Effects (such as Center Stage or Portrait Effect) or Microphone Modes. It presents the system user interface and deep links to the appropriate module.

Calling this method isn’t a blocking operation. After the system presents the indicated user interface, control returns immediately to the app.

## See Also

### Presenting the configuration user interface

- [AVCaptureDevice.SystemUserInterface](systemuserinterface.md): Constants that describe the capture device configuration user interfaces.

# showSystemUserInterface: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

Displays the system’s user interface to configure video effects or microphone modes.

## Declaration

```objectivec
+ (void) showSystemUserInterface:(AVCaptureSystemUserInterface) systemUserInterface;
```

## Parameters

- `systemUserInterface`: The system user interface to present.

<a id="Discussion"></a>

## Discussion

Use this method to prompt the user to make changes to Video Effects (such as Center Stage or Portrait Effect) or Microphone Modes. It presents the system user interface and deep links to the appropriate module.

Calling this method isn’t a blocking operation. After the system presents the indicated user interface, control returns immediately to the app.

## See Also

### Presenting the configuration user interface

- [AVCaptureSystemUserInterface](systemuserinterface.md): Constants that describe the capture device configuration user interfaces.
