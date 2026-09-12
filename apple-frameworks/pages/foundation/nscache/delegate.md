> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscache/delegate](https://developer.apple.com/documentation/foundation/nscache/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cache’s delegate.

## Declaration

```swift
unowned(unsafe) var delegate: (any NSCacheDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [NSCacheDelegate](../nscachedelegate.md) protocol.

## See Also

### Managing the Delegate

- [NSCacheDelegate](../nscachedelegate.md): The delegate of an [NSCache](../nscache.md) object implements this protocol to perform specialized actions when an object is about to be evicted or removed from the cache.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cache’s delegate.

## Declaration

```objectivec
@property (assign, nullable) id<NSCacheDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [NSCacheDelegate](../nscachedelegate.md) protocol.

## See Also

### Managing the Delegate

- [NSCacheDelegate](../nscachedelegate.md): The delegate of an [NSCache](../nscache.md) object implements this protocol to perform specialized actions when an object is about to be evicted or removed from the cache.
