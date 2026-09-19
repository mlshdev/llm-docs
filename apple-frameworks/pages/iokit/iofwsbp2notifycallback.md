> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofwsbp2notifycallback

# IOFWSBP2NotifyCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef void (*IOFWSBP2NotifyCallback)(void *refCon, FWSBP2NotifyParams *params);
```

## Parameters

- `refCon`: Reference constant supplied when the notification was registered.
- `params`: FWSBP2NotifyParams containing notification information.

## See Also

### Callbacks

- [IOFWSBP2FetchAgentWriteCallback](iofwsbp2fetchagentwritecallback.md)
- [IOFWSBP2LoginCallback](iofwsbp2logincallback.md)
- [IOFWSBP2LogoutCallback](iofwsbp2logoutcallback.md)
- [IOFWSBP2ORBAppendCallback](iofwsbp2orbappendcallback.md)
- [IOFWSBP2ORBCompleteCallback](iofwsbp2orbcompletecallback.md)
- [IOFWSBP2StatusCallback](iofwsbp2statuscallback.md)
