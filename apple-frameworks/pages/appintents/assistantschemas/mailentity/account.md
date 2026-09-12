> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/mailentity/account](https://developer.apple.com/documentation/appintents/assistantschemas/mailentity/account)

# account

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app entity describes an email account.

## Declaration

```swift
var account: some AssistantSchemas.Entity { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app entity implementation. The following example shows an app entity that conforms to the `.mail.account` schema:

```swift
@AppEntity(schema: .mail.account)
struct MailAccountEntity: AppEntity {
    struct Query: EntityStringQuery {
        func entities(for identifiers: [MailAccountEntity.ID]) async throws -> [MailAccountEntity] { [] }
        func entities(matching string: String) async throws -> [MailAccountEntity] { [] }
    }

    static var defaultQuery = Query()
    var displayRepresentation: DisplayRepresentation { "Mail Account" }

    let id = UUID()

    @Property
    var name: String

    @Property
    var emailAddress: String
}
```

For more information about the `.mail` app intent domain, see [Mail](../../app-schema-domain-mail.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
