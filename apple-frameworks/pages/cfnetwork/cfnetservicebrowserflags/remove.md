> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicebrowserflags/remove](https://developer.apple.com/documentation/cfnetwork/cfnetservicebrowserflags/remove)

# remove (Swift)

**Framework:** CFNetwork  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Specifies whether the client should remove the result instead of adding it.

## Declaration

```swift
static var remove: CFNetServiceBrowserFlags { get }
```

<a id="Discussion"></a>

## Discussion

If set, the client should remove the result item instead of adding it.

## See Also

### Type Properties

- [isDefault](isdefault.md): Specifies whether the resulting domain is the default registration or browse domain.
- [isDomain](isdomain.md): Specifies whether the result pertains to a search for domains or services.
- [isRegistrationDomain](isregistrationdomain.md): Deprecated.
- [moreComing](morecoming.md): A hint that the system will call the client’s callback function again soon.
- [isRegistrationDomain](isregistrationdomain.md): Deprecated.

# kCFNetServiceFlagRemove (Objective-C)

**Framework:** CFNetwork  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Specifies whether the client should remove the result instead of adding it.

## Declaration

```objectivec
kCFNetServiceFlagRemove
```

<a id="Discussion"></a>

## Discussion

If set, the client should remove the result item instead of adding it.

## See Also

### Type Properties

- [kCFNetServiceFlagIsDefault](isdefault.md): Specifies whether the resulting domain is the default registration or browse domain.
- [kCFNetServiceFlagIsDomain](isdomain.md): Specifies whether the result pertains to a search for domains or services.
- [kCFNetServiceFlagIsRegistrationDomain](isregistrationdomain.md): Deprecated.
- [kCFNetServiceFlagMoreComing](morecoming.md): A hint that the system will call the client’s callback function again soon.
- [kCFNetServiceFlagIsRegistrationDomain](isregistrationdomain.md): Deprecated.
