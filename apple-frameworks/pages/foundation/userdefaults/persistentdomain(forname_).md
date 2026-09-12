> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/persistentdomain(forname:)](https://developer.apple.com/documentation/foundation/userdefaults/persistentdomain(forname:))

# persistentDomain(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the settings from the specified persistent domain.

## Declaration

```swift
func persistentDomain(forName domainName: String) -> [String : Any]?
```

## Parameters

- `domainName`: The name of the persistent domain. Specify your app’s bundle identifier to retrieve any app-specific keys. Specify the [globalDomain](globaldomain.md) identifier to retrieve keys in the global domain.

<a id="return-value"></a>

## Return Value

A dictionary containing the keys and values from the specified domain. If the domain doesn’t contain any keys, or is a volatile domain, the method returns `nil`.

<a id="discussion"></a>

## Discussion

This method retrieves only the keys and values from the specified domain. It doesn’t retrieve keys from other persistent or volatile domains.

## See Also

### Managing domain-specific values

- [setPersistentDomain(\_:forName:)](setpersistentdomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [volatileDomain(forName:)](volatiledomain%28forname_%29.md): Retrieves the settings from the specified volatile domain.
- [setVolatileDomain(\_:forName:)](setvolatiledomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [removePersistentDomain(forName:)](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.
- [removeVolatileDomain(forName:)](removevolatiledomain%28forname_%29.md): Removes the keys and values from the specified volatile domain.

# persistentDomainForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the settings from the specified persistent domain.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) persistentDomainForName:(NSString *) domainName;
```

## Parameters

- `domainName`: The name of the persistent domain. Specify your app’s bundle identifier to retrieve any app-specific keys. Specify the [NSGlobalDomain](globaldomain.md) identifier to retrieve keys in the global domain.

<a id="return-value"></a>

## Return Value

A dictionary containing the keys and values from the specified domain. If the domain doesn’t contain any keys, or is a volatile domain, the method returns `nil`.

<a id="discussion"></a>

## Discussion

This method retrieves only the keys and values from the specified domain. It doesn’t retrieve keys from other persistent or volatile domains.

## See Also

### Managing domain-specific values

- [setPersistentDomain:forName:](setpersistentdomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [volatileDomainForName:](volatiledomain%28forname_%29.md): Retrieves the settings from the specified volatile domain.
- [setVolatileDomain:forName:](setvolatiledomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [removePersistentDomainForName:](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.
- [removeVolatileDomainForName:](removevolatiledomain%28forname_%29.md): Removes the keys and values from the specified volatile domain.
