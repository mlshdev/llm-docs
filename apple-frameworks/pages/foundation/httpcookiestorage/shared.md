> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/shared](https://developer.apple.com/documentation/foundation/httpcookiestorage/shared)

# shared (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The shared cookie storage instance.

## Declaration

```swift
class var shared: HTTPCookieStorage { get }
```

## See Also

### Getting the shared cookie storage object

- [sharedCookieStorage(forGroupContainerIdentifier:)](sharedcookiestorage%28forgroupcontaineridentifier_%29.md): Returns the cookie storage instance for the container associated with the specified app group identifier.

# sharedHTTPCookieStorage (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The shared cookie storage instance.

## Declaration

```objectivec
@property (class, strong, readonly) NSHTTPCookieStorage * sharedHTTPCookieStorage;
```

## See Also

### Getting the shared cookie storage object

- [sharedCookieStorageForGroupContainerIdentifier:](sharedcookiestorage%28forgroupcontaineridentifier_%29.md): Returns the cookie storage instance for the container associated with the specified app group identifier.
