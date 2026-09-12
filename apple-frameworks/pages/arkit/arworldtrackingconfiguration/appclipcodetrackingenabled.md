> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/appclipcodetrackingenabled](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/appclipcodetrackingenabled)

# appClipCodeTrackingEnabled (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+

A Boolean value that indicates if the framework searches the physical environment for App Clip Codes.

## Declaration

```swift
var appClipCodeTrackingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property’s value is [true](https://developer.apple.com/documentation/swift/true), the session delegate recieves an [ARAppClipCodeAnchor](../arappclipcodeanchor.md) via [session(\_:didAdd:)](../arsessiondelegate/session%28__didadd_%29.md) for every App Clip Code that ARKit detects in the physical environment. The default value is [false](https://developer.apple.com/documentation/swift/false).

Before calling this function, check that the configuration supports App Clip Code tracking by calling [supportsAppClipCodeTracking](supportsappclipcodetracking.md).

To avoid scanning a physical code that’s not connected to an App Clip, the system ensures that an app provides an App Clip before allowing the app to interact with App Clip Codes. Without providing an App Clip, the app can recognize codes in the environment by determining their physical location ([transform](../aranchor/transform.md)), but code URLs ([url](../arappclipcodeanchor/url.md)) remain `nil`.

## See Also

### Accessing App Clip Codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.
- [supportsAppClipCodeTracking](supportsappclipcodetracking.md): A flag that indicates if the device tracks App Clip Codes.
- [ARAppClipCodeAnchor](../arappclipcodeanchor.md): An anchor that tracks the position and orientation of an App Clip Code in the physical environment.

# appClipCodeTrackingEnabled (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+

A Boolean value that indicates if the framework searches the physical environment for App Clip Codes.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL appClipCodeTrackingEnabled;
```

<a id="Discussion"></a>

## Discussion

When this property’s value is [true](https://developer.apple.com/documentation/swift/true), the session delegate recieves an [ARAppClipCodeAnchor](../arappclipcodeanchor.md) via [session:didAddAnchors:](../arsessiondelegate/session%28__didadd_%29.md) for every App Clip Code that ARKit detects in the physical environment. The default value is [false](https://developer.apple.com/documentation/swift/false).

Before calling this function, check that the configuration supports App Clip Code tracking by calling [supportsAppClipCodeTracking](supportsappclipcodetracking.md).

To avoid scanning a physical code that’s not connected to an App Clip, the system ensures that an app provides an App Clip before allowing the app to interact with App Clip Codes. Without providing an App Clip, the app can recognize codes in the environment by determining their physical location ([transform](../aranchor/transform.md)), but code URLs ([url](../arappclipcodeanchor/url.md)) remain `nil`.

## See Also

### Accessing App Clip Codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.
- [supportsAppClipCodeTracking](supportsappclipcodetracking.md): A flag that indicates if the device tracks App Clip Codes.
- [ARAppClipCodeAnchor](../arappclipcodeanchor.md): An anchor that tracks the position and orientation of an App Clip Code in the physical environment.
