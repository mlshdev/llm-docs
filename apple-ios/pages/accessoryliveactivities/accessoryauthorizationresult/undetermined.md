> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/accessoryauthorizationresult/undetermined](https://developer.apple.com/documentation/accessoryliveactivities/accessoryauthorizationresult/undetermined)

# AccessoryAuthorizationResult.undetermined

**Framework:** Accessory Live Activities  
**Kind:** Case  
**Availability:** iOS 26.5+ · iPadOS 26.5+

An option that indicates the system hasn’t shown the authorization prompt to the person.

## Declaration

```swift
case undetermined
```

<a id="discussion"></a>

## Discussion

An `.undetermined` authorization result indicates that the person hasn’t seen the authorization prompt that asks for permission to forward iOS system notifications and Live Activities to your accessory. If they see the authorization prompt and dismiss it, the [AccessoryAuthorizationResult](../accessoryauthorizationresult.md) changes to [AccessoryAuthorizationResult.deny](deny.md).

For more information requesting permission to forward Live Activities to your accessory, see [Receiving Live Activity updates and alerts on an accessory](../receiving-live-activities-on-an-accessory.md).

## See Also

### Identifying the decision

- [AccessoryAuthorizationResult.allow](allow.md): An option that indicates the person allows Live Activity forwarding from all apps that support them.
- [AccessoryAuthorizationResult.limited](limited.md): An option that indicates the person allows Live Activities from a selected subset of apps.
- [AccessoryAuthorizationResult.deny](deny.md): An option that indicates the person doesn’t allow Live Activities.
