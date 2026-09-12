> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor/comparepositionindecodeorder(withpositionof:)](https://developer.apple.com/documentation/avfoundation/avsamplecursor/comparepositionindecodeorder(withpositionof:))

# comparePositionInDecodeOrder(withPositionOf:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Compares the relative positions of two sample cursors and returns their relative positions.

## Declaration

```swift
func comparePositionInDecodeOrder(withPositionOf cursor: AVSampleCursor) -> ComparisonResult
```

## Parameters

- `cursor`: An instance of `AVSampleCursor` with which to compare positions.

<a id="return-value"></a>

## Return Value

Returns a comparison result that indicates of this cursor points at a sample before, the same as, or after the sample pointed to by the specified cursor.

<a id="Discussion"></a>

## Discussion

Undefined results occur if this cursor and the passed in cursor reference different sequences of samples, such as when they’re created by different instances of [AVAssetTrack](../avassettrack.md).

# comparePositionInDecodeOrderWithPositionOfCursor: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Compares the relative positions of two sample cursors and returns their relative positions.

## Declaration

```objectivec
- (NSComparisonResult) comparePositionInDecodeOrderWithPositionOfCursor:(AVSampleCursor *) cursor;
```

## Parameters

- `cursor`: An instance of `AVSampleCursor` with which to compare positions.

<a id="return-value"></a>

## Return Value

Returns a comparison result that indicates of this cursor points at a sample before, the same as, or after the sample pointed to by the specified cursor.

<a id="Discussion"></a>

## Discussion

Undefined results occur if this cursor and the passed in cursor reference different sequences of samples, such as when they’re created by different instances of [AVAssetTrack](../avassettrack.md).
