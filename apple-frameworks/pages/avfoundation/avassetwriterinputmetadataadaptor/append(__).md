> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputmetadataadaptor/append(_:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor/append(_:))

# append(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Appends a timed metadata group to the adaptor.

> Use AVAssetWriter.inputMetadataReceiver(for:) instead

## Declaration

```swift
func append(_ timedMetadataGroup: AVTimedMetadataGroup) -> Bool
```

## Parameters

- `timedMetadataGroup`: The timed metadata group to append.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the adaptor appends the group; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The timing of metadata items in the output asset correspond to the time range of the timed metadata group, regardless of the values of their individual time and duration properties.

> **Important**

>  Only call this method after you’ve attached the related input to the asset writer and called its [startWriting()](../avassetwriter/startwriting%28%29.md) method.

# appendTimedMetadataGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Appends a timed metadata group to the adaptor.

## Declaration

```objectivec
- (BOOL) appendTimedMetadataGroup:(AVTimedMetadataGroup *) timedMetadataGroup;
```

## Parameters

- `timedMetadataGroup`: The timed metadata group to append.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the adaptor appends the group; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The timing of metadata items in the output asset correspond to the time range of the timed metadata group, regardless of the values of their individual time and duration properties.

> **Important**

>  Only call this method after you’ve attached the related input to the asset writer and called its [startWriting](../avassetwriter/startwriting%28%29.md) method.
