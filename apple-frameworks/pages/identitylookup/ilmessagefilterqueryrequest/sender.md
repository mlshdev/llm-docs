> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefilterqueryrequest/sender](https://developer.apple.com/documentation/identitylookup/ilmessagefilterqueryrequest/sender)

# sender (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The sender of the message.

## Declaration

```swift
var sender: String? { get }
```

## See Also

### Getting Information About a Message

- [messageBody](messagebody.md): The body of a message received from an unknown sender.
- [receiverISOCountryCode](receiverisocountrycode.md): The ISO Country Code of the receiving phone number, in format specified by the ISO 3166-2 standard.

# sender (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The sender of the message.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * sender;
```

## See Also

### Getting Information About a Message

- [messageBody](messagebody.md): The body of a message received from an unknown sender.
- [receiverISOCountryCode](receiverisocountrycode.md): The ISO Country Code of the receiving phone number, in format specified by the ISO 3166-2 standard.
