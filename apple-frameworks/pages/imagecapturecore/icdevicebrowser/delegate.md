> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/delegate

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
