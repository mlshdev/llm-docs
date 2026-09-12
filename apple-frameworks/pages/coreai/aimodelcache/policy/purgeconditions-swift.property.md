> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/policy/purgeconditions-swift.property](https://developer.apple.com/documentation/coreai/aimodelcache/policy/purgeconditions-swift.property)

# purgeConditions

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The conditions under which the system may purge specialized assets.

## Declaration

```swift
var purgeConditions: AIModelCache.Policy.PurgeConditions
```

<a id="discussion"></a>

## Discussion

> **Note**

> The system always purges assets on OS update regardless of this value.
