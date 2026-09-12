> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovidermanager/associateddomains](https://developer.apple.com/documentation/networkextension/netunnelprovidermanager/associateddomains)

# associatedDomains (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The domains that the system routes network traffic through for a per-app VPN.

## Declaration

```swift
var associatedDomains: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

For per-app VPNs only, the system routes HTTP requests to download the Apple app site association files for domains in this property through the VPN.

## See Also

### Configuring a per-app VPN

- [forPerAppVPN()](forperappvpn%28%29.md): Returns a tunnel provider manager for managing a per-app VPN configuration.
- [appRules](apprules.md): The rules for specific apps in a per-app VPN.
- [excludedDomains](excludeddomains.md): The domains that the system excludes from a per-app VPN.
- [calendarDomains](calendardomains.md): The calendar servers that the system routes connections from the Calendar app through for a per-app VPN.
- [contactsDomains](contactsdomains.md): The contacts servers that the system routes connections from the Contacts app through for a per-app VPN.
- [mailDomains](maildomains.md): The mail servers that the system routes connections from the Mail app through for a per-app VPN.
- [safariDomains](safaridomains.md): The website domains that the system routes connections from the Safari app through a per-app VPN.

# associatedDomains (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The domains that the system routes network traffic through for a per-app VPN.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * associatedDomains;
```

<a id="Discussion"></a>

## Discussion

For per-app VPNs only, the system routes HTTP requests to download the Apple app site association files for domains in this property through the VPN.

## See Also

### Configuring a per-app VPN

- [forPerAppVPN](forperappvpn%28%29.md): Returns a tunnel provider manager for managing a per-app VPN configuration.
- [appRules](apprules.md): The rules for specific apps in a per-app VPN.
- [excludedDomains](excludeddomains.md): The domains that the system excludes from a per-app VPN.
- [calendarDomains](calendardomains.md): The calendar servers that the system routes connections from the Calendar app through for a per-app VPN.
- [contactsDomains](contactsdomains.md): The contacts servers that the system routes connections from the Contacts app through for a per-app VPN.
- [mailDomains](maildomains.md): The mail servers that the system routes connections from the Mail app through for a per-app VPN.
- [safariDomains](safaridomains.md): The website domains that the system routes connections from the Safari app through a per-app VPN.
