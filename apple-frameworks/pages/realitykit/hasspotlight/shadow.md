> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/hasspotlight/shadow

# shadow

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

The shadow for the spotlight.

## Declaration

```swift
@MainActor @preconcurrency var shadow: SpotLightComponent.Shadow? { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to `nil` to remove shadows for the light. Set it to an instance of [SpotLightComponent.Shadow](../spotlightcomponent/shadow.md) to create shadows.
