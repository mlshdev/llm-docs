> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/policy/init(purgeconditions:)](https://developer.apple.com/documentation/coreai/aimodelcache/policy/init(purgeconditions:))

# init(purgeConditions:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a policy with the specified purge conditions.

## Declaration

```swift
init(purgeConditions: AIModelCache.Policy.PurgeConditions)
```

## Parameters

- `purgeConditions`: The set of conditions under which the system can purge specialized assets.

<a id="discussion"></a>

## Discussion

> **Note**

> On tvOS this policy will be made purgeable for storagePressure.
