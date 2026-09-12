> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofwsbp2orbcompletecallback](https://developer.apple.com/documentation/iokit/iofwsbp2orbcompletecallback)

# IOFWSBP2ORBCompleteCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef void (*IOFWSBP2ORBCompleteCallback)(void *refCon, IOReturn status, void *orb);
```

## Parameters

- `refCon`: Reference constant supplied when the notification was registered.
- `status`: Indicates success or failure of operation.
- `orb`: refCon set on management orb.

## See Also

### Callbacks

- [IOFWSBP2FetchAgentWriteCallback](iofwsbp2fetchagentwritecallback.md)
- [IOFWSBP2LoginCallback](iofwsbp2logincallback.md)
- [IOFWSBP2LogoutCallback](iofwsbp2logoutcallback.md)
- [IOFWSBP2NotifyCallback](iofwsbp2notifycallback.md)
- [IOFWSBP2ORBAppendCallback](iofwsbp2orbappendcallback.md)
- [IOFWSBP2StatusCallback](iofwsbp2statuscallback.md)
