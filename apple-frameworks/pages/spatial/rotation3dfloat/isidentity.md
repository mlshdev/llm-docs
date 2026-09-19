> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rotation3dfloat/isidentity

# isIdentity (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var isIdentity: Bool { get }
```

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the rotation’s angle is zero.

# SPRotation3DFloatIsIdentity (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPRotation3DFloatIsIdentity(SPRotation3DFloat rotation);
```

## Parameters

- `rotation`: The source rotation.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the rotation is zero.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the rotation’s angle is zero.
