> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isedgelightenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isedgelightenabled)

# isEdgeLightEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+

A class property indicating whether the Edge Light feature is currently enabled in Control Center.

## Declaration

```swift
class var isEdgeLightEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

This readonly property changes to reflect the Edge Light state in Control Center. It is key-value observable.

# edgeLightEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+

A class property indicating whether the Edge Light feature is currently enabled in Control Center.

## Declaration

```objectivec
@property (class, readonly, getter=isEdgeLightEnabled) BOOL edgeLightEnabled;
```

<a id="discussion"></a>

## Discussion

This readonly property changes to reflect the Edge Light state in Control Center. It is key-value observable.
