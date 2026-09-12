> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/addressfamilynotsupported](https://developer.apple.com/documentation/system/errno/addressfamilynotsupported)

# addressFamilyNotSupported

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The address family isn’t supported by the protocol family.

## Declaration

```swift
static var addressFamilyNotSupported: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

An address incompatible with the requested protocol was used. For example, you shouldn’t necessarily expect to be able to use name server addresses with ARPA Internet protocols.

The corresponding C error is `EAFNOSUPPORT`.

## See Also

### Network Address Errors

- [addressInUse](addressinuse.md): Address already in use.
- [addressNotAvailable](addressnotavailable.md): Can’t assign the requested address.
- [addressRequired](addressrequired.md): Destination address required.
