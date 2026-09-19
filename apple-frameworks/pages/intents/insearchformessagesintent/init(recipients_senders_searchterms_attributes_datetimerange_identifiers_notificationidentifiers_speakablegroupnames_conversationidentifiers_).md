> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insearchformessagesintent/init(recipients:senders:searchterms:attributes:datetimerange:identifiers:notificationidentifiers:speakablegroupnames:conversationidentifiers:)

# init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames:conversationIdentifiers:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
init(recipients: [INPerson]?, senders: [INPerson]?, searchTerms: [String]?, attributes: INMessageAttributeOptions = [], dateTimeRange: INDateComponentsRange?, identifiers: [String]?, notificationIdentifiers: [String]?, speakableGroupNames: [INSpeakableString]?, conversationIdentifiers: [String]?)
```
