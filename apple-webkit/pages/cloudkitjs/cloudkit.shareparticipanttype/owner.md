> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.shareparticipanttype/owner

# OWNER

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Enumeration Case  
**Availability:** CloudKit JS 1.0+

The owner of the shared record who can add private users but not add public users.

## Declaration

```
const String OWNER;
```

## See Also

### Enumeration Cases

- [PRIVATE_USER](private_user.md): Participants who were invited to share the record by the owner.
- [PUBLIC_USER](public_user.md): Participants who accepted a shared record by accessing the share URL.
- [UNKNOWN](unknown.md): Unknown type of participant.
