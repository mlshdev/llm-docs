> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/init(memorycapacity:diskcapacity:directory:)](https://developer.apple.com/documentation/foundation/urlcache/init(memorycapacity:diskcapacity:directory:))

# init(memoryCapacity:diskCapacity:directory:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a URL cache object with the specified memory and disk capacities, in the specified directory.

## Declaration

```swift
convenience init(memoryCapacity: Int, diskCapacity: Int, directory: URL? = nil)
```

## Parameters

- `memoryCapacity`: The memory capacity of the cache, in bytes.
- `diskCapacity`: The disk capacity of the cache, in bytes.
- `directory`: The path to an on-disk directory, where the system stores the on-disk cache. If `directory` is `nil`, the cache uses a default directory.

<a id="Discussion"></a>

## Discussion

A disk cache measured in the tens of megabytes is acceptable in most cases.

## See Also

### Creating a new cache object

- [init(memoryCapacity:diskCapacity:diskPath:)](init%28memorycapacity_diskcapacity_diskpath_%29.md): Deprecated. Creates a URL cache object with the specified values.
