> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nevpnmanager/shared()

# shared() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Access the single instance of `NEVPNManager`.

## Declaration

```swift
class func shared() -> NEVPNManager
```

<a id="return-value"></a>

## Return Value

The `NEVPNManager` instance for the calling application.

## See Also

### Managing VPN configurations

- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save the VPN configuration in the Network Extension preferences.
- [setAuthorization(\_:)](setauthorization%28__%29.md)
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove the VPN configuration from the Network Extension preferences.

# sharedManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Access the single instance of `NEVPNManager`.

## Declaration

```objectivec
+ (NEVPNManager *) sharedManager;
```

<a id="return-value"></a>

## Return Value

The `NEVPNManager` instance for the calling application.

## See Also

### Managing VPN configurations

- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save the VPN configuration in the Network Extension preferences.
- [setAuthorization:](setauthorization%28__%29.md)
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove the VPN configuration from the Network Extension preferences.
