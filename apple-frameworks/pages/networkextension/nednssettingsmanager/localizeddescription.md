> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingsmanager/localizeddescription](https://developer.apple.com/documentation/networkextension/nednssettingsmanager/localizeddescription)

# localizedDescription (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A string that contains the display name of the DNS settings configuration.

## Declaration

```swift
var localizedDescription: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This string is used as the display name of the DNS settings configuration in the system’s settings UI. If this property is set to `nil` at the time that the configuration is created, it is automatically set to the display name of the calling app.

## See Also

### Accessing DNS configuration properties

- [isEnabled](isenabled.md): A Boolean you use to query the enabled state of the DNS settings configuration.
- [dnsSettings](dnssettings.md): An object that contains the configuration settings for a DNS server.
- [onDemandRules](ondemandrules.md): A list of ordered rules that defines the networks on which the DNS settings will apply.

# localizedDescription (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A string that contains the display name of the DNS settings configuration.

## Declaration

```objectivec
@property (copy, nullable) NSString * localizedDescription;
```

<a id="Discussion"></a>

## Discussion

This string is used as the display name of the DNS settings configuration in the system’s settings UI. If this property is set to `nil` at the time that the configuration is created, it is automatically set to the display name of the calling app.

## See Also

### Accessing DNS configuration properties

- [enabled](isenabled.md): A Boolean you use to query the enabled state of the DNS settings configuration.
- [dnsSettings](dnssettings.md): An object that contains the configuration settings for a DNS server.
- [onDemandRules](ondemandrules.md): A list of ordered rules that defines the networks on which the DNS settings will apply.
