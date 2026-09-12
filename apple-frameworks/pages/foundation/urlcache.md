> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcache](https://developer.apple.com/documentation/foundation/urlcache)

# URLCache (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that maps URL requests to cached response objects.

## Declaration

```swift
class URLCache
```

## Mentioned In

- [Accessing cached data](accessing-cached-data.md)

<a id="overview"></a>

## Overview

The [URLCache](urlcache.md) class implements the caching of responses to URL load requests, by mapping [NSURLRequest](nsurlrequest.md) objects to [CachedURLResponse](cachedurlresponse.md) objects. It provides a composite in-memory and on-disk cache, and lets you manipulate the sizes of both the in-memory and on-disk portions. You can also control the path where cache data is persistently stored.

> **Note**

>  In iOS, the on-disk cache may be purged when the system runs low on disk space, but only when your app is not running.

<a id="Thread-safety"></a>

### Thread safety

In iOS 8 and later, and macOS 10.10 and later, [URLCache](urlcache.md) is thread safe.

Although [URLCache](urlcache.md) instance methods can safely be called from multiple execution contexts at the same time, be aware that methods like  [cachedResponse(for:)](urlcache/cachedresponse%28for_%29.md) and [storeCachedResponse(\_:for:)](urlcache/storecachedresponse%28__for_%29-7p7bl.md) have an unavoidable race condition when attempting to read or write responses for the same request.

Subclasses of [URLCache](urlcache.md) must implement overridden methods in such a thread-safe manner.

<a id="Subclassing-notes"></a>

### Subclassing notes

The [URLCache](urlcache.md) class is meant to be used as-is, but you can subclass it when you have specific needs. For example, you might want to screen which responses are cached, or reimplement the storage mechanism for security or other reasons.

When overriding methods of this class, be aware that methods that take a `task` parameter are preferred by the system to those that do not. Therefore, you should override the task-based methods when subclassing, as follows:

- Storing responses in the cache — Override the task-based [storeCachedResponse(\_:for:)](urlcache/storecachedresponse%28__for_%29-8uq91.md), instead of or in addition to the request-based [storeCachedResponse(\_:for:)](urlcache/storecachedresponse%28__for_%29-7p7bl.md).
- Getting responses from the cache — Override [getCachedResponse(for:completionHandler:)](urlcache/getcachedresponse%28for_completionhandler_%29.md), instead of or in addition to [cachedResponse(for:)](urlcache/cachedresponse%28for_%29.md).
- Removing cached responses — Override the task-based [removeCachedResponse(for:)](urlcache/removecachedresponse%28for_%29-1zwp6.md), instead of or in addition to the request-based [removeCachedResponse(for:)](urlcache/removecachedresponse%28for_%29-1dh89.md).

## Topics

### Getting and setting shared cache

- [shared](urlcache/shared.md): The shared URL cache instance.

### Creating a new cache object

- [init(memoryCapacity:diskCapacity:directory:)](urlcache/init%28memorycapacity_diskcapacity_directory_%29.md): Creates a URL cache object with the specified memory and disk capacities, in the specified directory.
- [init(memoryCapacity:diskCapacity:diskPath:)](urlcache/init%28memorycapacity_diskcapacity_diskpath_%29.md): Deprecated. Creates a URL cache object with the specified values.

### Getting and storing cached objects

- [cachedResponse(for:)](urlcache/cachedresponse%28for_%29.md): Returns the cached URL response in the cache for the specified URL request.
- [storeCachedResponse(\_:for:)](urlcache/storecachedresponse%28__for_%29-7p7bl.md): Stores a cached URL response for a specified request.
- [getCachedResponse(for:completionHandler:)](urlcache/getcachedresponse%28for_completionhandler_%29.md): Gets the cached URL response for a data task, passing it to the provided completion handler.
- [storeCachedResponse(\_:for:)](urlcache/storecachedresponse%28__for_%29-8uq91.md): Stores a cached URL response for a specified data task.

### Removing cached objects

- [removeCachedResponse(for:)](urlcache/removecachedresponse%28for_%29-1dh89.md): Removes the cached URL response for a specified URL request.
- [removeCachedResponse(for:)](urlcache/removecachedresponse%28for_%29-1zwp6.md): Removes the cached URL response for a specified data task.
- [removeCachedResponses(since:)](urlcache/removecachedresponses%28since_%29.md): Clears the given cache of any cached responses since the provided date.
- [removeAllCachedResponses()](urlcache/removeallcachedresponses%28%29.md): Clears the receiver’s cache, removing all stored cached URL responses.

### Getting and setting on-disk cache properties

- [currentDiskUsage](urlcache/currentdiskusage.md): The current size of the on-disk cache, in bytes.
- [diskCapacity](urlcache/diskcapacity.md): The capacity of the on-disk cache, in bytes.

### Getting and setting in-memory cache properties

- [currentMemoryUsage](urlcache/currentmemoryusage.md): The current size of the in-memory cache, in bytes.
- [memoryCapacity](urlcache/memorycapacity.md): The capacity of the in-memory cache, in bytes.

### Cache storage policies

- [URLCache.StoragePolicy](urlcache/storagepolicy.md): These constants specify the caching strategy used by an [CachedURLResponse](cachedurlresponse.md) object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cache behavior

- [Accessing cached data](accessing-cached-data.md): Control how URL requests make use of previously cached data.
- [CachedURLResponse](cachedurlresponse.md): A cached response to a URL request.

# NSURLCache (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that maps URL requests to cached response objects.

## Declaration

```objectivec
@interface NSURLCache : NSObject
```

## Mentioned In

- [Accessing cached data](accessing-cached-data.md)

<a id="overview"></a>

## Overview

The [NSURLCache](urlcache.md) class implements the caching of responses to URL load requests, by mapping [NSURLRequest](nsurlrequest.md) objects to [NSCachedURLResponse](cachedurlresponse.md) objects. It provides a composite in-memory and on-disk cache, and lets you manipulate the sizes of both the in-memory and on-disk portions. You can also control the path where cache data is persistently stored.

> **Note**

>  In iOS, the on-disk cache may be purged when the system runs low on disk space, but only when your app is not running.

<a id="Thread-safety"></a>

### Thread safety

In iOS 8 and later, and macOS 10.10 and later, [NSURLCache](urlcache.md) is thread safe.

Although [NSURLCache](urlcache.md) instance methods can safely be called from multiple execution contexts at the same time, be aware that methods like  [cachedResponseForRequest:](urlcache/cachedresponse%28for_%29.md) and [storeCachedResponse:forRequest:](urlcache/storecachedresponse%28__for_%29-7p7bl.md) have an unavoidable race condition when attempting to read or write responses for the same request.

Subclasses of [NSURLCache](urlcache.md) must implement overridden methods in such a thread-safe manner.

<a id="Subclassing-notes"></a>

### Subclassing notes

The [NSURLCache](urlcache.md) class is meant to be used as-is, but you can subclass it when you have specific needs. For example, you might want to screen which responses are cached, or reimplement the storage mechanism for security or other reasons.

When overriding methods of this class, be aware that methods that take a `task` parameter are preferred by the system to those that do not. Therefore, you should override the task-based methods when subclassing, as follows:

- Storing responses in the cache — Override the task-based [storeCachedResponse:forDataTask:](urlcache/storecachedresponse%28__for_%29-8uq91.md), instead of or in addition to the request-based [storeCachedResponse:forRequest:](urlcache/storecachedresponse%28__for_%29-7p7bl.md).
- Getting responses from the cache — Override [getCachedResponseForDataTask:completionHandler:](urlcache/getcachedresponse%28for_completionhandler_%29.md), instead of or in addition to [cachedResponseForRequest:](urlcache/cachedresponse%28for_%29.md).
- Removing cached responses — Override the task-based [removeCachedResponseForDataTask:](urlcache/removecachedresponse%28for_%29-1zwp6.md), instead of or in addition to the request-based [removeCachedResponseForRequest:](urlcache/removecachedresponse%28for_%29-1dh89.md).

## Topics

### Getting and setting shared cache

- [sharedURLCache](urlcache/shared.md): The shared URL cache instance.

### Creating a new cache object

- [initWithMemoryCapacity:diskCapacity:directoryURL:](nsurlcache/initwithmemorycapacity_diskcapacity_directoryurl_.md): Creates a URL cache object with the specified memory and disk capacities, in the specified directory.
- [initWithMemoryCapacity:diskCapacity:diskPath:](urlcache/init%28memorycapacity_diskcapacity_diskpath_%29.md): Deprecated. Creates a URL cache object with the specified values.

### Getting and storing cached objects

- [cachedResponseForRequest:](urlcache/cachedresponse%28for_%29.md): Returns the cached URL response in the cache for the specified URL request.
- [storeCachedResponse:forRequest:](urlcache/storecachedresponse%28__for_%29-7p7bl.md): Stores a cached URL response for a specified request.
- [getCachedResponseForDataTask:completionHandler:](urlcache/getcachedresponse%28for_completionhandler_%29.md): Gets the cached URL response for a data task, passing it to the provided completion handler.
- [storeCachedResponse:forDataTask:](urlcache/storecachedresponse%28__for_%29-8uq91.md): Stores a cached URL response for a specified data task.

### Removing cached objects

- [removeCachedResponseForRequest:](urlcache/removecachedresponse%28for_%29-1dh89.md): Removes the cached URL response for a specified URL request.
- [removeCachedResponseForDataTask:](urlcache/removecachedresponse%28for_%29-1zwp6.md): Removes the cached URL response for a specified data task.
- [removeCachedResponsesSinceDate:](urlcache/removecachedresponses%28since_%29.md): Clears the given cache of any cached responses since the provided date.
- [removeAllCachedResponses](urlcache/removeallcachedresponses%28%29.md): Clears the receiver’s cache, removing all stored cached URL responses.

### Getting and setting on-disk cache properties

- [currentDiskUsage](urlcache/currentdiskusage.md): The current size of the on-disk cache, in bytes.
- [diskCapacity](urlcache/diskcapacity.md): The capacity of the on-disk cache, in bytes.

### Getting and setting in-memory cache properties

- [currentMemoryUsage](urlcache/currentmemoryusage.md): The current size of the in-memory cache, in bytes.
- [memoryCapacity](urlcache/memorycapacity.md): The capacity of the in-memory cache, in bytes.

### Cache storage policies

- [NSURLCacheStoragePolicy](urlcache/storagepolicy.md): These constants specify the caching strategy used by an [NSCachedURLResponse](cachedurlresponse.md) object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Cache behavior

- [Accessing cached data](accessing-cached-data.md): Control how URL requests make use of previously cached data.
- [NSCachedURLResponse](cachedurlresponse.md): A cached response to a URL request.
