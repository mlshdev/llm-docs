> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmscontent/init(parts:recipients:subject:)](https://developer.apple.com/documentation/telephonymessagingkit/mmscontent/init(parts:recipients:subject:))

# init(parts:recipients:subject:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Creates an MMS content instance with the provided values.

## Declaration

```swift
init(parts: [MMSPartContent], recipients: [MMSHandle], subject: String? = nil)
```

## Parameters

- `parts`: The parts of the MMS.
- `recipients`: An array of handles representing the recipients of the message.
- `subject`: The subject of the MMS. Omit this parameter to leave the subject empty.

## See Also

### Creating an MMS content instance

- [init()](init%28%29.md): Creates an empty MMS content instance.
