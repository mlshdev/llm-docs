> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontracksegment/isempty](https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/isempty)

# isEmpty (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the segment is empty.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="Discussion"></a>

## Discussion

An empty segment has a valid target time range, but its [sourceURL](sourceurl.md) value is `nil` and the source start time is [invalid](../../coremedia/cmtime/invalid.md). It doesn’t set values for its other properties.

## See Also

### Accessing segment properties

- [sourceURL](sourceurl.md): A URL of the container file whose media this track segment presents.
- [sourceTrackID](sourcetrackid.md): An identifier of a track in the container file whose media this track segment presents.

# empty (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the segment is empty.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isEmpty) BOOL empty;
```

<a id="Discussion"></a>

## Discussion

An empty segment has a valid target time range, but its [sourceURL](sourceurl.md) value is `nil` and the source start time is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md). It doesn’t set values for its other properties.

## See Also

### Accessing segment properties

- [sourceURL](sourceurl.md): A URL of the container file whose media this track segment presents.
- [sourceTrackID](sourcetrackid.md): An identifier of a track in the container file whose media this track segment presents.
