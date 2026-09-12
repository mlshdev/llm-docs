> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/cachedurlresponse](https://developer.apple.com/documentation/foundation/cachedurlresponse)

# CachedURLResponse (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A cached response to a URL request.

## Declaration

```swift
class CachedURLResponse
```

## Mentioned In

- [Accessing cached data](accessing-cached-data.md)

<a id="overview"></a>

## Overview

A [CachedURLResponse](cachedurlresponse.md) object provides the server’s response metadata in the form of a [URLResponse](urlresponse.md) object, along with an [NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) object containing the actual cached content data. Its storage policy determines whether the response should be cached on disk, in memory, or not at all.

Cached responses also contain a user info dictionary where you can store app-specific information about the cached item.

The [URLCache](urlcache.md) class stores and retrieves instances of [CachedURLResponse](cachedurlresponse.md).

## Topics

### Creating a cached URL response

- [init(response:data:)](cachedurlresponse/init%28response_data_%29.md): Creates a cached URL response instance.
- [init(response:data:userInfo:storagePolicy:)](cachedurlresponse/init%28response_data_userinfo_storagepolicy_%29.md): Creates a cached URL response with a given server response, data, user-info dictionary, and storage policy.

### Getting cached URL response properties

- [data](cachedurlresponse/data.md): The cached response’s data.
- [response](cachedurlresponse/response.md): The URL response object associated with the instance.
- [storagePolicy](cachedurlresponse/storagepolicy.md): The cached response’s storage policy.
- [userInfo](cachedurlresponse/userinfo.md): The cached response’s user info dictionary.

### Setting cache storage policies

- [URLCache.StoragePolicy](urlcache/storagepolicy.md): These constants specify the caching strategy used by an [CachedURLResponse](cachedurlresponse.md) object.

### Initializers

- [init(coder:)](cachedurlresponse/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cache behavior

- [Accessing cached data](accessing-cached-data.md): Control how URL requests make use of previously cached data.
- [URLCache](urlcache.md): An object that maps URL requests to cached response objects.

# NSCachedURLResponse (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A cached response to a URL request.

## Declaration

```objectivec
@interface NSCachedURLResponse : NSObject
```

## Mentioned In

- [Accessing cached data](accessing-cached-data.md)

<a id="overview"></a>

## Overview

A [NSCachedURLResponse](cachedurlresponse.md) object provides the server’s response metadata in the form of a [NSURLResponse](urlresponse.md) object, along with an [NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) object containing the actual cached content data. Its storage policy determines whether the response should be cached on disk, in memory, or not at all.

Cached responses also contain a user info dictionary where you can store app-specific information about the cached item.

The [NSURLCache](urlcache.md) class stores and retrieves instances of [NSCachedURLResponse](cachedurlresponse.md).

## Topics

### Creating a cached URL response

- [initWithResponse:data:](cachedurlresponse/init%28response_data_%29.md): Creates a cached URL response instance.
- [initWithResponse:data:userInfo:storagePolicy:](cachedurlresponse/init%28response_data_userinfo_storagepolicy_%29.md): Creates a cached URL response with a given server response, data, user-info dictionary, and storage policy.

### Getting cached URL response properties

- [data](cachedurlresponse/data.md): The cached response’s data.
- [response](cachedurlresponse/response.md): The URL response object associated with the instance.
- [storagePolicy](cachedurlresponse/storagepolicy.md): The cached response’s storage policy.
- [userInfo](cachedurlresponse/userinfo.md): The cached response’s user info dictionary.

### Setting cache storage policies

- [NSURLCacheStoragePolicy](urlcache/storagepolicy.md): These constants specify the caching strategy used by an [NSCachedURLResponse](cachedurlresponse.md) object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Cache behavior

- [Accessing cached data](accessing-cached-data.md): Control how URL requests make use of previously cached data.
- [NSURLCache](urlcache.md): An object that maps URL requests to cached response objects.
