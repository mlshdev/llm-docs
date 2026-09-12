> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct/write(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentiallargeblobassertioninput-swift.struct/write(_:))

# write(\_:)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An operation to write the blob value, overwriting any existing value.

## Declaration

```swift
static func write(_ data: Data) -> ASAuthorizationPublicKeyCredentialLargeBlobAssertionInput
```

## Parameters

- `data`: The data to write.

## See Also

### Using assertion inputs

- [read](read.md): An operation to read the existing blob value.
