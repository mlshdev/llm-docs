> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache/shared](https://developer.apple.com/documentation/foundation/urlcache/shared)

# shared (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The shared URL cache instance.

## Declaration

```swift
class var shared: URLCache { get set }
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

If your app doesn’t have special caching requirements or constraints, the default shared cache instance should be acceptable. Alternatively, you can create a custom [URLCache](../urlcache.md) object and set it as the shared cache instance (use `+[NSURLCache setSharedURLCache]` in Objective-C). You should do so before making any calls to this method.

## See Also

### Related Documentation

- [Accessing cached data](../accessing-cached-data.md): Control how URL requests make use of previously cached data.

# sharedURLCache (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The shared URL cache instance.

## Declaration

```objectivec
@property (class, strong) NSURLCache * sharedURLCache;
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

If your app doesn’t have special caching requirements or constraints, the default shared cache instance should be acceptable. Alternatively, you can create a custom [NSURLCache](../urlcache.md) object and set it as the shared cache instance (use `+[NSURLCache setSharedURLCache]` in Objective-C). You should do so before making any calls to this method.

## See Also

### Related Documentation

- [Accessing cached data](../accessing-cached-data.md): Control how URL requests make use of previously cached data.
