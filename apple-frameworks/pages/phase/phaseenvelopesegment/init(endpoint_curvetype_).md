> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelopesegment/init(endpoint:curvetype:)](https://developer.apple.com/documentation/phase/phaseenvelopesegment/init(endpoint:curvetype:))

# init(endPoint:curveType:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a curved portion of an envelope.

## Declaration

```swift
init(endPoint: simd_double2, curveType: PHASECurveType)
```

## Parameters

- `endPoint`: The segment’s end point.
- `curveType`: A curve that defines the segment’s portion of the envelope.

# initWithEndPoint:curveType: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a curved portion of an envelope.

## Declaration

```objectivec
- (instancetype) initWithEndPoint:(simd_double2) endPoint curveType:(PHASECurveType) curveType;
```

## Parameters

- `endPoint`: The segment’s end point.
- `curveType`: A curve that defines the segment’s portion of the envelope.
