> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscachedelegate](https://developer.apple.com/documentation/foundation/nscachedelegate)

# NSCacheDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate of an [NSCache](nscache.md) object implements this protocol to perform specialized actions when an object is about to be evicted or removed from the cache.

## Declaration

```swift
protocol NSCacheDelegate : NSObjectProtocol
```

## Topics

### Responding to Object Eviction

- [cache(\_:willEvictObject:)](nscachedelegate/cache%28__willevictobject_%29.md): Called when an object is about to be evicted or removed from the cache.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the Delegate

- [delegate](nscache/delegate.md): The cache’s delegate.

# NSCacheDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate of an [NSCache](nscache.md) object implements this protocol to perform specialized actions when an object is about to be evicted or removed from the cache.

## Declaration

```objectivec
@protocol NSCacheDelegate <NSObject>
```

## Topics

### Responding to Object Eviction

- [cache:willEvictObject:](nscachedelegate/cache%28__willevictobject_%29.md): Called when an object is about to be evicted or removed from the cache.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the Delegate

- [delegate](nscache/delegate.md): The cache’s delegate.
