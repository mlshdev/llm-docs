> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sechostremoveguest](https://developer.apple.com/documentation/security/sechostremoveguest)

# SecHostRemoveGuest

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.6)

Removes a guest from a host.

## Declaration

```objectivec
OSStatus SecHostRemoveGuest(SecGuestRef host, SecGuestRef guest, SecCSFlags flags);
```

## Parameters

- `host`: The guest code object of the host of the guest. You cannot specify a host of a host here except in the case of a dedicated host. For a dedicated host, the dedicated host is automatically substituted for its guest. See [kSecCSDedicatedHost](kseccsdedicatedhost.md) for a discussion of dedicated hosts.
- `guest`: The guest code object for the guest whose guest relationship you wish to terminate.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function removes all memory of the guest-host relationship from the Code Signing Services hosting system. You cannot remove a dedicated guest. The specified guest must have been created using the [SecHostCreateGuest](sechostcreateguest.md) function. If you remove a guest that is also a host, all of the guest’s guests are removed, recursively, as well, even if one or more of those guests are dedicated hosts.

## See Also

### Related Documentation

- [SecHostCreateGuest](sechostcreateguest.md): Deprecated. Creates a new guest and describes its initial properties.
