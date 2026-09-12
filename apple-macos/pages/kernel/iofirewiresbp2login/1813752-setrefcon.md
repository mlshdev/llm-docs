> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2login/1813752-setrefcon](https://developer.apple.com/documentation/kernel/iofirewiresbp2login/1813752-setrefcon)

# setRefCon

**Interface language:** Objective-C

**Framework:** Kernel

Sets the login refCon.

## Declaration

```objectivec
virtual void setRefCon(
 void *refCon ); 
```

## Parameters

- `refCon`: a user defined value.

<a id="overview"></a>

## Overview

Sets a user defined value on the login that can be retrieved later with the method getRefCon.

## See Also

### Miscellaneous

- [createORB](1813411-createorb.md): Creates a new IOFireWireSBP2ORB for this login.
- [enableUnsolicitedStatus](1813441-enableunsolicitedstatus.md): Enables unsolicited status.
- [getLoginFlags](1813479-getloginflags.md): Returns the currently set login flags.
- [getLoginID](1813507-getloginid.md): Returns the current login ID.
- [getMaxCommandBlockSize](1813539-getmaxcommandblocksize.md): Returns the maximum command block size.
- [getMaxPayloadSize](1813578-getmaxpayloadsize.md): Returns the currently set maximum payload size.
- [getReconnectTime](1813610-getreconnecttime.md): Returns the currently set reconnect time.
- [getRefCon](1813628-getrefcon.md): Returns the refCon set with setRefCon.
- [getStatusNotifyProc](1813642-getstatusnotifyproc.md): Returns the callback to be called on normal command status.
- [getUnsolicitedStatusNotifyProc](1813655-getunsolicitedstatusnotifyproc.md): Returns the callback to be called on unsolicited status.
- [release](1813662-release.md): Primary implementation of the release mechanism.
- [ringDoorbell](1813671-ringdoorbell.md): Rings the doorbell on the LUN.
- [setBusyTimeoutRegisterValue](1813679-setbusytimeoutregistervalue.md): Sets the value to be written to the BUSY_TIMEOUT register.
- [setFetchAgentResetCompletion](1813686-setfetchagentresetcompletion.md): Sets the callback to be called when a fetch agent reset completes.
- [setFetchAgentWriteCompletion](1813693-setfetchagentwritecompletion.md): Sets the callback to be called when the fetch agent write completes.
- [setLoginCompletion](1813704-setlogincompletion.md): Sets the callback to be called when a login attempt is complete.
- [setLoginFlags](1813712-setloginflags.md): Sets login configuration flags.
- [setLoginRetryCountAndDelayTime](1813721-setloginretrycountanddelaytime.md): Sets login retry behavior.
- [setLogoutCompletion](1813730-setlogoutcompletion.md): Sets the callback to be called when a logout attempt is complete.
- [setMaxPayloadSize](1813735-setmaxpayloadsize.md): Sets the maximum data transfer length for a normal command ORB.
- [setPassword(IOMemoryDescriptor \*)](1813740-setpassword.md): Sets the login password.
- [setPassword(void \*, UInt32)](1813743-setpassword.md): Sets the login password.
- [setReconnectTime](1813747-setreconnecttime.md): Sets the desired reconnect duration.
- [setStatusNotifyProc](1813755-setstatusnotifyproc.md): Sets the callback to be called on normal command status.
- [setUnsolicitedStatusNotifyProc](1813759-setunsolicitedstatusnotifyproc.md): Sets the callback to be called on normal command status.
- [submitFetchAgentReset](1813764-submitfetchagentreset.md): Resets the LUN's fetch agent.
- [submitLogin](1813766-submitlogin.md): Attempts to login to the LUN.
- [submitLogout](1813770-submitlogout.md): Attempts to logout of the LUN.
- [submitORB](1813772-submitorb.md): Submits the given orb
