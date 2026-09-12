> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/mailintent](https://developer.apple.com/documentation/appintents/appschema/mailintent)

# AppSchema.MailIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Identifies intent schemas in the mail domain.

## Declaration

```swift
protocol MailIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [archiveMail](mailintent/archivemail.md): An intent schema that archives one or more email messages.
- [createDraft](mailintent/createdraft.md): An intent schema that opens an email composer to draft an email.
- [deleteDraft](mailintent/deletedraft.md): An intent schema that deletes one or more email drafts.
- [deleteMail](mailintent/deletemail.md): An intent schema that deletes one or more email messages.
- [forwardMail](mailintent/forwardmail.md): An intent schema that opens an email composer to forward an email.
- [openDraft](mailintent/opendraft.md): An intent schema that opens an email draft.
- [openMessage](mailintent/openmessage.md): An intent schema that opens an email message.
- [replyMail](mailintent/replymail.md): An intent schema that opens an email composer to reply to an email.
- [saveDraft](mailintent/savedraft.md): An intent schema that saves an email draft.
- [sendDraft](mailintent/senddraft.md): An intent schema that sends an email draft or schedules it to be sent later.
- [updateDraft](mailintent/updatedraft.md): An intent schema that makes updates to an email draft.
- [updateMail](mailintent/updatemail.md): An intent schema that makes updates to one or more existing email messages by modifying the status, flags, and location.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [archiveMail](mailintent/archivemail.md): An intent schema that archives one or more email messages.
- [createDraft](mailintent/createdraft.md): An intent schema that opens an email composer to draft an email.
- [deleteDraft](mailintent/deletedraft.md): An intent schema that deletes one or more email drafts.
- [deleteMail](mailintent/deletemail.md): An intent schema that deletes one or more email messages.
- [forwardMail](mailintent/forwardmail.md): An intent schema that opens an email composer to forward an email.
- [openDraft](mailintent/opendraft.md): An intent schema that opens an email draft.
- [openMessage](mailintent/openmessage.md): An intent schema that opens an email message.
- [replyMail](mailintent/replymail.md): An intent schema that opens an email composer to reply to an email.
- [saveDraft](mailintent/savedraft.md): An intent schema that saves an email draft.
- [sendDraft](mailintent/senddraft.md): An intent schema that sends an email draft or schedules it to be sent later.
- [updateDraft](mailintent/updatedraft.md): An intent schema that makes updates to an email draft.
- [updateMail](mailintent/updatemail.md): An intent schema that makes updates to one or more existing email messages by modifying the status, flags, and location.
