> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/authorizationstatus](https://developer.apple.com/documentation/familycontrols/authorizationstatus)

# AuthorizationStatus

**Framework:** Family Controls  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+

The status of your app’s authorization to provide parental controls.

## Declaration

```swift
enum AuthorizationStatus
```

## Topics

### Determining the status

- [AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md): The app hasn’t requested authorization.
- [AuthorizationStatus.denied](authorizationstatus/denied.md): The person, parent, or guardian denied the request for authorization.
- [AuthorizationStatus.approved](authorizationstatus/approved.md): The person, parent, or guardian approved the request for authorization.
- [AuthorizationStatus.approvedWithDataAccess](authorizationstatus/approvedwithdataaccess.md): The person, parent, or guardian approved the request for authorization with access to non-tokenized family activity data.

### Debugging

- [description](authorizationstatus/description.md): A nonlocalized description of the authorization value, suitable for debugging.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Authorizations

- [AuthorizationCenter](authorizationcenter.md): The center for requesting authorization to provide parental controls.
- [Family Controls](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.family-controls): A Boolean value that indicates whether the app can request or revoke authorization to provide parental controls.
- [Requesting the Family Controls entitlement](requesting-the-family-controls-entitlement.md): Register your app and its Screen Time API app extensions to use Family Controls.
