> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/referencecomponent/init(named:at:loadingpolicy:)

# init(named:at:loadingPolicy:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a reference component with a name, loading policy, and bundle path.

## Declaration

```swift
init(named name: String, at bundlePath: String = "", loadingPolicy: ReferenceComponent.LoadingPolicy = .onDemand)
```

## Parameters

- `name`: The name of the entity to load.
- `bundlePath`: The bundle path to search for the resource. Specify the path relative to the Resources directory.
- `loadingPolicy`: A loading policy that indicates when the app loads the entity.
