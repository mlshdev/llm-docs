> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/addressnotavailable](https://developer.apple.com/documentation/system/errno/addressnotavailable)

# addressNotAvailable

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Can’t assign the requested address.

## Declaration

```swift
static var addressNotAvailable: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

This error normally results from an attempt to create a socket with an address that isn’t on this machine.

The corresponding C error is `EADDRNOTAVAIL`.

## See Also

### Network Address Errors

- [addressFamilyNotSupported](addressfamilynotsupported.md): The address family isn’t supported by the protocol family.
- [addressInUse](addressinuse.md): Address already in use.
- [addressRequired](addressrequired.md): Destination address required.
