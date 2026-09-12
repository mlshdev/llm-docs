> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataobject/duration](https://developer.apple.com/documentation/avfoundation/avmetadataobject/duration)

# duration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The duration of the media associated with this metadata object.

## Declaration

```swift
var duration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

For metadata originating from a sample buffer ([CMSampleBuffer](../../coremedia/cmsamplebuffer.md)), the duration reflects the duration of the sample buffer. If there is no valid duration value associated with the metadata, this property should contain [invalid](../../coremedia/cmtime/invalid.md).

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [time](time.md): The media time value associated with the metadata object.
- [type](type.md): The type of metadata that this object provides.
- [AVMetadataObject.ObjectType](objecttype.md): Constants that identify metadata object types.
- [isFixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [cinematicVideoFocusMode](cinematicvideofocusmode.md): The current focus mode when an object is detected during a Cinematic Video recording.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.
- [objectID](objectid.md): A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.

# duration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The duration of the media associated with this metadata object.

## Declaration

```objectivec
@property (readonly) CMTime duration;
```

<a id="Discussion"></a>

## Discussion

For metadata originating from a sample buffer ([CMSampleBufferRef](../../coremedia/cmsamplebuffer.md)), the duration reflects the duration of the sample buffer. If there is no valid duration value associated with the metadata, this property should contain [kCMTimeInvalid](../../coremedia/cmtime/invalid.md).

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [time](time.md): The media time value associated with the metadata object.
- [type](type.md): The type of metadata that this object provides.
- [AVMetadataObjectType](objecttype.md): Constants that identify metadata object types.
- [fixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [cinematicVideoFocusMode](cinematicvideofocusmode.md): The current focus mode when an object is detected during a Cinematic Video recording.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.
- [objectID](objectid.md): A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.
