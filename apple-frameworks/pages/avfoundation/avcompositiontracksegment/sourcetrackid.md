> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontracksegment/sourcetrackid](https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/sourcetrackid)

# sourceTrackID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An identifier of a track in the container file whose media this track segment presents.

## Declaration

```swift
var sourceTrackID: CMPersistentTrackID { get }
```

## See Also

### Accessing segment properties

- [sourceURL](sourceurl.md): A URL of the container file whose media this track segment presents.
- [isEmpty](isempty.md): A Boolean value that indicates whether the segment is empty.

# sourceTrackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An identifier of a track in the container file whose media this track segment presents.

## Declaration

```objectivec
@property (nonatomic, readonly) CMPersistentTrackID sourceTrackID;
```

## See Also

### Accessing segment properties

- [sourceURL](sourceurl.md): A URL of the container file whose media this track segment presents.
- [empty](isempty.md): A Boolean value that indicates whether the segment is empty.
