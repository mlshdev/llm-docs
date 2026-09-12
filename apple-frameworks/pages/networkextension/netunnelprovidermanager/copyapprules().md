> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovidermanager/copyapprules()](https://developer.apple.com/documentation/networkextension/netunnelprovidermanager/copyapprules())

# copyAppRules() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a copy of the app rules currently set in the configuration.

## Declaration

```swift
func copyAppRules() -> [NEAppRule]?
```

<a id="return-value"></a>

## Return Value

An array of [NEAppRule](../neapprule.md) objects, or `nil` if the configuration doesn’t have any app rules.

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

This method provides read-only access to the configuration’s app rules.

## See Also

### Managing tunnel configurations

- [loadAllFromPreferences(completionHandler:)](loadallfrompreferences%28completionhandler_%29.md): Read all of the VPN configurations created by the calling app that have previously been saved to the Network Extension preferences.

# copyAppRules (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a copy of the app rules currently set in the configuration.

## Declaration

```objectivec
- (NSArray<NEAppRule *> *) copyAppRules;
```

<a id="return-value"></a>

## Return Value

An array of [NEAppRule](../neapprule.md) objects, or `nil` if the configuration doesn’t have any app rules.

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

This method provides read-only access to the configuration’s app rules.

## See Also

### Managing tunnel configurations

- [loadAllFromPreferencesWithCompletionHandler:](loadallfrompreferences%28completionhandler_%29.md): Read all of the VPN configurations created by the calling app that have previously been saved to the Network Extension preferences.
