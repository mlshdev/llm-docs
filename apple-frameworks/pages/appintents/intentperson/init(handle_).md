> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentperson/init(handle:)](https://developer.apple.com/documentation/appintents/intentperson/init(handle:))

# init(handle:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Initializes an `IntentPerson` from a raw handle, like a phone number or an email address. Use this initializer when the value is not linked to a known contact.

## Declaration

```swift
init(handle: IntentPerson.Handle)
```

## See Also

### Creating a handle

- [init(emailAddress:label:)](handle-swift.struct/init%28emailaddress_label_%29.md)
- [init(phoneNumber:label:)](handle-swift.struct/init%28phonenumber_label_%29.md)
- [init(identifier:name:handle:aliases:isMe:image:)](init%28identifier_name_handle_aliases_isme_image_%29.md)
- [init(\_:label:)](handle-swift.struct/init%28__label_%29.md)
- [init(applicationDefined:label:)](handle-swift.struct/init%28applicationdefined_label_%29.md)
