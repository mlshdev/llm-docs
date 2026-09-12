> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/acquirepresentmentassertion()](https://developer.apple.com/documentation/secureelementcredential/credentialsession/acquirepresentmentassertion())

# acquirePresentmentAssertion()

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Indicates that the app intends to present a credential to a contactless interface.

## Declaration

```swift
func acquirePresentmentAssertion() async throws -> CredentialSession.PresentmentIntentAssertion
```

<a id="return-value"></a>

## Return Value

A [CredentialSession.PresentmentIntentAssertion](presentmentintentassertion.md) object, representing exclusive access to presentment intent for a short time.

## Mentioned In

- [Accessing and using secure element credentials](../accessing-and-using-secure-element-credentials.md)

<a id="discussion"></a>

## Discussion

Call this method when your app is in the foreground and showing a user interface appropriate for connecting to a contactless reader.

When you acquire this assertion, your app’s credential presentment can’t be interrupted by other entities’ presentment intents. Specifically, this prevents a default NFC app from interrupting when it detects an NFC reader’s RF field.

If another entity is already presenting a credential, calling this method throws an error. In this case, try calling the method again later.

Hold on to this instance as long as you need it (up to 60 seconds) to complete your credential presentment activity. When you’re done, call [relinquish()](presentmentintentassertion/relinquish%28%29.md) to end the presentment assertion.

Repetitive acquisition of the assertion mechanism may result in a cooldown before being able to acquire the next assertion.

The exclusive use of the presentment intent expires after a predetermined timeout period. When this happens, the credential session’s event stream produces a [CredentialSession.Event.presentmentIntentAssertionTimeout](event/presentmentintentassertiontimeout.md) event.

- The most common errors are:

  - [CredentialSession.ErrorCode.resourceUnavailable](errorcode/resourceunavailable.md): The system service is unavailable, or another entity is currently presenting a credential.

## See Also

### Acquiring exclusive foreground privileges

- [CredentialSession.PresentmentIntentAssertion](presentmentintentassertion.md): An object that signals your app’s intention to make exclusive use of the device’s contactless features.
