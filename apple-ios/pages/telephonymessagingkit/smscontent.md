> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smscontent](https://developer.apple.com/documentation/telephonymessagingkit/smscontent)

# SMSContent

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that holds the content of an SMS message.

## Declaration

```swift
struct SMSContent
```

## Mentioned In

- [Creating a carrier messaging app](creating-a-carrier-messaging-app.md)

## Topics

### Creating SMS content

- [init(body:)](smscontent/init%28body_%29.md): Initializes a content instance with the given message body.

### Accessing content properties

- [body](smscontent/body.md): The body of the SMS message.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing message content

- [content](smsmessage/content.md): The textual content of the message.
