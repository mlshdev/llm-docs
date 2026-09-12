> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/dynamiclightshadowcomponent/init(castsshadow:)](https://developer.apple.com/documentation/realitykit/dynamiclightshadowcomponent/init(castsshadow:))

# init(castsShadow:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a dynamic light shadow component.

## Declaration

```swift
init(castsShadow: Bool)
```

## Parameters

- `castsShadow`: A Boolean value that indicates whether an entity with the component casts a shadow.

<a id="discussion"></a>

## Discussion

By default, the component makes an entity to stop casting shadows from dynamic lights.
