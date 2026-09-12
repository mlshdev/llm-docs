> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataobject/objectid](https://developer.apple.com/documentation/avfoundation/avmetadataobject/objectid)

# objectID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.

## Declaration

```swift
var objectID: Int { get }
```

<a id="discussion"></a>

## Discussion

Defaults to a value of -1 when invalid or not available. When used in conjunction with an [AVCaptureMetadataOutput](../avcapturemetadataoutput.md), each newly detected object that enters the scene is assigned a unique identifier. [objectID](objectid.md)s are never re-used as objects leave the picture and new ones enter. Objects that leave the picture and then re-enter are assigned a new [objectID](objectid.md). Focus-tracked objects are an exception. They retain the same [objectID](objectid.md) when leaving and re-entering the picture.

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [duration](duration.md): The duration of the media associated with this metadata object.
- [time](time.md): The media time value associated with the metadata object.
- [type](type.md): The type of metadata that this object provides.
- [AVMetadataObject.ObjectType](objecttype.md): Constants that identify metadata object types.
- [isFixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [cinematicVideoFocusMode](cinematicvideofocusmode.md): The current focus mode when an object is detected during a Cinematic Video recording.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.

# objectID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.

## Declaration

```objectivec
@property (readonly) NSInteger objectID;
```

<a id="discussion"></a>

## Discussion

Defaults to a value of -1 when invalid or not available. When used in conjunction with an [AVCaptureMetadataOutput](../avcapturemetadataoutput.md), each newly detected object that enters the scene is assigned a unique identifier. [objectID](objectid.md)s are never re-used as objects leave the picture and new ones enter. Objects that leave the picture and then re-enter are assigned a new [objectID](objectid.md). Focus-tracked objects are an exception. They retain the same [objectID](objectid.md) when leaving and re-entering the picture.

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [duration](duration.md): The duration of the media associated with this metadata object.
- [time](time.md): The media time value associated with the metadata object.
- [type](type.md): The type of metadata that this object provides.
- [AVMetadataObjectType](objecttype.md): Constants that identify metadata object types.
- [fixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [cinematicVideoFocusMode](cinematicvideofocusmode.md): The current focus mode when an object is detected during a Cinematic Video recording.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.
