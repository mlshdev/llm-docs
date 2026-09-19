> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590484-submitlogout

# submitLogout

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Attempts to logout of the LUN.

## Declaration

```objectivec
IOReturn (*submitLogout)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if logout has successfully begun.

<a id="discussion"></a>

## Discussion

This call begins the logout process. If kIOReturnSuccess is returned from this call then the logoutCompletion routine will be called when the logout completes (successfully or unsuccesfully).
