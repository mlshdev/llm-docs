> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedescriptor/uniqueid

# uniqueID (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An identifier that uniquely identifies the device’s camera.

## Declaration

```swift
var uniqueID: String { get }
```

<a id="Discussion"></a>

## Discussion

This value matches the [uniqueID](../../avfoundation/avcapturedevice/uniqueid.md) of the camera it describes. Pass it to [init(uniqueID:)](../../avfoundation/avcapturedevice/init%28uniqueid_%29.md) on a background actor to get the camera itself.

## See Also

### Identifying the device

- [localizedName](localizedname.md): Beta. A name for the camera that’s suitable for display in your interface.

# uniqueID (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An identifier that uniquely identifies the device’s camera.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * uniqueID;
```

<a id="Discussion"></a>

## Discussion

This value matches the [uniqueID](../../avfoundation/avcapturedevice/uniqueid.md) of the camera it describes. Pass it to [deviceWithUniqueID:](../../avfoundation/avcapturedevice/init%28uniqueid_%29.md) on a background actor to get the camera itself.

## See Also

### Identifying the device

- [localizedName](localizedname.md): Beta. A name for the camera that’s suitable for display in your interface.
