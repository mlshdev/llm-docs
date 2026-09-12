> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/setvolatiledomain(_:forname:)](https://developer.apple.com/documentation/foundation/userdefaults/setvolatiledomain(_:forname:))

# setVolatileDomain(\_:forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the keys and values in the specified domain with the new keys and values you supply.

## Declaration

```swift
func setVolatileDomain(_ domain: [String : Any], forName domainName: String)
```

## Parameters

- `domain`: A dictionary of keys and values to assign to the domain.
- `domainName`: The name of the domain to update.

<a id="discussion"></a>

## Discussion

This method removes the existing keys from the specified domain and then adds the new keys you provide. After updating the keys, this method generates a [didChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Managing domain-specific values

- [persistentDomain(forName:)](persistentdomain%28forname_%29.md): Retrieves the settings from the specified persistent domain.
- [setPersistentDomain(\_:forName:)](setpersistentdomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [volatileDomain(forName:)](volatiledomain%28forname_%29.md): Retrieves the settings from the specified volatile domain.
- [removePersistentDomain(forName:)](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.
- [removeVolatileDomain(forName:)](removevolatiledomain%28forname_%29.md): Removes the keys and values from the specified volatile domain.

# setVolatileDomain:forName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the keys and values in the specified domain with the new keys and values you supply.

## Declaration

```objectivec
- (void) setVolatileDomain:(NSDictionary<NSString *,id> *) domain forName:(NSString *) domainName;
```

## Parameters

- `domain`: A dictionary of keys and values to assign to the domain.
- `domainName`: The name of the domain to update.

<a id="discussion"></a>

## Discussion

This method removes the existing keys from the specified domain and then adds the new keys you provide. After updating the keys, this method generates a [NSUserDefaultsDidChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Managing domain-specific values

- [persistentDomainForName:](persistentdomain%28forname_%29.md): Retrieves the settings from the specified persistent domain.
- [setPersistentDomain:forName:](setpersistentdomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [volatileDomainForName:](volatiledomain%28forname_%29.md): Retrieves the settings from the specified volatile domain.
- [removePersistentDomainForName:](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.
- [removeVolatileDomainForName:](removevolatiledomain%28forname_%29.md): Removes the keys and values from the specified volatile domain.
