> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/init(appgroup:)](https://developer.apple.com/documentation/coreai/aimodelcache/init(appgroup:))

# init(appGroup:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a cache that shares specialized assets across an app group.

## Declaration

```swift
init?(appGroup groupIdentifier: String)
```

## Parameters

- `groupIdentifier`: A string that names the group whose shared cache you want to obtain. This input should exactly match one of the strings in the app’s App Groups Entitlement.

<a id="return-value"></a>

## Return Value

The shared app group cache, or `nil` when the group identifier is invalid (on iOS), the app group container cannot be accessed, or entitlement checks fail.

## Mentioned In

- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="discussion"></a>

## Discussion

Use this initializer when multiple apps within an app group need to share a cache for their specialized assets. This allows all apps within an app group to avoid each performing their own specialization for a shared model.
