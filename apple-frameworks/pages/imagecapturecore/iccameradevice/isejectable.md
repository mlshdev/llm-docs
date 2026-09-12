> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/isejectable](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/isejectable)

# isEjectable (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the device can be ‘soft’ removed or disconnected.

## Declaration

```swift
var isEjectable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Soft ejecting an SD card is equivalent to unmounting it in Finder without physically removing it from the host.

# ejectable (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the device can be ‘soft’ removed or disconnected.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isEjectable) BOOL ejectable;
```

<a id="Discussion"></a>

## Discussion

Soft ejecting an SD card is equivalent to unmounting it in Finder without physically removing it from the host.
