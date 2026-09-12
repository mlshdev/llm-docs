> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionentityresolution/entitypath(_:)](https://developer.apple.com/documentation/realitykit/actionentityresolution/entitypath(_:))

# ActionEntityResolution.entityPath(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An option that resolves an entity by specifying a bind path relative to the entity playing the action.

## Declaration

```swift
case entityPath(BindTarget.EntityPath)
```

<a id="discussion"></a>

## Discussion

Use this to resolve a `BindTarget.EntityPath` from the entity playing the action. The targeted entity will have the action applied to it.
