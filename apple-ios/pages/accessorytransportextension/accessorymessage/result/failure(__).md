> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorymessage/result/failure(_:)](https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/result/failure(_:))

# AccessoryMessage.Result.failure(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Case  
**Availability:** iOS 26.5+

A result indicating message transmission failed.

## Declaration

```swift
case failure(AccessoryMessage.Error)
```

## Parameters

- `error`: An error describing the transmission failure.

## See Also

### Identifying result types

- [AccessoryMessage.Result.success](success.md): A result indicating successful message transmission to the accessory.
