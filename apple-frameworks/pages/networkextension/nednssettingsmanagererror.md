> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingsmanagererror](https://developer.apple.com/documentation/networkextension/nednssettingsmanagererror)

# NEDNSSettingsManagerError (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Error codes specific to DNS managers.

## Declaration

```swift
enum NEDNSSettingsManagerError
```

## Topics

### Error codes

- [NEDNSSettingsManagerError.configurationInvalid](nednssettingsmanagererror/configurationinvalid.md): An error code that indicates the DNS settings manager is invalid.
- [NEDNSSettingsManagerError.configurationDisabled](nednssettingsmanagererror/configurationdisabled.md): An error code that indicates the DNS settings manager isn’t enabled.
- [NEDNSSettingsManagerError.configurationStale](nednssettingsmanagererror/configurationstale.md): An error code that indicates the DNS settings manager isn’t loaded.
- [NEDNSSettingsManagerError.configurationCannotBeRemoved](nednssettingsmanagererror/configurationcannotberemoved.md): An error code that indicates removing the DNS settings manager failed.

### Initializers

- [init(rawValue:)](nednssettingsmanagererror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling errors

- [NEDNSSettingsErrorDomain](nednssettingserrordomain.md): The domain for errors resulting from calls to the DNS settings manager.

# NEDNSSettingsManagerError (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Error codes specific to DNS managers.

## Declaration

```objectivec
enum NEDNSSettingsManagerError : NSInteger;
```

## Topics

### Error codes

- [NEDNSSettingsManagerErrorConfigurationInvalid](nednssettingsmanagererror/configurationinvalid.md): An error code that indicates the DNS settings manager is invalid.
- [NEDNSSettingsManagerErrorConfigurationDisabled](nednssettingsmanagererror/configurationdisabled.md): An error code that indicates the DNS settings manager isn’t enabled.
- [NEDNSSettingsManagerErrorConfigurationStale](nednssettingsmanagererror/configurationstale.md): An error code that indicates the DNS settings manager isn’t loaded.
- [NEDNSSettingsManagerErrorConfigurationCannotBeRemoved](nednssettingsmanagererror/configurationcannotberemoved.md): An error code that indicates removing the DNS settings manager failed.

## See Also

### Handling errors

- [NEDNSSettingsErrorDomain](nednssettingserrordomain.md): The domain for errors resulting from calls to the DNS settings manager.
