> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/referencecomponent/init(named:loadingpolicy:)](https://developer.apple.com/documentation/realitykit/referencecomponent/init(named:loadingpolicy:))

# init(named:loadingPolicy:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a reference component with a name and loading policy.

## Declaration

```swift
init(named name: String, loadingPolicy: ReferenceComponent.LoadingPolicy = .onDemand)
```

## Parameters

- `name`: The name of the entity to load.
- `loadingPolicy`: A loading policy indicating when the app loads the entity.

<a id="discussion"></a>

## Discussion

Place references in the app’s main bundle.
