> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516476-request_codes](https://developer.apple.com/documentation/coreservices/1516476-request_codes)

# Request Codes

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [kComponentOpenSelect](1516476-request_codes/kcomponentopenselect.md): Deprecated. A request to open a connection. Your component must respond to this request code.
- [kComponentCloseSelect](1516476-request_codes/kcomponentcloseselect.md): Deprecated. A request to close a connection. Your component must respond to this request code.
- [kComponentCanDoSelect](1516476-request_codes/kcomponentcandoselect.md): Deprecated. A request to determine whether your component supports a particular request. Your component must respond to this request code
- [kComponentVersionSelect](1516476-request_codes/kcomponentversionselect.md): Deprecated. A request to return your component’s version number. Your component must respond to this request code.
- [kComponentRegisterSelect](1516476-request_codes/kcomponentregisterselect.md): Deprecated. A request to determine whether your component can operate in the current environment. Your component may or may not respond to this request code.
- [kComponentTargetSelect](1516476-request_codes/kcomponenttargetselect.md): Deprecated. A request to call another component whenever your component would call itself. Your component may or may not respond to this request code.
- [kComponentUnregisterSelect](1516476-request_codes/kcomponentunregisterselect.md): Deprecated. A request to perform any operations necessary as a result of your component being unregistered. Your component may or may not respond to this request code
- [kComponentGetMPWorkFunctionSelect](1516476-request_codes/kcomponentgetmpworkfunctionselect.md): Deprecated.
- [kComponentExecuteWiredActionSelect](1516476-request_codes/kcomponentexecutewiredactionselect.md): Deprecated.
- [kComponentGetPublicResourceSelect](1516476-request_codes/kcomponentgetpublicresourceselect.md): Deprecated.
