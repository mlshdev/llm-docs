> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/assistantschemas/mailentity

# AssistantSchemas.MailEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Assistant schema conformance for app entities that describe email.

## Declaration

```swift
protocol MailEntity : AssistantSchemas.Model
```

## Topics

### Instance Properties

- [account](mailentity/account.md): Deprecated. The app entity describes an email account.
- [draft](mailentity/draft.md): Deprecated. The app entity describes an email draft.
- [mailbox](mailentity/mailbox.md): Deprecated. The app entity describes an email mailbox.
- [message](mailentity/message.md): Deprecated. The app entity describes an email message.

## Relationships

### Inherits From

- [AssistantSchemas.Model](model.md)

### Conforming Types

- [AssistantSchema.EntitySchema](../assistantschema/entityschema.md)
- [AssistantSchemas.EntitySchema](entityschema.md)
