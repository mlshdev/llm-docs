> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfigurationmanager/removeconfiguration(forhs20domainname:)](https://developer.apple.com/documentation/networkextension/nehotspotconfigurationmanager/removeconfiguration(forhs20domainname:))

# removeConfiguration(forHS20DomainName:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes a Wi-Fi hotspot configuration, identified by a Hotspot 2.0 domain name, that your app previously added.

## Declaration

```swift
func removeConfiguration(forHS20DomainName domainName: String)
```

## Parameters

- `domainName`: The domain name of the HS 2.0 Wi-Fi network.

<a id="Discussion"></a>

## Discussion

Your app can use this method to delete a configuration that it has added, but not a configuration added by another app or by the user.  The user can also delete configured networks through Settings \> Wi-Fi.

## See Also

### Removing configuration

- [removeConfiguration(forSSID:)](removeconfiguration%28forssid_%29.md): Removes a Wi-Fi configuration, identified by an SSID, that your app previously added.

# removeConfigurationForHS20DomainName: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes a Wi-Fi hotspot configuration, identified by a Hotspot 2.0 domain name, that your app previously added.

## Declaration

```objectivec
- (void) removeConfigurationForHS20DomainName:(NSString *) domainName;
```

## Parameters

- `domainName`: The domain name of the HS 2.0 Wi-Fi network.

<a id="Discussion"></a>

## Discussion

Your app can use this method to delete a configuration that it has added, but not a configuration added by another app or by the user.  The user can also delete configured networks through Settings \> Wi-Fi.

## See Also

### Removing configuration

- [removeConfigurationForSSID:](removeconfiguration%28forssid_%29.md): Removes a Wi-Fi configuration, identified by an SSID, that your app previously added.
