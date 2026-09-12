> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/setpersistentdomain(_:forname:)](https://developer.apple.com/documentation/foundation/userdefaults/setpersistentdomain(_:forname:))

# setPersistentDomain(\_:forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the keys and values in the specified domain with the new keys and values you supply.

## Declaration

```swift
func setPersistentDomain(_ domain: [String : Any], forName domainName: String)
```

## Parameters

- `domain`: A dictionary of keys and values to assign to the domain.
- `domainName`: The name of the domain to update. If you specify the identifier for the argument or registration domain, this method throws an exception.

<a id="discussion"></a>

## Discussion

This method removes the existing keys from the specified domain and then adds the new keys you provide. After updating the keys, this method generates a [didChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Managing domain-specific values

- [persistentDomain(forName:)](persistentdomain%28forname_%29.md): Retrieves the settings from the specified persistent domain.
- [volatileDomain(forName:)](volatiledomain%28forname_%29.md): Retrieves the settings from the specified volatile domain.
- [setVolatileDomain(\_:forName:)](setvolatiledomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [removePersistentDomain(forName:)](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.
- [removeVolatileDomain(forName:)](removevolatiledomain%28forname_%29.md): Removes the keys and values from the specified volatile domain.

# setPersistentDomain:forName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the keys and values in the specified domain with the new keys and values you supply.

## Declaration

```objectivec
- (void) setPersistentDomain:(NSDictionary<NSString *,id> *) domain forName:(NSString *) domainName;
```

## Parameters

- `domain`: A dictionary of keys and values to assign to the domain.
- `domainName`: The name of the domain to update. If you specify the identifier for the argument or registration domain, this method throws an exception.

<a id="discussion"></a>

## Discussion

This method removes the existing keys from the specified domain and then adds the new keys you provide. After updating the keys, this method generates a [NSUserDefaultsDidChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Managing domain-specific values

- [persistentDomainForName:](persistentdomain%28forname_%29.md): Retrieves the settings from the specified persistent domain.
- [volatileDomainForName:](volatiledomain%28forname_%29.md): Retrieves the settings from the specified volatile domain.
- [setVolatileDomain:forName:](setvolatiledomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [removePersistentDomainForName:](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.
- [removeVolatileDomainForName:](removevolatiledomain%28forname_%29.md): Removes the keys and values from the specified volatile domain.
