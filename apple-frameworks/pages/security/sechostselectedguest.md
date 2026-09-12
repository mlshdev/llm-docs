> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sechostselectedguest](https://developer.apple.com/documentation/security/sechostselectedguest)

# SecHostSelectedGuest

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.6)

Retrieves the handle for the guest currently selected for the calling thread.

## Declaration

```objectivec
OSStatus SecHostSelectedGuest(SecCSFlags flags, SecGuestRef *guestRef);
```

## Parameters

- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `guestRef`: On return, the guest code object of the current selected guest for the calling thread. If no guest is active on this thread (that is, the thread is acting for the host), the value returned is [kSecNoGuest](ksecnoguest.md).

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function may be called in either dynamic hosting mode or proxy hosting mode. If the host has more than one guest, it can set a different selected guest for each thread.
