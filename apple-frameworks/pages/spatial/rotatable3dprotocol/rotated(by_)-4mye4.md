> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rotatable3dprotocol/rotated(by:)-4mye4

# rotated(by:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the entity rotated by the specified quaternion around the origin.

## Declaration

```swift
func rotated(by quaternion: Self.Quaternion) -> Self
```

## Parameters

- `quaternion`: The quaternion that defines the rotation.

<a id="discussion"></a>

## Discussion

- Returns The rotated primitive.
