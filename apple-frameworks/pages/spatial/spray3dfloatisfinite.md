> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dfloatisfinite](https://developer.apple.com/documentation/spatial/spray3dfloatisfinite)

# SPRay3DFloatIsFinite

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPRay3DFloatIsFinite(SPRay3DFloat ray);
```

## Parameters

- `ray`: The source ray.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether all of the values of the ray are finite.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether all of the values of the ray are finite.
