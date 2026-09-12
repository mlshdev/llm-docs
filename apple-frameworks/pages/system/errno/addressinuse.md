> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/addressinuse](https://developer.apple.com/documentation/system/errno/addressinuse)

# addressInUse

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Address already in use.

## Declaration

```swift
static var addressInUse: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

Only one use of each address is normally permitted.

The corresponding C error is `EADDRINUSE`.

## See Also

### Network Address Errors

- [addressFamilyNotSupported](addressfamilynotsupported.md): The address family isn’t supported by the protocol family.
- [addressNotAvailable](addressnotavailable.md): Can’t assign the requested address.
- [addressRequired](addressrequired.md): Destination address required.
