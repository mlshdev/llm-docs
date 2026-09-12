> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice/discoverysession/issupported](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/discoverysession/issupported)

# isSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether external sync devices are supported by this device.

## Declaration

```swift
class var isSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

A value of `true` indicates that external sync devices are supported while `false` indicates they are not.

## See Also

### Accessing the shared instance

- [shared](shared.md): The singleton instance of the external sync source device discovery session.

# supported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether external sync devices are supported by this device.

## Declaration

```objectivec
@property (class, readonly, getter=isSupported) BOOL supported;
```

<a id="discussion"></a>

## Discussion

A value of `true` indicates that external sync devices are supported while `false` indicates they are not.

## See Also

### Accessing the shared instance

- [sharedSession](shared.md): The singleton instance of the external sync source device discovery session.
