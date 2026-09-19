> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mailkit/mecomposesessionerror/invalidheaders

# invalidHeaders

**Framework:** MailKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

An error that indicates one or more of the message’s headers are invalid.

## Declaration

```swift
static var invalidHeaders: MEComposeSessionError.Code { get }
```

## See Also

### Indicating Erroneous States

- [invalidBody](invalidbody.md): An error that indicates the message’s body is invalid.
- [invalidRecipients](invalidrecipients.md): An error that indicates one or more of the message’s recipients are invalid.
- [MEComposeSessionErrorDomain](../mecomposesessionerrordomain.md): A constant for the compose session error domain.
