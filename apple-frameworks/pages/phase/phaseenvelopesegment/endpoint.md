> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelopesegment/endpoint](https://developer.apple.com/documentation/phase/phaseenvelopesegment/endpoint)

# endPoint (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A point that identifies the end of the segment along the envelope.

## Declaration

```swift
var endPoint: simd_double2 { get set }
```

<a id="Discussion"></a>

## Discussion

The framework connects this property to the prior segment’s end point, or the envelope [startPoint](../phaseenvelope/startpoint.md), in the case of the first segment.

## See Also

### Shaping a Segment

- [curveType](curvetype.md): A curve along the envelope that shapes the segment.

# endPoint (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A point that identifies the end of the segment along the envelope.

## Declaration

```objectivec
@property (nonatomic, assign) simd_double2 endPoint;
```

<a id="Discussion"></a>

## Discussion

The framework connects this property to the prior segment’s end point, or the envelope [startPoint](../phaseenvelope/startpoint.md), in the case of the first segment.

## See Also

### Shaping a Segment

- [curveType](curvetype.md): A curve along the envelope that shapes the segment.
