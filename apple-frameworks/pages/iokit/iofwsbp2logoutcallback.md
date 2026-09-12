> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofwsbp2logoutcallback](https://developer.apple.com/documentation/iokit/iofwsbp2logoutcallback)

# IOFWSBP2LogoutCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef void (*IOFWSBP2LogoutCallback)(void *refCon, FWSBP2LogoutCompleteParams *params);
```

## Parameters

- `refCon`: Reference constant supplied when the notification was registered.
- `params`: Structure containing additional information about the status of the logout.

## See Also

### Callbacks

- [IOFWSBP2FetchAgentWriteCallback](iofwsbp2fetchagentwritecallback.md)
- [IOFWSBP2LoginCallback](iofwsbp2logincallback.md)
- [IOFWSBP2NotifyCallback](iofwsbp2notifycallback.md)
- [IOFWSBP2ORBAppendCallback](iofwsbp2orbappendcallback.md)
- [IOFWSBP2ORBCompleteCallback](iofwsbp2orbcompletecallback.md)
- [IOFWSBP2StatusCallback](iofwsbp2statuscallback.md)
