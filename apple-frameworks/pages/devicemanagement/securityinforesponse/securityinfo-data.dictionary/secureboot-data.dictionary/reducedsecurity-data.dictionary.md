> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/secureboot-data.dictionary/reducedsecurity-data.dictionary](https://developer.apple.com/documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/secureboot-data.dictionary/reducedsecurity-data.dictionary)

# SecurityInfoResponse.SecurityInfo.SecureBoot.ReducedSecurity

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.0+

Reports which security features the user disables in `recoveryOS`. This property is only present for a Mac with Apple silicon when `SecureBootLevel` is `medium`.

## Declaration

```
object SecurityInfoResponse.SecurityInfo.SecureBoot.ReducedSecurity
```

## Properties

- `AllowsAnyAppleSignedOS` — `string`: If ‘true’, allows any signed version of trusted system software from Apple to run.
- `AllowsMDM` — `string`: If ‘true’, the MDM server controls kernel extensions and software updates.
- `AllowsUserKextApproval` — `string`: If ‘true’, the user has control over kernel extensions.
