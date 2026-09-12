> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat/isinvertible](https://developer.apple.com/documentation/spatial/affinetransform3dfloat/isinvertible)

# isInvertible (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var isInvertible: Bool { get }
```

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the transform’s underlying matrix has an inverse.

# SPAffineTransform3DFloatIsInvertible (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPAffineTransform3DFloatIsInvertible(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the transform’s underlying matrix has an inverse.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the transform’s underlying matrix has an inverse.
