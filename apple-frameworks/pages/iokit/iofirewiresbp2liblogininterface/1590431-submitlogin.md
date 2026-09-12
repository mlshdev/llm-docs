> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590431-submitlogin](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590431-submitlogin)

# submitLogin

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Attempts to login to the LUN.

## Declaration

```objectivec
IOReturn (*submitLogin)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess login has successlly begun.

<a id="discussion"></a>

## Discussion

This call begins the login process. The login object should be configured prior to this call. If kIOReturnSuccess is returned from this call then the loginCompletion routine will be called when the login completes (successfully or unsuccesfully).
