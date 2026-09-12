> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovidermanager/forperappvpn()](https://developer.apple.com/documentation/networkextension/netunnelprovidermanager/forperappvpn())

# forPerAppVPN() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+

Returns a tunnel provider manager for managing a per-app VPN configuration.

## Declaration

```swift
class func forPerAppVPN() -> Self
```

<a id="return-value"></a>

## Return Value

An object you use to configure a per-app VPN.

## See Also

### Configuring a per-app VPN

- [appRules](apprules.md): The rules for specific apps in a per-app VPN.
- [excludedDomains](excludeddomains.md): The domains that the system excludes from a per-app VPN.
- [associatedDomains](associateddomains.md): The domains that the system routes network traffic through for a per-app VPN.
- [calendarDomains](calendardomains.md): The calendar servers that the system routes connections from the Calendar app through for a per-app VPN.
- [contactsDomains](contactsdomains.md): The contacts servers that the system routes connections from the Contacts app through for a per-app VPN.
- [mailDomains](maildomains.md): The mail servers that the system routes connections from the Mail app through for a per-app VPN.
- [safariDomains](safaridomains.md): The website domains that the system routes connections from the Safari app through a per-app VPN.

# forPerAppVPN (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+

Returns a tunnel provider manager for managing a per-app VPN configuration.

## Declaration

```objectivec
+ (instancetype) forPerAppVPN;
```

<a id="return-value"></a>

## Return Value

An object you use to configure a per-app VPN.

## See Also

### Configuring a per-app VPN

- [appRules](apprules.md): The rules for specific apps in a per-app VPN.
- [excludedDomains](excludeddomains.md): The domains that the system excludes from a per-app VPN.
- [associatedDomains](associateddomains.md): The domains that the system routes network traffic through for a per-app VPN.
- [calendarDomains](calendardomains.md): The calendar servers that the system routes connections from the Calendar app through for a per-app VPN.
- [contactsDomains](contactsdomains.md): The contacts servers that the system routes connections from the Contacts app through for a per-app VPN.
- [mailDomains](maildomains.md): The mail servers that the system routes connections from the Mail app through for a per-app VPN.
- [safariDomains](safaridomains.md): The website domains that the system routes connections from the Safari app through a per-app VPN.
