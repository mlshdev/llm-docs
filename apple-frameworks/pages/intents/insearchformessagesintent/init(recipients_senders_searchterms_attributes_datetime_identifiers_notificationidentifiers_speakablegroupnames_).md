> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/init(recipients:senders:searchterms:attributes:datetime:identifiers:notificationidentifiers:speakablegroupnames:)](https://developer.apple.com/documentation/intents/insearchformessagesintent/init(recipients:senders:searchterms:attributes:datetime:identifiers:notificationidentifiers:speakablegroupnames:))

# init(recipients:senders:searchTerms:attributes:dateTime:identifiers:notificationIdentifiers:speakableGroupNames:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 5.0)

> Use the designated initializer instead

## Declaration

```swift
convenience init(recipients: [INPerson]?, senders: [INPerson]?, searchTerms: [String]?, attributes: INMessageAttributeOptions = [], dateTime dateTimeRange: INDateComponentsRange?, identifiers: [String]?, notificationIdentifiers: [String]?, speakableGroupNames: [INSpeakableString]?)
```

# initWithRecipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.14) · tvOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 5.0)

> Use the designated initializer instead

## Declaration

```objectivec
- (instancetype) initWithRecipients:(NSArray<INPerson *> *) recipients senders:(NSArray<INPerson *> *) senders searchTerms:(NSArray<NSString *> *) searchTerms attributes:(INMessageAttributeOptions) attributes dateTimeRange:(INDateComponentsRange *) dateTimeRange identifiers:(NSArray<NSString *> *) identifiers notificationIdentifiers:(NSArray<NSString *> *) notificationIdentifiers speakableGroupNames:(NSArray<INSpeakableString *> *) speakableGroupNames;
```
