> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelaymanager/isenabled](https://developer.apple.com/documentation/networkextension/nerelaymanager/isenabled)

# isEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean used to toggle the enabled state of the relay configuration.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A relay configuration must be enabled before it can be used to proxy application traffic.

## See Also

### Accessing relay configuration properties

- [relays](relays.md): An array of one or two relay server configurations. If multiple relays are configured, application traffic routes through both of them in the order they appear in the array.
- [matchDomains](matchdomains.md): A list of domain strings used to determine which connections will use the relay configuration contained in this object.
- [excludedDomains](excludeddomains.md): A list of domain strings used to determine which connections won’t use the relay configuration contained in this object.
- [localizedDescription](localizeddescription.md): A string that contains the display name of the relay configuration.
- [onDemandRules](ondemandrules.md): An array of rules you use to determine which networks the relay uses.
- [NEOnDemandRule](../neondemandrule.md): A base class shared by all VPN On Demand rules.

# enabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean used to toggle the enabled state of the relay configuration.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

A relay configuration must be enabled before it can be used to proxy application traffic.

## See Also

### Accessing relay configuration properties

- [relays](relays.md): An array of one or two relay server configurations. If multiple relays are configured, application traffic routes through both of them in the order they appear in the array.
- [matchDomains](matchdomains.md): A list of domain strings used to determine which connections will use the relay configuration contained in this object.
- [excludedDomains](excludeddomains.md): A list of domain strings used to determine which connections won’t use the relay configuration contained in this object.
- [localizedDescription](localizeddescription.md): A string that contains the display name of the relay configuration.
- [onDemandRules](ondemandrules.md): An array of rules you use to determine which networks the relay uses.
- [NEOnDemandRule](../neondemandrule.md): A base class shared by all VPN On Demand rules.
