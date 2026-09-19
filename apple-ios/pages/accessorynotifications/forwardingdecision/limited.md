> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/forwardingdecision/limited

# ForwardingDecision.limited

**Framework:** Accessory Notifications  
**Kind:** Case  
**Availability:** iOS 26.5+

An option that indicates the person allows notifications from a selected subset of apps.

## Declaration

```swift
case limited
```

## See Also

### Identifying the decision

- [ForwardingDecision.allow](allow.md): An option that indicates the person allows notifications from all applicable apps.
- [ForwardingDecision.deny](deny.md): An option that indicates the person doesn’t allow notification forwarding.
- [ForwardingDecision.undetermined](undetermined.md): An option that indicates the person dismissed the prompt without responding.
