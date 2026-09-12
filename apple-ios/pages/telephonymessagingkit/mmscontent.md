> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmscontent](https://developer.apple.com/documentation/telephonymessagingkit/mmscontent)

# MMSContent

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that holds the content of an MMS message.

## Declaration

```swift
struct MMSContent
```

## Mentioned In

- [Creating a carrier messaging app](creating-a-carrier-messaging-app.md)

<a id="overview"></a>

## Overview

You can use this structure when sending and receiving MMS messages.

## Topics

### Creating an MMS content instance

- [init()](mmscontent/init%28%29.md): Creates an empty MMS content instance.
- [init(parts:recipients:subject:)](mmscontent/init%28parts_recipients_subject_%29.md): Creates an MMS content instance with the provided values.

### Accessing content properties

- [parts](mmscontent/parts.md): The individual parts of the MMS message.
- [MMSPartContent](mmspartcontent.md): A structure that defines custom headers within MMS content.
- [subject](mmscontent/subject.md): The subject of the MMS message.
- [headers](mmscontent/headers.md): Additional headers in a received MMS message, as a key-value dictionary of strings.

### Accessing message participants

- [from](mmscontent/from.md): The sender of the MMS message.
- [recipients](mmscontent/recipients.md): The recipients of the MMS message, as an array of MMS handles.
- [MMSHandle](mmshandle.md): A structure that represents an MMS address.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing message content

- [content](mmsmessage/content.md): The body content of the message.
