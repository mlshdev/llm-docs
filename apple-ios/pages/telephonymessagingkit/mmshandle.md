> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmshandle](https://developer.apple.com/documentation/telephonymessagingkit/mmshandle)

# MMSHandle

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents an MMS address.

## Declaration

```swift
struct MMSHandle
```

## Topics

### Creating a handle

- [init(phoneNumber:)](mmshandle/init%28phonenumber_%29.md): Initializes a handle instance with the given phone number.

### Accessing handle properties

- [phoneNumber](mmshandle/phonenumber.md): The phone number for the handle.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing message participants

- [from](mmscontent/from.md): The sender of the MMS message.
- [recipients](mmscontent/recipients.md): The recipients of the MMS message, as an array of MMS handles.
