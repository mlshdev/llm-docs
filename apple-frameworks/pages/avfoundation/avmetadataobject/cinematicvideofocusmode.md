> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataobject/cinematicvideofocusmode](https://developer.apple.com/documentation/avfoundation/avmetadataobject/cinematicvideofocusmode)

# cinematicVideoFocusMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The current focus mode when an object is detected during a Cinematic Video recording.

## Declaration

```swift
var cinematicVideoFocusMode: AVCaptureDevice.CinematicVideoFocusMode { get }
```

<a id="discussion"></a>

## Discussion

Default is [AVCaptureDevice.CinematicVideoFocusMode.none](../avcapturedevice/cinematicvideofocusmode/none.md).

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [duration](duration.md): The duration of the media associated with this metadata object.
- [time](time.md): The media time value associated with the metadata object.
- [type](type.md): The type of metadata that this object provides.
- [AVMetadataObject.ObjectType](objecttype.md): Constants that identify metadata object types.
- [isFixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.
- [objectID](objectid.md): A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.

# cinematicVideoFocusMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The current focus mode when an object is detected during a Cinematic Video recording.

## Declaration

```objectivec
@property (readonly) AVCaptureCinematicVideoFocusMode cinematicVideoFocusMode;
```

<a id="discussion"></a>

## Discussion

Default is [AVCaptureCinematicVideoFocusModeNone](../avcapturedevice/cinematicvideofocusmode/none.md).

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [duration](duration.md): The duration of the media associated with this metadata object.
- [time](time.md): The media time value associated with the metadata object.
- [type](type.md): The type of metadata that this object provides.
- [AVMetadataObjectType](objecttype.md): Constants that identify metadata object types.
- [fixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.
- [objectID](objectid.md): A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.
