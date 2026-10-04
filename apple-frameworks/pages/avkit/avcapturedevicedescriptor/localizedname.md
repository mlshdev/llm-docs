> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedescriptor/localizedname

# localizedName (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+

A name for the camera that’s suitable for display in your interface.

## Declaration

```swift
var localizedName: String { get }
```

<a id="Discussion"></a>

## Discussion

This value matches the [localizedName](../../avfoundation/avcapturedevice/localizedname.md) of the camera it describes.

## See Also

### Identifying the device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device’s camera.

# localizedName (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.1+

A name for the camera that’s suitable for display in your interface.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * localizedName;
```

<a id="Discussion"></a>

## Discussion

This value matches the [localizedName](../../avfoundation/avcapturedevice/localizedname.md) of the camera it describes.

## See Also

### Identifying the device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device’s camera.
