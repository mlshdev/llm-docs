> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelopesegment/curvetype](https://developer.apple.com/documentation/phase/phaseenvelopesegment/curvetype)

# curveType (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A curve along the envelope that shapes the segment.

## Declaration

```swift
var curveType: PHASECurveType { get set }
```

<a id="Discussion"></a>

## Discussion

The option you choose for this property determines the segment’s y\_-\_value rate of change along the input.

## See Also

### Shaping a Segment

- [endPoint](endpoint.md): A point that identifies the end of the segment along the envelope.

# curveType (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A curve along the envelope that shapes the segment.

## Declaration

```objectivec
@property (nonatomic, assign) PHASECurveType curveType;
```

<a id="Discussion"></a>

## Discussion

The option you choose for this property determines the segment’s y\_-\_value rate of change along the input.

## See Also

### Shaping a Segment

- [endPoint](endpoint.md): A point that identifies the end of the segment along the envelope.
