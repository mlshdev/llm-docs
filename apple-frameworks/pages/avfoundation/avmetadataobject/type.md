> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataobject/type](https://developer.apple.com/documentation/avfoundation/avmetadataobject/type)

# type (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The type of metadata that this object provides.

## Declaration

```swift
var type: AVMetadataObject.ObjectType { get }
```

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [duration](duration.md): The duration of the media associated with this metadata object.
- [time](time.md): The media time value associated with the metadata object.
- [AVMetadataObject.ObjectType](objecttype.md): Constants that identify metadata object types.
- [isFixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [cinematicVideoFocusMode](cinematicvideofocusmode.md): The current focus mode when an object is detected during a Cinematic Video recording.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.
- [objectID](objectid.md): A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.

# type (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The type of metadata that this object provides.

## Declaration

```objectivec
@property (readonly) AVMetadataObjectType type;
```

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [duration](duration.md): The duration of the media associated with this metadata object.
- [time](time.md): The media time value associated with the metadata object.
- [AVMetadataObjectType](objecttype.md): Constants that identify metadata object types.
- [fixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [cinematicVideoFocusMode](cinematicvideofocusmode.md): The current focus mode when an object is detected during a Cinematic Video recording.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.
- [objectID](objectid.md): A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.
