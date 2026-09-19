> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/aimodelcache/policy/init(purgeconditions:)

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

> On tvOS any policy will be implicitly purgeable for storagePressure.
