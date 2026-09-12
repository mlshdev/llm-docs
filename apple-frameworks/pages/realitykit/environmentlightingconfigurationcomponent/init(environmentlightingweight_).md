> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentlightingconfigurationcomponent/init(environmentlightingweight:)](https://developer.apple.com/documentation/realitykit/environmentlightingconfigurationcomponent/init(environmentlightingweight:))

# init(environmentLightingWeight:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates an environment-lighting configuration component.

## Declaration

```swift
init(environmentLightingWeight: Float = 1.0)
```

## Parameters

- `environmentLightingWeight`: A floating-point value in the range `[0.0, 1.0]`, where `0.0` indicates no environment-lighting contribution and `1.0` indicates full environment-lighting contribution.
