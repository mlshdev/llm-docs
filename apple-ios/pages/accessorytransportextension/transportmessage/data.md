> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/transportmessage/data](https://developer.apple.com/documentation/accessorytransportextension/transportmessage/data)

# data

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A data object that contains the message content.

## Declaration

```swift
let data: Data
```

<a id="discussion"></a>

## Discussion

For messages from the system containing sensitive data, this data is encrypted and ready for transmission to your accessory. For messages from your accessory containing sensitive data, encrypt this data before creating the transport message.

## See Also

### Accessing message content

- [sessionID](sessionid.md): A unique identifier for the message’s capability session.
