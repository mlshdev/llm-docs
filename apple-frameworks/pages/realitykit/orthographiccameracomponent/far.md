> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/orthographiccameracomponent/far

# far

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The maximum distance in meters from the camera that the camera can see.

## Declaration

```swift
var far: Float
```

<a id="discussion"></a>

## Discussion

The value defaults to `1000.0`. Use a value greater than the value of [near](near.md). The renderer clips any surface beyond the `far` point.

## See Also

### Setting focal points

- [near](near.md): The minimum distance in meters from the camera that the camera can see.
