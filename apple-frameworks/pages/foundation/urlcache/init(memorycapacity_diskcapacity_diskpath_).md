> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlcache/init(memorycapacity:diskcapacity:diskpath:)

# init(memoryCapacity:diskCapacity:diskPath:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.2+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Creates a URL cache object with the specified values.

## Declaration

```swift
init(memoryCapacity: Int, diskCapacity: Int, diskPath path: String?)
```

## Parameters

- `memoryCapacity`: The memory capacity of the cache, in bytes.
- `diskCapacity`: The disk capacity of the cache, in bytes.
- `path`: In macOS, `path` is the location at which to store the on-disk cache.

  In iOS, `path` is the name of a subdirectory of the application’s default cache directory in which to store the on-disk cache (the subdirectory is created if it does not exist).

<a id="return-value"></a>

## Return Value

The initialized cache object.

<a id="Discussion"></a>

## Discussion

The returned cache instance is backed by disk, so you have more leeway when choosing the capacity for this kind of cache. A disk cache measured in the tens of megabytes should be acceptable in most cases.

## See Also

### Related Documentation

- [shared](shared.md): The shared URL cache instance.

### Creating a new cache object

- [init(memoryCapacity:diskCapacity:directory:)](init%28memorycapacity_diskcapacity_directory_%29.md): Creates a URL cache object with the specified memory and disk capacities, in the specified directory.

# initWithMemoryCapacity:diskCapacity:diskPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.2+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Creates a URL cache object with the specified values.

## Declaration

```objectivec
- (instancetype) initWithMemoryCapacity:(NSUInteger) memoryCapacity diskCapacity:(NSUInteger) diskCapacity diskPath:(NSString *) path;
```

## Parameters

- `memoryCapacity`: The memory capacity of the cache, in bytes.
- `diskCapacity`: The disk capacity of the cache, in bytes.
- `path`: In macOS, `path` is the location at which to store the on-disk cache.

  In iOS, `path` is the name of a subdirectory of the application’s default cache directory in which to store the on-disk cache (the subdirectory is created if it does not exist).

<a id="return-value"></a>

## Return Value

The initialized cache object.

<a id="Discussion"></a>

## Discussion

The returned cache instance is backed by disk, so you have more leeway when choosing the capacity for this kind of cache. A disk cache measured in the tens of megabytes should be acceptable in most cases.

## See Also

### Related Documentation

- [sharedURLCache](shared.md): The shared URL cache instance.

### Creating a new cache object

- [initWithMemoryCapacity:diskCapacity:directoryURL:](../nsurlcache/initwithmemorycapacity_diskcapacity_directoryurl_.md): Creates a URL cache object with the specified memory and disk capacities, in the specified directory.
