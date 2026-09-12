> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentperson/handle-swift.struct/init(emailaddress:label:)](https://developer.apple.com/documentation/appintents/intentperson/handle-swift.struct/init(emailaddress:label:))

# init(emailAddress:label:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
init(emailAddress emailAddressString: String, label: IntentPerson.Handle.Label = .other)
```

## See Also

### Creating a handle

- [init(phoneNumber:label:)](init%28phonenumber_label_%29.md)
- [init(identifier:name:handle:aliases:isMe:image:)](../init%28identifier_name_handle_aliases_isme_image_%29.md)
- [init(handle:)](../init%28handle_%29.md): Initializes an `IntentPerson` from a raw handle, like a phone number or an email address. Use this initializer when the value is not linked to a known contact.
- [init(\_:label:)](init%28__label_%29.md)
- [init(applicationDefined:label:)](init%28applicationdefined_label_%29.md)
