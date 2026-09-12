> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorymessage/payload](https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/payload)

# AccessoryMessage.Payload

**Framework:** Accessory Transport Extension  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that represents a single data payload within an accessory message.

## Declaration

```swift
struct Payload
```

<a id="overview"></a>

## Overview

The [AccessoryMessage](../accessorymessage.md) structure’s [payloads](payloads.md) property contains an array of this type.

## Topics

### Creating a payload

- [init(transport:data:)](payload/init%28transport_data_%29.md): Initializes a payload with data and a transport preference.

### Accessing payload content

- [data](payload/data.md): A data object that contains the payload content.
- [transport](payload/transport.md): A transport method for delivering the payload.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing message content

- [payloads](payloads.md): An array of payload objects that comprise the message.
