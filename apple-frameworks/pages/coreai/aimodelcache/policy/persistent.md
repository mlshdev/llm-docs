> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/policy/persistent](https://developer.apple.com/documentation/coreai/aimodelcache/policy/persistent)

# persistent

**Framework:** Core AI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A policy that prevents automatic purging of specialized assets.

## Declaration

```swift
static let persistent: AIModelCache.Policy
```

<a id="discussion"></a>

## Discussion

This policy ensures the system does not purge specialized assets until the next OS update. You can manually delete them, but the system does *not* automatically purge them under low storage or when the source `.aimodel` changes.

## See Also

### Using preset policies

- [default](default.md): A policy that marks specialized assets as purgeable.
