> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/trackgroups](https://developer.apple.com/documentation/avfoundation/avasset/trackgroups)

# trackGroups (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 16.0) · iPadOS 7.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.9+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

The track groups an asset contains.

> Load the value of [trackGroups](../avpartialasyncproperty/trackgroups.md) asynchronously instead.

## Declaration

```swift
var trackGroups: [AVAssetTrackGroup] { get }
```

<a id="Discussion"></a>

## Discussion

This value is an empty array if the asset has no track groups.

# trackGroups (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The track groups an asset contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAssetTrackGroup *> * trackGroups;
```

<a id="Discussion"></a>

## Discussion

This value is an empty array if the asset has no track groups.
