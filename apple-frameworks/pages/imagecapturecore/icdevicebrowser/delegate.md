> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowser/delegate](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/delegate)

# delegate (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The object that acts as the delegate of the device browser.

## Declaration

```swift
unowned(unsafe) var delegate: (any ICDeviceBrowserDelegate)? { get set }
```

## See Also

### Managing Device Browsing

- [ICDeviceBrowserDelegate](../icdevicebrowserdelegate.md): Methods for managing the addition and removal of devices and responding to device changes.

# delegate (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The object that acts as the delegate of the device browser.

## Declaration

```objectivec
@property (assign, nullable) id<ICDeviceBrowserDelegate> delegate;
```

## See Also

### Managing Device Browsing

- [ICDeviceBrowserDelegate](../icdevicebrowserdelegate.md): Methods for managing the addition and removal of devices and responding to device changes.
