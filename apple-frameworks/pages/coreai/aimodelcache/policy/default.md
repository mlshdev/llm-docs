> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/policy/default](https://developer.apple.com/documentation/coreai/aimodelcache/policy/default)

# default

**Framework:** Core AI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A policy that marks specialized assets as purgeable.

## Declaration

```swift
static let `default`: AIModelCache.Policy
```

<a id="discussion"></a>

## Discussion

The default policy marks a specialized asset as purgeable. The system can delete it when low on storage or when its source `.aimodel` changes or you delete it.

## See Also

### Using preset policies

- [persistent](persistent.md): A policy that prevents automatic purging of specialized assets.
