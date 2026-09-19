> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/result/failure(_:)

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
