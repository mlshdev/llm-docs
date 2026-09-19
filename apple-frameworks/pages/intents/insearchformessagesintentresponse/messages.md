> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insearchformessagesintentresponse/messages

# messages (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The array of messages matching the search parameters.

## Declaration

```swift
var messages: [INMessage]? { get set }
```

<a id="Discussion"></a>

## Discussion

For successful searches, use this property to return messages matching the search parameters. Provide as much information in each [INMessage](../inmessage.md) object as you can. Siri may present or read the message details to the user, depending on the messages and how Siri is communicating with the user.

# messages (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The array of messages matching the search parameters.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INMessage *> * messages;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INMessage *> * messages;
```

<a id="Discussion"></a>

## Discussion

For successful searches, use this property to return messages matching the search parameters. Provide as much information in each [INMessage](../inmessage.md) object as you can. Siri may present or read the message details to the user, depending on the messages and how Siri is communicating with the user.
