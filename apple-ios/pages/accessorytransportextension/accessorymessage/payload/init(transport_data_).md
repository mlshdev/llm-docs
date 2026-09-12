> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorymessage/payload/init(transport:data:)](https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/payload/init(transport:data:))

# init(transport:data:)

**Framework:** Accessory Transport Extension  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes a payload with data and a transport preference.

## Declaration

```swift
init(transport: AccessoryTransport = .bluetooth, data: Data)
```

## Parameters

- `transport`: The preferred transport method for the payload. The default is Bluetooth.
- `data`: The payload content.

<a id="discussion"></a>

## Discussion

If the specified transport method isn’t available, the system chooses any available transport method.
