> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryliveactivities/accessoryauthorizationresult/allow

# AccessoryAuthorizationResult.allow

**Framework:** Accessory Live Activities  
**Kind:** Case  
**Availability:** iOS 26.5+ · iPadOS 26.5+

An option that indicates the person allows Live Activity forwarding from all apps that support them.

## Declaration

```swift
case allow
```

## See Also

### Identifying the decision

- [AccessoryAuthorizationResult.undetermined](undetermined.md): An option that indicates the system hasn’t shown the authorization prompt to the person.
- [AccessoryAuthorizationResult.limited](limited.md): An option that indicates the person allows Live Activities from a selected subset of apps.
- [AccessoryAuthorizationResult.deny](deny.md): An option that indicates the person doesn’t allow Live Activities.
