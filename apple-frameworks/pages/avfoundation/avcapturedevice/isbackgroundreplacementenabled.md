> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isbackgroundreplacementenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isbackgroundreplacementenabled)

# isBackgroundReplacementEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A class property that indicates whether a person enables the Background Replacement feature for this app.

## Declaration

```swift
class var isBackgroundReplacementEnabled: Bool { get }
```

## See Also

### Configuring background replacement

- [isBackgroundReplacementActive](isbackgroundreplacementactive.md): A Boolean value that indicates whether Background Replacement is currently active on a capture device.

# backgroundReplacementEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A class property that indicates whether a person enables the Background Replacement feature for this app.

## Declaration

```objectivec
@property (class, readonly, getter=isBackgroundReplacementEnabled) BOOL backgroundReplacementEnabled;
```

## See Also

### Configuring background replacement

- [backgroundReplacementActive](isbackgroundreplacementactive.md): A Boolean value that indicates whether Background Replacement is currently active on a capture device.
