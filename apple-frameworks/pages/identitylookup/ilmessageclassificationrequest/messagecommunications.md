> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessageclassificationrequest/messagecommunications](https://developer.apple.com/documentation/identitylookup/ilmessageclassificationrequest/messagecommunications)

# messageCommunications (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The messages the user selected to report.

## Declaration

```swift
var messageCommunications: [ILMessageCommunication] { get }
```

<a id="Discussion"></a>

## Discussion

The system sorts the messages by the date received.

# messageCommunications (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The messages the user selected to report.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<ILMessageCommunication *> * messageCommunications;
```

<a id="Discussion"></a>

## Discussion

The system sorts the messages by the date received.
