> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadatainput/append(_:)](https://developer.apple.com/documentation/avfoundation/avcapturemetadatainput/append(_:))

# append(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Provides metadata to the capture session.

## Declaration

```swift
func append(_ metadata: AVTimedMetadataGroup) throws
```

## Parameters

- `metadata`: A timed group of metadata. To denote a period of no metadata, pass an empty [AVTimedMetadataGroup](../avtimedmetadatagroup.md).

# appendTimedMetadataGroup:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Provides metadata to the capture session.

## Declaration

```objectivec
- (BOOL) appendTimedMetadataGroup:(AVTimedMetadataGroup *) metadata error:(NSError **) outError;
```

## Parameters

- `metadata`: A timed group of metadata. To denote a period of no metadata, pass an empty [AVTimedMetadataGroup](../avtimedmetadatagroup.md).
- `outError`: An error pointer. If an error occurs during initialization, the system populates it with an error object that describes the failure.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the group was appended successfully.
