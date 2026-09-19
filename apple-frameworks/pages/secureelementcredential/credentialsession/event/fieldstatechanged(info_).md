> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/event/fieldstatechanged(info:)

# CredentialSession.Event.fieldStateChanged(info:)

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The state of the NFC RF field changed during card emulation.

## Declaration

```swift
case fieldStateChanged(info: CredentialSession.NFCFieldInformation)
```

<a id="discussion"></a>

## Discussion

The credential session sends an initial event with the current field state when entering the card emulation state. The session then sends further events if the field state changes. The session only publishes this event when it’s in the card emulation state.

You can only receive this event if you have acquired the [CredentialSession.PresentmentIntentAssertion](../presentmentintentassertion.md).

## See Also

### NFC field events

- [CredentialSession.NFCFieldInformation](../nfcfieldinformation.md): The state of an NFC RF field.
