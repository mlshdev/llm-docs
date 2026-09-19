> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedescriptor/mediatypes

# mediaTypes (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The kinds of media the camera captures.

## Declaration

```swift
var mediaTypes: Set<AVMediaType> { get }
```

<a id="Discussion"></a>

## Discussion

The set of [AVMediaType](../../avfoundation/avmediatype.md) values the camera supports, such as video or audio.

## See Also

### Inspecting the device’s characteristics

- [deviceType](devicetype.md): Beta. The kind of camera, such as a wide-angle or telephoto camera.
- [position](position.md): Beta. The physical position of the camera on the device.

# mediaTypes (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The kinds of media the camera captures.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<NSString *> * mediaTypes;
```

<a id="Discussion"></a>

## Discussion

The set of [AVMediaType](../../avfoundation/avmediatype.md) values the camera supports, such as video or audio.

## See Also

### Inspecting the device’s characteristics

- [deviceType](devicetype.md): Beta. The kind of camera, such as a wide-angle or telephoto camera.
- [position](position.md): Beta. The physical position of the camera on the device.
