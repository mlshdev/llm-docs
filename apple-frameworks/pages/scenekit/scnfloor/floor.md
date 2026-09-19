> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scenekit/scnfloor/floor

# floor

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a floor geometry.

## Declaration

```objectivec
+ (instancetype) floor;
```

<a id="return-value"></a>

## Return Value

A new floor geometry.

<a id="Discussion"></a>

## Discussion

A floor extends infinitely in the x- and z-axis dimensions of its local coordinate space, and is located in the plane whose y-coordinate is zero.
