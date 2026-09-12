> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovietrack/mediadatastorage](https://developer.apple.com/documentation/avfoundation/avmovietrack/mediadatastorage)

# mediaDataStorage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The storage container for media data added to a track.

## Declaration

```swift
@NSCopying var mediaDataStorage: AVMediaDataStorage? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an [AVMediaDataStorage](../avmediadatastorage.md) object that indicates the location to which the system writes media data when it’s inserted or appended.

## See Also

### Retrieving track information

- [alternateGroupID](alternategroupid.md): A value that identifies the track as a member of a particular alternate group.
- [mediaDecodeTimeRange](mediadecodetimerange.md): A range of decode times for the track’s media.
- [mediaPresentationTimeRange](mediapresentationtimerange.md): A range of presentation times for the track’s media.

# mediaDataStorage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The storage container for media data added to a track.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) AVMediaDataStorage * mediaDataStorage;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an [AVMediaDataStorage](../avmediadatastorage.md) object that indicates the location to which the system writes media data when it’s inserted or appended.

## See Also

### Retrieving track information

- [alternateGroupID](alternategroupid.md): A value that identifies the track as a member of a particular alternate group.
- [mediaDecodeTimeRange](mediadecodetimerange.md): A range of decode times for the track’s media.
- [mediaPresentationTimeRange](mediapresentationtimerange.md): A range of presentation times for the track’s media.
