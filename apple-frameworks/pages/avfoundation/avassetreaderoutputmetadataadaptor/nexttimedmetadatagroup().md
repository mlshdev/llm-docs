> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputmetadataadaptor/nexttimedmetadatagroup()](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputmetadataadaptor/nexttimedmetadatagroup())

# nextTimedMetadataGroup() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the next timed metadata group for the asset reader output.

> Use AVAssetReader.outputMetadataProvider(for:) instead

## Declaration

```swift
func nextTimedMetadataGroup() -> AVTimedMetadataGroup?
```

<a id="return-value"></a>

## Return Value

A timed metadata group that represents the next logical segment of metadata from the source asset reader output.

<a id="Discussion"></a>

## Discussion

This method returns `nil` after the adaptor reads all timed metadata groups from the output, or if an error occurs. When the return value is `nil`, check the asset reader’s [status](../avassetreader/status-swift.property.md) property to determine why it couldn’t read more samples.

# nextTimedMetadataGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Returns the next timed metadata group for the asset reader output.

## Declaration

```objectivec
- (AVTimedMetadataGroup *) nextTimedMetadataGroup;
```

<a id="return-value"></a>

## Return Value

A timed metadata group that represents the next logical segment of metadata from the source asset reader output.

<a id="Discussion"></a>

## Discussion

This method returns `nil` after the adaptor reads all timed metadata groups from the output, or if an error occurs. When the return value is `nil`, check the asset reader’s [status](../avassetreader/status-swift.property.md) property to determine why it couldn’t read more samples.
