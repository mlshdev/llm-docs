> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/addressrequired](https://developer.apple.com/documentation/system/errno/addressrequired)

# addressRequired

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Destination address required.

## Declaration

```swift
static var addressRequired: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A required address was omitted from a socket operation.

The corresponding C error is `EDESTADDRREQ`.

## See Also

### Network Address Errors

- [addressFamilyNotSupported](addressfamilynotsupported.md): The address family isn’t supported by the protocol family.
- [addressInUse](addressinuse.md): Address already in use.
- [addressNotAvailable](addressnotavailable.md): Can’t assign the requested address.
