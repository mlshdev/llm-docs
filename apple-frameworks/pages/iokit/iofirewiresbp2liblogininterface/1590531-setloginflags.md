> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590531-setloginflags](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590531-setloginflags)

# setLoginFlags

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets login configuration flags.

## Declaration

```objectivec
void (*setLoginFlags)(void *self, UInt32 flags);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `flags`: the login configuration flags.

<a id="discussion"></a>

## Discussion

Configures the login behavior according to the provided flags. Currently two flags are defined for this API. kFWSBP2ExclusiveLogin sets the exclusive login bit in the login ORB. kFWSBP2DontSynchronizeMgmtAgent allows simultaneous logins or reconnects to LUNs with a common management agent (ie LUNs in the same unit directory).
