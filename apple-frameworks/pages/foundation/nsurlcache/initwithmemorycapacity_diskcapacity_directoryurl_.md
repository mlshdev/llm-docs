> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcache/initwithmemorycapacity:diskcapacity:directoryurl:](https://developer.apple.com/documentation/foundation/nsurlcache/initwithmemorycapacity:diskcapacity:directoryurl:)

# initWithMemoryCapacity:diskCapacity:directoryURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a URL cache object with the specified memory and disk capacities, in the specified directory.

## Declaration

```objectivec
- (instancetype) initWithMemoryCapacity:(NSUInteger) memoryCapacity diskCapacity:(NSUInteger) diskCapacity directoryURL:(NSURL *) directoryURL;
```

## Parameters

- `memoryCapacity`: The memory capacity of the cache, in bytes.
- `diskCapacity`: The disk capacity of the cache, in bytes.
- `directoryURL`: The path to an on-disk directory at which to store the on-disk cache. If `directory` is `nil`, the cache uses a default directory.

<a id="Discussion"></a>

## Discussion

A disk cache measured in the tens of megabytes should be acceptable in most cases.

## See Also

### Creating a new cache object

- [initWithMemoryCapacity:diskCapacity:diskPath:](../urlcache/init%28memorycapacity_diskcapacity_diskpath_%29.md): Deprecated. Creates a URL cache object with the specified values.
