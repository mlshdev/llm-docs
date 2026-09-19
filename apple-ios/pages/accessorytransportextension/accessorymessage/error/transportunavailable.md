> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/error/transportunavailable

# AccessoryMessage.Error.transportUnavailable

**Framework:** Accessory Transport Extension  
**Kind:** Case  
**Availability:** iOS 26.5+

An error indicating the transport is unavailable.

## Declaration

```swift
case transportUnavailable
```

<a id="discussion"></a>

## Discussion

The system attempts delivery on a different transport if available when you return this error.

## See Also

### Identifying error types

- [AccessoryMessage.Error.transportFailed](transportfailed.md): An error indicating the transport failed but may recover.
