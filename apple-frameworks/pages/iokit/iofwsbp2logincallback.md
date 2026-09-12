> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofwsbp2logincallback](https://developer.apple.com/documentation/iokit/iofwsbp2logincallback)

# IOFWSBP2LoginCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef void (*IOFWSBP2LoginCallback)(void *refCon, FWSBP2LoginCompleteParams *params);
```

## Parameters

- `refCon`: Reference constant supplied when the notification was registered.
- `params`: Structure containing additional information about the status of the login.

## See Also

### Callbacks

- [IOFWSBP2FetchAgentWriteCallback](iofwsbp2fetchagentwritecallback.md)
- [IOFWSBP2LogoutCallback](iofwsbp2logoutcallback.md)
- [IOFWSBP2NotifyCallback](iofwsbp2notifycallback.md)
- [IOFWSBP2ORBAppendCallback](iofwsbp2orbappendcallback.md)
- [IOFWSBP2ORBCompleteCallback](iofwsbp2orbcompletecallback.md)
- [IOFWSBP2StatusCallback](iofwsbp2statuscallback.md)
