> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clservicesession-pt7n/init(authorization:fullaccuracypurposekey:)](https://developer.apple.com/documentation/corelocation/clservicesession-pt7n/init(authorization:fullaccuracypurposekey:))

# init(authorization:fullAccuracyPurposeKey:)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a services session by using the authorization mode and purpose key you specify.

## Declaration

```swift
init(authorization: CLServiceSession.AuthorizationRequirement, fullAccuracyPurposeKey: String)
```

<a id="Discussion"></a>

## Discussion

Passing `.none` for authorization requirement and omitting any accuracy requirement creates a session object that doesn’t request a person’s authorization to access Location Services, but the object meets a requested Explicit Service Session requirement if the framework has already has authorization.

Passing an authorization requirement other than `.none` causes Location Services to request a person’s permission for the corresponding level of authorization when possible — for example, when your app is in the foreground, when a person hasn’t denied an earlier authorization request, or if parental control settings don’t restrict changes to the ability to request a person’s location.

## See Also

### Creating a session

- [init(authorization:)](init%28authorization_%29.md): Creates a services session by using the authorization mode you specify.
- [CLServiceSession.AuthorizationRequirement](authorizationrequirement.md): Values that describe when the service session needs to request authorization.
