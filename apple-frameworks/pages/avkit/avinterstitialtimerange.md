> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterstitialtimerange

# AVInterstitialTimeRange (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 9.0+ · visionOS 1.0+

A time range in an audiovisual presentation for content with an interstitial designation, such as advertisements or legal notices.

## Declaration

```swift
class AVInterstitialTimeRange
```

## Mentioned In

- [Working with interstitial content](working-with-interstitial-content.md)

<a id="overview"></a>

## Overview

When you associate interstitial time ranges with an [AVPlayerItem](../avfoundation/avplayeritem.md) you present with an [AVPlayerViewController](avplayerviewcontroller.md), you can customize or restrict the presentation of interstitial content. For example, you can allow the user to skip advertisements or prohibit skipping of a legal notice.

## Topics

### Creating an interstitial time range

- [init(timeRange:)](avinterstitialtimerange/init%28timerange_%29.md): Initializes an interstitial time range object with the specified time range.

### Inspecting an interstitial time range

- [timeRange](avinterstitialtimerange/timerange.md): The time range identified as interstitial content.

### Initializers

- [init(coder:)](avinterstitialtimerange/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Interstitials and markers

- [Working with interstitial content](working-with-interstitial-content.md): Present additional content alongside your main media presentation using HTTP Live Streaming support.
- [Presenting navigation markers](presenting-navigation-markers.md): Present navigation markers in the Chapters panel to help users quickly navigate your content.
- [AVNavigationMarkersGroup](avnavigationmarkersgroup.md): A set of markers for navigating playback of an audiovisual presentation.

# AVInterstitialTimeRange (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 9.0+ · visionOS 1.0+

A time range in an audiovisual presentation for content with an interstitial designation, such as advertisements or legal notices.

## Declaration

```objectivec
@interface AVInterstitialTimeRange : NSObject
```

## Mentioned In

- [Working with interstitial content](working-with-interstitial-content.md)

<a id="overview"></a>

## Overview

When you associate interstitial time ranges with an [AVPlayerItem](../avfoundation/avplayeritem.md) you present with an [AVPlayerViewController](avplayerviewcontroller.md), you can customize or restrict the presentation of interstitial content. For example, you can allow the user to skip advertisements or prohibit skipping of a legal notice.

## Topics

### Creating an interstitial time range

- [initWithTimeRange:](avinterstitialtimerange/init%28timerange_%29.md): Initializes an interstitial time range object with the specified time range.

### Inspecting an interstitial time range

- [timeRange](avinterstitialtimerange/timerange.md): The time range identified as interstitial content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Interstitials and markers

- [Working with interstitial content](working-with-interstitial-content.md): Present additional content alongside your main media presentation using HTTP Live Streaming support.
- [Presenting navigation markers](presenting-navigation-markers.md): Present navigation markers in the Chapters panel to help users quickly navigate your content.
- [AVNavigationMarkersGroup](avnavigationmarkersgroup.md): A set of markers for navigating playback of an audiovisual presentation.
