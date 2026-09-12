> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice/discoverysession/devices](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/discoverysession/devices)

# devices (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An array of external sync devices connected to this host.

## Declaration

```swift
var devices: [AVExternalSyncDevice] { get }
```

<a id="discussion"></a>

## Discussion

The list is updated when external sync devices are connected to the host and they remain in the list until they become unavailable. This property is key-value observable.

# devices (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An array of external sync devices connected to this host.

## Declaration

```objectivec
@property (readonly) NSArray<AVExternalSyncDevice *> * devices;
```

<a id="discussion"></a>

## Discussion

The list is updated when external sync devices are connected to the host and they remain in the list until they become unavailable. This property is key-value observable.
