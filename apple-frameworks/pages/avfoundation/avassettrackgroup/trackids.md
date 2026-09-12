> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrackgroup/trackids](https://developer.apple.com/documentation/avfoundation/avassettrackgroup/trackids)

# trackIDs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The IDs of the tracks in the group.

## Declaration

```swift
var trackIDs: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSNumber](../../foundation/nsnumber.md) instances used as [CMPersistentTrackID](../../coremedia/cmpersistenttrackid.md) values, one for each track in the group.

# trackIDs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The IDs of the tracks in the group.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * trackIDs;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSNumber](../../foundation/nsnumber.md) instances used as [CMPersistentTrackID](../../coremedia/cmpersistenttrackid.md) values, one for each track in the group.
