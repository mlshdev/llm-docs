> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/nfcfieldinformation](https://developer.apple.com/documentation/secureelementcredential/credentialsession/nfcfieldinformation)

# CredentialSession.NFCFieldInformation

**Framework:** SecureElementCredential  
**Kind:** Enumeration  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The state of an NFC RF field.

## Declaration

```swift
enum NFCFieldInformation
```

## Topics

### Field states

- [CredentialSession.NFCFieldInformation.fieldAbsent](nfcfieldinformation/fieldabsent.md): No NFC reader RF field is present.
- [CredentialSession.NFCFieldInformation.fieldPresent](nfcfieldinformation/fieldpresent.md): An NFC reader’s RF field is present.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### NFC field events

- [CredentialSession.Event.fieldStateChanged(info:)](event/fieldstatechanged%28info_%29.md): The state of the NFC RF field changed during card emulation.
