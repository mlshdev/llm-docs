> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/volatiledomain(forname:)](https://developer.apple.com/documentation/foundation/userdefaults/volatiledomain(forname:))

# volatileDomain(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the settings from the specified volatile domain.

## Declaration

```swift
func volatileDomain(forName domainName: String) -> [String : Any]
```

## Parameters

- `domainName`: The name of the volatile domain. For example, specify the [argumentDomain](argumentdomain.md) identifier to retrieve the command-line settings.

<a id="return-value"></a>

## Return Value

A dictionary containing the keys and values from the specified domain. If the domain doesn’t contain any keys, or is a persistent domain, this method returns `nil`.

<a id="discussion"></a>

## Discussion

This method retrieves only the keys and values from the specified domain. It doesn’t retrieve keys from other persistent or volatile domains.

## See Also

### Managing domain-specific values

- [persistentDomain(forName:)](persistentdomain%28forname_%29.md): Retrieves the settings from the specified persistent domain.
- [setPersistentDomain(\_:forName:)](setpersistentdomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [setVolatileDomain(\_:forName:)](setvolatiledomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [removePersistentDomain(forName:)](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.
- [removeVolatileDomain(forName:)](removevolatiledomain%28forname_%29.md): Removes the keys and values from the specified volatile domain.

# volatileDomainForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the settings from the specified volatile domain.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) volatileDomainForName:(NSString *) domainName;
```

## Parameters

- `domainName`: The name of the volatile domain. For example, specify the [NSArgumentDomain](argumentdomain.md) identifier to retrieve the command-line settings.

<a id="return-value"></a>

## Return Value

A dictionary containing the keys and values from the specified domain. If the domain doesn’t contain any keys, or is a persistent domain, this method returns `nil`.

<a id="discussion"></a>

## Discussion

This method retrieves only the keys and values from the specified domain. It doesn’t retrieve keys from other persistent or volatile domains.

## See Also

### Managing domain-specific values

- [persistentDomainForName:](persistentdomain%28forname_%29.md): Retrieves the settings from the specified persistent domain.
- [setPersistentDomain:forName:](setpersistentdomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [setVolatileDomain:forName:](setvolatiledomain%28__forname_%29.md): Replaces the keys and values in the specified domain with the new keys and values you supply.
- [removePersistentDomainForName:](removepersistentdomain%28forname_%29.md): Removes the keys and values from the specified persistent domain.
- [removeVolatileDomainForName:](removevolatiledomain%28forname_%29.md): Removes the keys and values from the specified volatile domain.
