> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/sharedcookiestorage(forgroupcontaineridentifier:)](https://developer.apple.com/documentation/foundation/httpcookiestorage/sharedcookiestorage(forgroupcontaineridentifier:))

# sharedCookieStorage(forGroupContainerIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the cookie storage instance for the container associated with the specified app group identifier.

## Declaration

```swift
class func sharedCookieStorage(forGroupContainerIdentifier identifier: String) -> HTTPCookieStorage
```

## Parameters

- `identifier`: The app group identifier.

<a id="Discussion"></a>

## Discussion

By default, apps and associated app extensions will have different data containers. As a result, the value of the [HTTPCookieStorage](../httpcookiestorage.md) class’s [shared](shared.md) property will refer to different persistent cookie stores when called by the app and by its extensions.You can use this method to create a persistent cookie storage available to all apps and extensions with access to the same app group.

Subsequent calls to the this method with the same identifier will return the same storage instance.

## See Also

### Getting the shared cookie storage object

- [shared](shared.md): The shared cookie storage instance.

# sharedCookieStorageForGroupContainerIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the cookie storage instance for the container associated with the specified app group identifier.

## Declaration

```objectivec
+ (NSHTTPCookieStorage *) sharedCookieStorageForGroupContainerIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The app group identifier.

<a id="Discussion"></a>

## Discussion

By default, apps and associated app extensions will have different data containers. As a result, the value of the [NSHTTPCookieStorage](../httpcookiestorage.md) class’s [sharedHTTPCookieStorage](shared.md) property will refer to different persistent cookie stores when called by the app and by its extensions.You can use this method to create a persistent cookie storage available to all apps and extensions with access to the same app group.

Subsequent calls to the this method with the same identifier will return the same storage instance.

## See Also

### Getting the shared cookie storage object

- [sharedHTTPCookieStorage](shared.md): The shared cookie storage instance.
