> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectfacelandmarksrequest/revision(_:supportsconstellation:)](https://developer.apple.com/documentation/vision/vndetectfacelandmarksrequest/revision(_:supportsconstellation:))

# revision(\_:supportsConstellation:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether a revision supports a constellation.

## Declaration

```swift
class func revision(_ requestRevision: Int, supportsConstellation constellation: VNRequestFaceLandmarksConstellation) -> Bool
```

## Parameters

- `requestRevision`: The revision of the request.
- `constellation`: The contellation for which to determine support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the revision supports the constellation, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Identifying Request Revisions

- [VNDetectFaceLandmarksRequestRevision3](../vndetectfacelandmarksrequestrevision3.md): A constant for specifying revision 3 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision2](../vndetectfacelandmarksrequestrevision2.md): A constant for specifying revision 2 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision1](../vndetectfacelandmarksrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face landmarks detection request.

# revision:supportsConstellation: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether a revision supports a constellation.

## Declaration

```objectivec
+ (BOOL) revision:(NSUInteger) requestRevision supportsConstellation:(VNRequestFaceLandmarksConstellation) constellation;
```

## Parameters

- `requestRevision`: The revision of the request.
- `constellation`: The contellation for which to determine support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the revision supports the constellation, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Identifying Request Revisions

- [VNDetectFaceLandmarksRequestRevision3](../vndetectfacelandmarksrequestrevision3.md): A constant for specifying revision 3 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision2](../vndetectfacelandmarksrequestrevision2.md): A constant for specifying revision 2 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision1](../vndetectfacelandmarksrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face landmarks detection request.
