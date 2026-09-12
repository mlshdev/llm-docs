> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/removevolatiledomain(forname:)](https://developer.apple.com/documentation/foundation/userdefaults/removevolatiledomain(forname:))

# removeVolatileDomain(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the keys and values from the specified volatile domain.

## Declaration

```swift
func removeVolatileDomain(forName domainName: String)
```

## Parameters

- `domainName`: The name of the domain to clear.

<a id="discussion"></a>

## Discussion

This method removes all of the keys and values from the specified domain. After clearing the domain’s contents, this method generates a [didChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Managing domain-specific values

- [persistentDomain(forName:)](persistentdomain%28forname_%29.md): Retrieves the settings from the specified persistent domain.
- [setPersistentDomain(\_:forName:)](setpersistentdomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [volatileDomain(forName:)](volatiledomain%28forname_%29.md): Retrieves the settings from the specified volatile domain.
- [setVolatileDomain(\_:forName:)](setvolatiledomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [removePersistentDomain(forName:)](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.

# removeVolatileDomainForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the keys and values from the specified volatile domain.

## Declaration

```objectivec
- (void) removeVolatileDomainForName:(NSString *) domainName;
```

## Parameters

- `domainName`: The name of the domain to clear.

<a id="discussion"></a>

## Discussion

This method removes all of the keys and values from the specified domain. After clearing the domain’s contents, this method generates a [NSUserDefaultsDidChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Managing domain-specific values

- [persistentDomainForName:](persistentdomain%28forname_%29.md): Retrieves the settings from the specified persistent domain.
- [setPersistentDomain:forName:](setpersistentdomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [volatileDomainForName:](volatiledomain%28forname_%29.md): Retrieves the settings from the specified volatile domain.
- [setVolatileDomain:forName:](setvolatiledomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [removePersistentDomainForName:](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.
