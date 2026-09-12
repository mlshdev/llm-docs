> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/timedmetadata](https://developer.apple.com/documentation/avfoundation/avplayeritem/timedmetadata)

# timedMetadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0)

An array of the most recently encountered timed metadata.

> Use [AVPlayerItemMetadataOutput](../avplayeritemmetadataoutput.md) to access timed metadata.

## Declaration

```swift
@MainActor var timedMetadata: [AVMetadataItem]? { get }
```

<a id="return-value"></a>

## Return Value

An array of [AVMetadataItem](../avmetadataitem.md) or `nil` if no metadata was found.

<a id="Discussion"></a>

## Discussion

Prior to the player item loading its media, this property value is `nil`. You can key-value observe this property to monitor when metadata becomes available.

# timedMetadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0)

An array of the most recently encountered timed metadata.

> Use [AVPlayerItemMetadataOutput](../avplayeritemmetadataoutput.md) to access timed metadata.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<AVMetadataItem *> * timedMetadata;
```

<a id="return-value"></a>

## Return Value

An array of [AVMetadataItem](../avmetadataitem.md) or `nil` if no metadata was found.

<a id="Discussion"></a>

## Discussion

Prior to the player item loading its media, this property value is `nil`. You can key-value observe this property to monitor when metadata becomes available.
