> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelaymanager/localizeddescription](https://developer.apple.com/documentation/networkextension/nerelaymanager/localizeddescription)

# localizedDescription (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A string that contains the display name of the relay configuration.

## Declaration

```swift
var localizedDescription: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This string is used as the display name of the relay configuration in the system’s settings UI. If this property is set to `nil` at the time that the configuration is created, it is automatically set to the display name of the calling app.

## See Also

### Accessing relay configuration properties

- [isEnabled](isenabled.md): A Boolean used to toggle the enabled state of the relay configuration.
- [relays](relays.md): An array of one or two relay server configurations. If multiple relays are configured, application traffic routes through both of them in the order they appear in the array.
- [matchDomains](matchdomains.md): A list of domain strings used to determine which connections will use the relay configuration contained in this object.
- [excludedDomains](excludeddomains.md): A list of domain strings used to determine which connections won’t use the relay configuration contained in this object.
- [onDemandRules](ondemandrules.md): An array of rules you use to determine which networks the relay uses.
- [NEOnDemandRule](../neondemandrule.md): A base class shared by all VPN On Demand rules.

# localizedDescription (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A string that contains the display name of the relay configuration.

## Declaration

```objectivec
@property (copy, nullable) NSString * localizedDescription;
```

<a id="Discussion"></a>

## Discussion

This string is used as the display name of the relay configuration in the system’s settings UI. If this property is set to `nil` at the time that the configuration is created, it is automatically set to the display name of the calling app.

## See Also

### Accessing relay configuration properties

- [enabled](isenabled.md): A Boolean used to toggle the enabled state of the relay configuration.
- [relays](relays.md): An array of one or two relay server configurations. If multiple relays are configured, application traffic routes through both of them in the order they appear in the array.
- [matchDomains](matchdomains.md): A list of domain strings used to determine which connections will use the relay configuration contained in this object.
- [excludedDomains](excludeddomains.md): A list of domain strings used to determine which connections won’t use the relay configuration contained in this object.
- [onDemandRules](ondemandrules.md): An array of rules you use to determine which networks the relay uses.
- [NEOnDemandRule](../neondemandrule.md): A base class shared by all VPN On Demand rules.
