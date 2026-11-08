> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureauthorizationstatus/unauthorized

# AccessoryFeatureAuthorizationStatus.unauthorized

**Framework:** Accessory Transport Extension  
**Kind:** Case  
**Availability:** iOS 27.3+ beta

A value that indicates your extension hasn’t authorized the feature.

## Declaration

```swift
case unauthorized
```

## See Also

### Determining the authorization status

- [AccessoryFeatureAuthorizationStatus.unknown](unknown.md): Beta. A value that indicates the system doesn’t have an authorization record for the accessory feature.
- [AccessoryFeatureAuthorizationStatus.authorized](authorized.md): Beta. A value that indicates your extension authorizes the feature.
