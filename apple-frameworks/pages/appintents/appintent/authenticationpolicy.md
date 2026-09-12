> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/authenticationpolicy](https://developer.apple.com/documentation/appintents/appintent/authenticationpolicy)

# authenticationPolicy

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The authentication policy to enforce when running the app intent.

## Declaration

```swift
static var authenticationPolicy: IntentAuthenticationPolicy { get }
```

<a id="discussion"></a>

## Discussion

Set the value of this property if you want someone to provide authentication before running the app intent. The default value of this property is [IntentAuthenticationPolicy.alwaysAllowed](../intentauthenticationpolicy/alwaysallowed.md), which allows the intent to run without authentication, including when the device is locked.

## Default Implementations

### AppIntent Implementations

- [authenticationPolicy](authenticationpolicy-1r9kh.md): The authentication policy to enforce when running the app intent.

## See Also

### Specifying the authentication policy

- [IntentAuthenticationPolicy](../intentauthenticationpolicy.md): The authentication policies you can apply to an app intent when it runs.
