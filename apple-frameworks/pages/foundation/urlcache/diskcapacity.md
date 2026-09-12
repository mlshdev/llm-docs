> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/diskcapacity](https://developer.apple.com/documentation/foundation/urlcache/diskcapacity)

# diskCapacity (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The capacity of the on-disk cache, in bytes.

## Declaration

```swift
var diskCapacity: Int { get set }
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

When set, the on-disk cache will truncate its contents to the given size, if necessary.

## See Also

### Getting and setting on-disk cache properties

- [currentDiskUsage](currentdiskusage.md): The current size of the on-disk cache, in bytes.

# diskCapacity (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The capacity of the on-disk cache, in bytes.

## Declaration

```objectivec
@property NSUInteger diskCapacity;
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

When set, the on-disk cache will truncate its contents to the given size, if necessary.

## See Also

### Getting and setting on-disk cache properties

- [currentDiskUsage](currentdiskusage.md): The current size of the on-disk cache, in bytes.
