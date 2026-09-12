> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/availabletrackassociationtypes](https://developer.apple.com/documentation/avfoundation/avassettrack/availabletrackassociationtypes)

# availableTrackAssociationTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 16.0) · iPadOS 7.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.9+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

An array of association types that the track uses to associate with other tracks.

> Load the value of [availableTrackAssociationTypes](../avpartialasyncproperty/availabletrackassociationtypes.md) asynchronously instead.

## Declaration

```swift
var availableTrackAssociationTypes: [AVAssetTrack.AssociationType] { get }
```

# availableTrackAssociationTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of association types that the track uses to associate with other tracks.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableTrackAssociationTypes;
```

## See Also

### Accessing track associations

- [associatedTracksOfType:](associatedtracks%28oftype_%29.md): Deprecated. Returns an array of associated tracks that have the specified association type.
- [AVTrackAssociationType](associationtype.md): Constants that define track association types.
