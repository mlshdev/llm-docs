> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicebrowserflags/morecoming](https://developer.apple.com/documentation/cfnetwork/cfnetservicebrowserflags/morecoming)

# moreComing (Swift)

**Framework:** CFNetwork  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A hint that the system will call the client’s callback function again soon.

## Declaration

```swift
static var moreComing: CFNetServiceBrowserFlags { get }
```

<a id="Discussion"></a>

## Discussion

If set, the client shouldn’t do anything time-consuming, such as updating the screen.

## See Also

### Type Properties

- [isDefault](isdefault.md): Specifies whether the resulting domain is the default registration or browse domain.
- [isDomain](isdomain.md): Specifies whether the result pertains to a search for domains or services.
- [isRegistrationDomain](isregistrationdomain.md): Deprecated.
- [remove](remove.md): Specifies whether the client should remove the result instead of adding it.
- [isRegistrationDomain](isregistrationdomain.md): Deprecated.

# kCFNetServiceFlagMoreComing (Objective-C)

**Framework:** CFNetwork  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A hint that the system will call the client’s callback function again soon.

## Declaration

```objectivec
kCFNetServiceFlagMoreComing
```

<a id="Discussion"></a>

## Discussion

If set, the client shouldn’t do anything time-consuming, such as updating the screen.

## See Also

### Type Properties

- [kCFNetServiceFlagIsDefault](isdefault.md): Specifies whether the resulting domain is the default registration or browse domain.
- [kCFNetServiceFlagIsDomain](isdomain.md): Specifies whether the result pertains to a search for domains or services.
- [kCFNetServiceFlagIsRegistrationDomain](isregistrationdomain.md): Deprecated.
- [kCFNetServiceFlagRemove](remove.md): Specifies whether the client should remove the result instead of adding it.
- [kCFNetServiceFlagIsRegistrationDomain](isregistrationdomain.md): Deprecated.
