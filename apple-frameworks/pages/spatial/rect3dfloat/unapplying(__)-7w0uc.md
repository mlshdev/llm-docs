> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rect3dfloat/unapplying(_:)-7w0uc

# unapplying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the primitive that results from applying a pose to the primitive.

## Declaration

```swift
func unapplying(_ pose: Pose3DFloat) -> Rect3DFloat
```

## Parameters

- `pose`: The pose.

<a id="discussion"></a>

## Discussion

- Returns The transformed primitive.

> **Note**

> The pose’s rotation angle must be zero, otherwise this function returns `self`.
