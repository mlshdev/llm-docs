> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingsmanager/isenabled](https://developer.apple.com/documentation/networkextension/nednssettingsmanager/isenabled)

# isEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean you use to query the enabled state of the DNS settings configuration.

## Declaration

```swift
var isEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A user must enable your DNS settings configuration in order to apply it to the system. By default, configurations are disabled until the user enables the configuration in the Settings app on iOS or in System Preferences on macOS.

## See Also

### Accessing DNS configuration properties

- [dnsSettings](dnssettings.md): An object that contains the configuration settings for a DNS server.
- [localizedDescription](localizeddescription.md): A string that contains the display name of the DNS settings configuration.
- [onDemandRules](ondemandrules.md): A list of ordered rules that defines the networks on which the DNS settings will apply.

# enabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean you use to query the enabled state of the DNS settings configuration.

## Declaration

```objectivec
@property (readonly, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

A user must enable your DNS settings configuration in order to apply it to the system. By default, configurations are disabled until the user enables the configuration in the Settings app on iOS or in System Preferences on macOS.

## See Also

### Accessing DNS configuration properties

- [dnsSettings](dnssettings.md): An object that contains the configuration settings for a DNS server.
- [localizedDescription](localizeddescription.md): A string that contains the display name of the DNS settings configuration.
- [onDemandRules](ondemandrules.md): A list of ordered rules that defines the networks on which the DNS settings will apply.
