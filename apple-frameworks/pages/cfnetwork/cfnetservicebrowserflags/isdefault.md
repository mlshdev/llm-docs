> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicebrowserflags/isdefault](https://developer.apple.com/documentation/cfnetwork/cfnetservicebrowserflags/isdefault)

# isDefault (Swift)

**Framework:** CFNetwork  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Specifies whether the resulting domain is the default registration or browse domain.

## Declaration

```swift
static var isDefault: CFNetServiceBrowserFlags { get }
```

<a id="Discussion"></a>

## Discussion

If set, the resulting domain is the default registration or browse domain, depending on the context. For this version of the CFNetServices API, the default registration domain is the local domain.

> **Note**

>  In previous versions of this API, this constant was `kCFNetServiceFlagIsRegistrationDomain`, which is retained for backward compatibility.

## See Also

### Type Properties

- [isDomain](isdomain.md): Specifies whether the result pertains to a search for domains or services.
- [isRegistrationDomain](isregistrationdomain.md): Deprecated.
- [moreComing](morecoming.md): A hint that the system will call the client’s callback function again soon.
- [remove](remove.md): Specifies whether the client should remove the result instead of adding it.
- [isRegistrationDomain](isregistrationdomain.md): Deprecated.

# kCFNetServiceFlagIsDefault (Objective-C)

**Framework:** CFNetwork  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Specifies whether the resulting domain is the default registration or browse domain.

## Declaration

```objectivec
kCFNetServiceFlagIsDefault
```

<a id="Discussion"></a>

## Discussion

If set, the resulting domain is the default registration or browse domain, depending on the context. For this version of the CFNetServices API, the default registration domain is the local domain.

> **Note**

>  In previous versions of this API, this constant was `kCFNetServiceFlagIsRegistrationDomain`, which is retained for backward compatibility.

## See Also

### Type Properties

- [kCFNetServiceFlagIsDomain](isdomain.md): Specifies whether the result pertains to a search for domains or services.
- [kCFNetServiceFlagIsRegistrationDomain](isregistrationdomain.md): Deprecated.
- [kCFNetServiceFlagMoreComing](morecoming.md): A hint that the system will call the client’s callback function again soon.
- [kCFNetServiceFlagRemove](remove.md): Specifies whether the client should remove the result instead of adding it.
- [kCFNetServiceFlagIsRegistrationDomain](isregistrationdomain.md): Deprecated.
