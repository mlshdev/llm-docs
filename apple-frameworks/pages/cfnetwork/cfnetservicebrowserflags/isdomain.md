> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicebrowserflags/isdomain](https://developer.apple.com/documentation/cfnetwork/cfnetservicebrowserflags/isdomain)

# isDomain (Swift)

**Framework:** CFNetwork  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Specifies whether the result pertains to a search for domains or services.

## Declaration

```swift
static var isDomain: CFNetServiceBrowserFlags { get }
```

<a id="Discussion"></a>

## Discussion

If set, the results pertain to a search for domains. If not set, the results pertain to a search for services.

## See Also

### Type Properties

- [isDefault](isdefault.md): Specifies whether the resulting domain is the default registration or browse domain.
- [isRegistrationDomain](isregistrationdomain.md): Deprecated.
- [moreComing](morecoming.md): A hint that the system will call the client’s callback function again soon.
- [remove](remove.md): Specifies whether the client should remove the result instead of adding it.
- [isRegistrationDomain](isregistrationdomain.md): Deprecated.

# kCFNetServiceFlagIsDomain (Objective-C)

**Framework:** CFNetwork  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Specifies whether the result pertains to a search for domains or services.

## Declaration

```objectivec
kCFNetServiceFlagIsDomain
```

<a id="Discussion"></a>

## Discussion

If set, the results pertain to a search for domains. If not set, the results pertain to a search for services.

## See Also

### Type Properties

- [kCFNetServiceFlagIsDefault](isdefault.md): Specifies whether the resulting domain is the default registration or browse domain.
- [kCFNetServiceFlagIsRegistrationDomain](isregistrationdomain.md): Deprecated.
- [kCFNetServiceFlagMoreComing](morecoming.md): A hint that the system will call the client’s callback function again soon.
- [kCFNetServiceFlagRemove](remove.md): Specifies whether the client should remove the result instead of adding it.
- [kCFNetServiceFlagIsRegistrationDomain](isregistrationdomain.md): Deprecated.
