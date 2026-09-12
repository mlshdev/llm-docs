> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590488-setpassword](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590488-setpassword)

# setPassword

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the login password.

## Declaration

```objectivec
IOReturn (*setPassword)(void *self, void *buffer, UInt32 length);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `buffer`: a pointer to the password buffer.
- `length`: the length in bytes of the password buffer.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success.

<a id="discussion"></a>

## Discussion

Sets the login password using a buffer and a length. An alternate version exists that accepts an IOMemoryDescriptor. If the password length is 8 or less the password is copied directly into the login orb. If the length is greater than 8 the buffer is referenced by address in the login ORB. In this case the buffer is not copied and should remain allocated for the duration of the login attempt.
