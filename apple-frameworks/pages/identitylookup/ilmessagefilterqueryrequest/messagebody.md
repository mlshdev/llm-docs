> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefilterqueryrequest/messagebody](https://developer.apple.com/documentation/identitylookup/ilmessagefilterqueryrequest/messagebody)

# messageBody (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The body of a message received from an unknown sender.

## Declaration

```swift
var messageBody: String? { get }
```

## See Also

### Getting Information About a Message

- [sender](sender.md): The sender of the message.
- [receiverISOCountryCode](receiverisocountrycode.md): The ISO Country Code of the receiving phone number, in format specified by the ISO 3166-2 standard.

# messageBody (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The body of a message received from an unknown sender.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * messageBody;
```

## See Also

### Getting Information About a Message

- [sender](sender.md): The sender of the message.
- [receiverISOCountryCode](receiverisocountrycode.md): The ISO Country Code of the receiving phone number, in format specified by the ISO 3166-2 standard.
