> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalstoragedevicediscoverysession/externalstoragedevices](https://developer.apple.com/documentation/avfoundation/avexternalstoragedevicediscoverysession/externalstoragedevices)

# externalStorageDevices (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An array of external storage devices the session updates as individual devices connect or disconnect from the system.

## Declaration

```swift
var externalStorageDevices: [AVExternalStorageDevice] { get }
```

<a id="Discussion"></a>

## Discussion

Your app can monitor the changes to this array with a key-value observation.

# externalStorageDevices (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An array of external storage devices the session updates as individual devices connect or disconnect from the system.

## Declaration

```objectivec
@property (readonly) NSArray<AVExternalStorageDevice *> * externalStorageDevices;
```

<a id="Discussion"></a>

## Discussion

Your app can monitor the changes to this array with a key-value observation.
