> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/mailintent/deletedraft](https://developer.apple.com/documentation/appintents/appschema/mailintent/deletedraft)

# deleteDraft

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that deletes one or more email drafts.

## Declaration

```swift
var deleteDraft: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `mail` domain and one of your app’s actions matches the `deleteDraft` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .mail.deleteDraft)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `deleteDraft` schema:

```swift
@AppIntent(schema: .mail.deleteDraft)
struct DeleteDraftIntent: DeleteIntent {
    var entities: [<#MailDraftEntity#>]

    func perform() async throws -> some IntentResult {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [archiveMail](archivemail.md): An intent schema that archives one or more email messages.
- [createDraft](createdraft.md): An intent schema that opens an email composer to draft an email.
- [deleteMail](deletemail.md): An intent schema that deletes one or more email messages.
- [forwardMail](forwardmail.md): An intent schema that opens an email composer to forward an email.
- [openDraft](opendraft.md): An intent schema that opens an email draft.
- [openMessage](openmessage.md): An intent schema that opens an email message.
- [replyMail](replymail.md): An intent schema that opens an email composer to reply to an email.
- [saveDraft](savedraft.md): An intent schema that saves an email draft.
- [sendDraft](senddraft.md): An intent schema that sends an email draft or schedules it to be sent later.
- [updateDraft](updatedraft.md): An intent schema that makes updates to an email draft.
- [updateMail](updatemail.md): An intent schema that makes updates to one or more existing email messages by modifying the status, flags, and location.
- [AppSchema.MailIntent](../mailintent.md): Identifies intent schemas in the mail domain.
