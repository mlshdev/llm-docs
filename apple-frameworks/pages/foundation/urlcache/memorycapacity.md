> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/memorycapacity](https://developer.apple.com/documentation/foundation/urlcache/memorycapacity)

# memoryCapacity (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The capacity of the in-memory cache, in bytes.

## Declaration

```swift
var memoryCapacity: Int { get set }
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

At the time this property is set, the in-memory cache will truncate its contents to the size given, if necessary.

## See Also

### Getting and setting in-memory cache properties

- [currentMemoryUsage](currentmemoryusage.md): The current size of the in-memory cache, in bytes.

# memoryCapacity (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The capacity of the in-memory cache, in bytes.

## Declaration

```objectivec
@property NSUInteger memoryCapacity;
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

At the time this property is set, the in-memory cache will truncate its contents to the size given, if necessary.

## See Also

### Getting and setting in-memory cache properties

- [currentMemoryUsage](currentmemoryusage.md): The current size of the in-memory cache, in bytes.
