> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingconfiguration/supportsappclipcodetracking](https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/supportsappclipcodetracking)

# supportsAppClipCodeTracking (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+

A flag that indicates if the device tracks App Clip Codes.

## Declaration

```swift
class var supportsAppClipCodeTracking: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Devices require the Apple Neural Engine (ANE) to track App Clip Codes. The system sets this property to [true](https://developer.apple.com/documentation/swift/true) if the device contains the ANE chip. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Call this function before setting [appClipCodeTrackingEnabled](../arworldtrackingconfiguration/appclipcodetrackingenabled.md).

## See Also

### Accessing app clip codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.
- [appClipCodeTrackingEnabled](appclipcodetrackingenabled.md): A Boolean value that indicates if the framework searches the physical environment for App Clip Codes.
- [ARAppClipCodeAnchor](../arappclipcodeanchor.md): An anchor that tracks the position and orientation of an App Clip Code in the physical environment.

# supportsAppClipCodeTracking (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+

A flag that indicates if the device tracks App Clip Codes.

## Declaration

```objectivec
@property (class, nonatomic, readonly) BOOL supportsAppClipCodeTracking;
```

<a id="Discussion"></a>

## Discussion

Devices require the Apple Neural Engine (ANE) to track App Clip Codes. The system sets this property to [true](https://developer.apple.com/documentation/swift/true) if the device contains the ANE chip. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Call this function before setting [appClipCodeTrackingEnabled](../arworldtrackingconfiguration/appclipcodetrackingenabled.md).

## See Also

### Accessing app clip codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.
- [appClipCodeTrackingEnabled](appclipcodetrackingenabled.md): A Boolean value that indicates if the framework searches the physical environment for App Clip Codes.
- [ARAppClipCodeAnchor](../arappclipcodeanchor.md): An anchor that tracks the position and orientation of an App Clip Code in the physical environment.
