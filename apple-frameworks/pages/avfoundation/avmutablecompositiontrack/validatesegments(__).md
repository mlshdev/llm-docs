> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/validatesegments(_:)](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/validatesegments(_:))

# validateSegments(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether a given array of track segments conform to the timing rules for a composition track.

## Declaration

```swift
func validateSegments(_ trackSegments: [AVCompositionTrackSegment]) throws
```

## Parameters

- `trackSegments`: The track segments to validate.

# validateTrackSegments:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether a given array of track segments conform to the timing rules for a composition track.

## Declaration

```objectivec
- (BOOL) validateTrackSegments:(NSArray<AVCompositionTrackSegment *> *) trackSegments error:(NSError **) outError;
```

## Parameters

- `trackSegments`: The track segments to validate.
- `outError`: If validation fails, on return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the track segments conform to the timing rules for a composition track; otherwise, [false](https://developer.apple.com/documentation/swift/false).
