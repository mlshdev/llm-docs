> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedassettrack](https://developer.apple.com/documentation/avfoundation/avfragmentedassettrack)

# AVFragmentedAssetTrack (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that provides the track-level interface to inspect a fragmented asset’s media tracks.

## Declaration

```swift
class AVFragmentedAssetTrack
```

<a id="overview"></a>

## Overview

This class subclasses [AVAssetTrack](avassettrack.md). It has no methods or properties of its own.

## Relationships

### Inherits From

- [AVAssetTrack](avassettrack.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fragmented assets

- [AVFragmentedAsset](avfragmentedasset.md): An asset with a duration that the system can extend without modifying its existing media data.
- [AVFragmentedAssetMinder](avfragmentedassetminder.md): An object that periodically checks whether the system adds new fragments to a fragmented asset.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.

# AVFragmentedAssetTrack (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that provides the track-level interface to inspect a fragmented asset’s media tracks.

## Declaration

```objectivec
@interface AVFragmentedAssetTrack : AVAssetTrack
```

<a id="overview"></a>

## Overview

This class subclasses [AVAssetTrack](avassettrack.md). It has no methods or properties of its own.

## Relationships

### Inherits From

- [AVAssetTrack](avassettrack.md)

## See Also

### Fragmented assets

- [AVFragmentedAsset](avfragmentedasset.md): An asset with a duration that the system can extend without modifying its existing media data.
- [AVFragmentedAssetMinder](avfragmentedassetminder.md): An object that periodically checks whether the system adds new fragments to a fragmented asset.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.
