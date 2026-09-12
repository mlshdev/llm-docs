> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfigurationmanager/removeconfiguration(forssid:)](https://developer.apple.com/documentation/networkextension/nehotspotconfigurationmanager/removeconfiguration(forssid:))

# removeConfiguration(forSSID:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Removes a Wi-Fi configuration, identified by an SSID, that your app previously added.

## Declaration

```swift
func removeConfiguration(forSSID SSID: String)
```

## Parameters

- `SSID`: A string of 1-32 characters.

<a id="Discussion"></a>

## Discussion

Your app can use this method to delete a configuration that it has added, but not a configuration added by another app or by the user.  The user can also delete configured networks through Settings \> Wi-Fi.

## See Also

### Removing configuration

- [removeConfiguration(forHS20DomainName:)](removeconfiguration%28forhs20domainname_%29.md): Removes a Wi-Fi hotspot configuration, identified by a Hotspot 2.0 domain name, that your app previously added.

# removeConfigurationForSSID: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Removes a Wi-Fi configuration, identified by an SSID, that your app previously added.

## Declaration

```objectivec
- (void) removeConfigurationForSSID:(NSString *) SSID;
```

## Parameters

- `SSID`: A string of 1-32 characters.

<a id="Discussion"></a>

## Discussion

Your app can use this method to delete a configuration that it has added, but not a configuration added by another app or by the user.  The user can also delete configured networks through Settings \> Wi-Fi.

## See Also

### Removing configuration

- [removeConfigurationForHS20DomainName:](removeconfiguration%28forhs20domainname_%29.md): Removes a Wi-Fi hotspot configuration, identified by a Hotspot 2.0 domain name, that your app previously added.
