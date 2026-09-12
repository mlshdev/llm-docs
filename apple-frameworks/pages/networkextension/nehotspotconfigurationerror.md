> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfigurationerror](https://developer.apple.com/documentation/networkextension/nehotspotconfigurationerror)

# NEHotspotConfigurationError (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Error values returned by hotspot configuration manager methods.

## Declaration

```swift
enum NEHotspotConfigurationError
```

## Topics

### Errors

- [NEHotspotConfigurationError.invalid](nehotspotconfigurationerror/invalid.md): The configuration is not valid.
- [NEHotspotConfigurationError.invalidSSID](nehotspotconfigurationerror/invalidssid.md): The SSID value is not valid.
- [NEHotspotConfigurationError.invalidWPAPassphrase](nehotspotconfigurationerror/invalidwpapassphrase.md): The WPA passphrase is not valid.
- [NEHotspotConfigurationError.invalidWEPPassphrase](nehotspotconfigurationerror/invalidweppassphrase.md): The WEP passphrase is not valid.
- [NEHotspotConfigurationError.invalidEAPSettings](nehotspotconfigurationerror/invalideapsettings.md): EAP settings are not valid.
- [NEHotspotConfigurationError.invalidHS20Settings](nehotspotconfigurationerror/invalidhs20settings.md): The HS 2.0 settings are not valid.
- [NEHotspotConfigurationError.invalidHS20DomainName](nehotspotconfigurationerror/invalidhs20domainname.md): The HS 2.0 domain name is not valid.
- [NEHotspotConfigurationError.invalidSSIDPrefix](nehotspotconfigurationerror/invalidssidprefix.md): The SSID prefix used to create the hotspot configuration is invalid.
- [NEHotspotConfigurationError.userDenied](nehotspotconfigurationerror/userdenied.md): The user has refused the network configuration.
- [NEHotspotConfigurationError.internal](nehotspotconfigurationerror/internal.md): Internal error, otherwise undefined.
- [NEHotspotConfigurationError.pending](nehotspotconfigurationerror/pending.md): The network configuration action has not completed.
- [NEHotspotConfigurationError.systemConfiguration](nehotspotconfigurationerror/systemconfiguration.md): The system configuration is not valid.
- [NEHotspotConfigurationError.unknown](nehotspotconfigurationerror/unknown.md): An unknown error has occurred.
- [NEHotspotConfigurationError.joinOnceNotSupported](nehotspotconfigurationerror/joinoncenotsupported.md): The join-once option isn’t support for EAP configuration.
- [NEHotspotConfigurationError.alreadyAssociated](nehotspotconfigurationerror/alreadyassociated.md): The configuration is already associated with the hotspot.
- [NEHotspotConfigurationError.applicationIsNotInForeground](nehotspotconfigurationerror/applicationisnotinforeground.md): The application is not running in the foreground.

### Enumeration Cases

- [NEHotspotConfigurationError.systemDenied](nehotspotconfigurationerror/systemdenied.md)
- [NEHotspotConfigurationError.userUnauthorized](nehotspotconfigurationerror/userunauthorized.md)

### Initializers

- [init(rawValue:)](nehotspotconfigurationerror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NEHotspotConfigurationErrorDomain](nehotspotconfigurationerrordomain.md): The domain string for errors involving hotspot configuration.

# NEHotspotConfigurationError (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Error values returned by hotspot configuration manager methods.

## Declaration

```objectivec
enum NEHotspotConfigurationError : NSInteger;
```

## Topics

### Errors

- [NEHotspotConfigurationErrorInvalid](nehotspotconfigurationerror/invalid.md): The configuration is not valid.
- [NEHotspotConfigurationErrorInvalidSSID](nehotspotconfigurationerror/invalidssid.md): The SSID value is not valid.
- [NEHotspotConfigurationErrorInvalidWPAPassphrase](nehotspotconfigurationerror/invalidwpapassphrase.md): The WPA passphrase is not valid.
- [NEHotspotConfigurationErrorInvalidWEPPassphrase](nehotspotconfigurationerror/invalidweppassphrase.md): The WEP passphrase is not valid.
- [NEHotspotConfigurationErrorInvalidEAPSettings](nehotspotconfigurationerror/invalideapsettings.md): EAP settings are not valid.
- [NEHotspotConfigurationErrorInvalidHS20Settings](nehotspotconfigurationerror/invalidhs20settings.md): The HS 2.0 settings are not valid.
- [NEHotspotConfigurationErrorInvalidHS20DomainName](nehotspotconfigurationerror/invalidhs20domainname.md): The HS 2.0 domain name is not valid.
- [NEHotspotConfigurationErrorInvalidSSIDPrefix](nehotspotconfigurationerror/invalidssidprefix.md): The SSID prefix used to create the hotspot configuration is invalid.
- [NEHotspotConfigurationErrorUserDenied](nehotspotconfigurationerror/userdenied.md): The user has refused the network configuration.
- [NEHotspotConfigurationErrorInternal](nehotspotconfigurationerror/internal.md): Internal error, otherwise undefined.
- [NEHotspotConfigurationErrorPending](nehotspotconfigurationerror/pending.md): The network configuration action has not completed.
- [NEHotspotConfigurationErrorSystemConfiguration](nehotspotconfigurationerror/systemconfiguration.md): The system configuration is not valid.
- [NEHotspotConfigurationErrorUnknown](nehotspotconfigurationerror/unknown.md): An unknown error has occurred.
- [NEHotspotConfigurationErrorJoinOnceNotSupported](nehotspotconfigurationerror/joinoncenotsupported.md): The join-once option isn’t support for EAP configuration.
- [NEHotspotConfigurationErrorAlreadyAssociated](nehotspotconfigurationerror/alreadyassociated.md): The configuration is already associated with the hotspot.
- [NEHotspotConfigurationErrorApplicationIsNotInForeground](nehotspotconfigurationerror/applicationisnotinforeground.md): The application is not running in the foreground.

### Enumeration Cases

- [NEHotspotConfigurationErrorSystemDenied](nehotspotconfigurationerror/systemdenied.md)
- [NEHotspotConfigurationErrorUserUnauthorized](nehotspotconfigurationerror/userunauthorized.md)

## See Also

### Errors

- [NEHotspotConfigurationErrorDomain](nehotspotconfigurationerrordomain.md): The domain string for errors involving hotspot configuration.
