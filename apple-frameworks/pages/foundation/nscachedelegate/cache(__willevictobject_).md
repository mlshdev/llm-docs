> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscachedelegate/cache(_:willevictobject:)](https://developer.apple.com/documentation/foundation/nscachedelegate/cache(_:willevictobject:))

# cache(\_:willEvictObject:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Called when an object is about to be evicted or removed from the cache.

## Declaration

```swift
optional func cache(_ cache: NSCache<AnyObject, AnyObject>, willEvictObject obj: Any)
```

## Parameters

- `cache`: The cache with which the object of interest is associated.
- `obj`: The object of interest in the cache.

<a id="Discussion"></a>

## Discussion

It is not possible to modify `cache` from within the implementation of this delegate method.

# cache:willEvictObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Called when an object is about to be evicted or removed from the cache.

## Declaration

```objectivec
- (void) cache:(NSCache *) cache willEvictObject:(id) obj;
```

## Parameters

- `cache`: The cache with which the object of interest is associated.
- `obj`: The object of interest in the cache.

<a id="Discussion"></a>

## Discussion

It is not possible to modify `cache` from within the implementation of this delegate method.
