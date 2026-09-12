> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationcontextflags](https://developer.apple.com/documentation/security/authorizationcontextflags)

# AuthorizationContextFlags

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The flags that specify whether authentication data should be made available to the authorization client.

## Declaration

```objectivec
enum AuthorizationContextFlags : UInt32;
```

## Topics

### Constants

- [kAuthorizationContextFlagExtractable](authorizationcontextflags/kauthorizationcontextflagextractable.md): It is possible for the authorization client to use the [AuthorizationCopyInfo](authorizationcopyinfo%28______%29.md) function to obtain the value.
- [kAuthorizationContextFlagVolatile](authorizationcontextflags/kauthorizationcontextflagvolatile.md): The value is not saved for the authorization client.
- [kAuthorizationContextFlagSticky](authorizationcontextflags/kauthorizationcontextflagsticky.md): This data persists through an interrupted or failed evaluation.
