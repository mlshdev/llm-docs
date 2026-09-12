> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/cachedurlresponse/userinfo](https://developer.apple.com/documentation/foundation/cachedurlresponse/userinfo)

# userInfo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cached response’s user info dictionary.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get }
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

This value is `nil` if there is no user info dictionary.

## See Also

### Getting cached URL response properties

- [data](data.md): The cached response’s data.
- [response](response.md): The URL response object associated with the instance.
- [storagePolicy](storagepolicy.md): The cached response’s storage policy.

# userInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cached response’s user info dictionary.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary * userInfo;
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

This value is `nil` if there is no user info dictionary.

## See Also

### Getting cached URL response properties

- [data](data.md): The cached response’s data.
- [response](response.md): The URL response object associated with the instance.
- [storagePolicy](storagepolicy.md): The cached response’s storage policy.
