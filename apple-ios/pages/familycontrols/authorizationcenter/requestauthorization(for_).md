> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/authorizationcenter/requestauthorization(for:)](https://developer.apple.com/documentation/familycontrols/authorizationcenter/requestauthorization(for:))

# requestAuthorization(for:)

**Framework:** Family Controls  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Requests authorization to provide parental controls for a child or individual.

## Declaration

```swift
func requestAuthorization(for member: FamilyControlsMember) async throws
```

## Parameters

- `member`: The [FamilyControlsMember](../familycontrolsmember.md) that requests authorization

<a id="discussion"></a>

## Discussion

With this function you can authorize parental controls for a [FamilyControlsMember.child](../familycontrolsmember/child.md) that’s signed into the iCloud account on the device or a [FamilyControlsMember.individual](../familycontrolsmember/individual.md). A parent or guardian must authenticate a child’s account, while individuals can authenticate their own account. For more information, see [FamilyControlsMember](../familycontrolsmember.md).

Call this method when your app first launches.

If the [FamilyControlsMember.individual](../familycontrolsmember/individual.md) hasn’t authorized your app previously, the device tries to authorize that individual using Face ID or Touch ID. After the user approves or cancels the request, the system either sets the authorization status or throws an error.

After a [FamilyControlsMember.individual](../familycontrolsmember/individual.md) authorizes your app, additional calls to `requestAuthorization(for:)` no longer ask to authorize that `individual` using Face ID or Touch ID. Additionally, the system removes any restrictions that prevent the user from bypassing parental controls so the user can delete an authorized app or sign out of iCloud as needed.

You can revoke authorization by calling [revokeAuthorization(completionHandler:)](revokeauthorization%28completionhandler_%29.md).

## See Also

### Requesting and revoking authorization

- [revokeAuthorization(completionHandler:)](revokeauthorization%28completionhandler_%29.md): Revokes authorization to provide parental controls.
