> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nevpnmanager/setauthorization(_:)

# setAuthorization(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

## Declaration

```swift
func setAuthorization(_ authorization: AuthorizationRef)
```

## See Also

### Managing VPN configurations

- [shared()](shared%28%29.md): Access the single instance of `NEVPNManager`.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save the VPN configuration in the Network Extension preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove the VPN configuration from the Network Extension preferences.

# setAuthorization: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

## Declaration

```objectivec
- (void) setAuthorization:(AuthorizationRef) authorization;
```

## See Also

### Managing VPN configurations

- [sharedManager](shared%28%29.md): Access the single instance of `NEVPNManager`.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save the VPN configuration in the Network Extension preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove the VPN configuration from the Network Extension preferences.
