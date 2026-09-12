> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscache/countlimit](https://developer.apple.com/documentation/foundation/nscache/countlimit)

# countLimit (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of objects the cache should hold.

## Declaration

```swift
var countLimit: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If `0`, there is no count limit. The default value is `0`.

This is not a strict limit—if the cache goes over the limit, an object in the cache could be evicted instantly, later, or possibly never, depending on the implementation details of the cache.

## See Also

### Managing Cache Size

- [totalCostLimit](totalcostlimit.md): The maximum total cost that the cache can hold before it starts evicting objects.

# countLimit (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of objects the cache should hold.

## Declaration

```objectivec
@property NSUInteger countLimit;
```

<a id="Discussion"></a>

## Discussion

If `0`, there is no count limit. The default value is `0`.

This is not a strict limit—if the cache goes over the limit, an object in the cache could be evicted instantly, later, or possibly never, depending on the implementation details of the cache.

## See Also

### Managing Cache Size

- [totalCostLimit](totalcostlimit.md): The maximum total cost that the cache can hold before it starts evicting objects.
