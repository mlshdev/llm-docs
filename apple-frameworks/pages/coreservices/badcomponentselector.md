> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/badcomponentselector](https://developer.apple.com/documentation/coreservices/badcomponentselector)

# badComponentSelector

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Component does not support the specified request code.

## Declaration

```swift
var badComponentSelector: Int { get }
```

## See Also

### Result Codes

- [invalidComponentID](invalidcomponentid.md): Invalid component ID.
- [validInstancesExist](validinstancesexist.md): This component has open connections.
- [componentNotCaptured](componentnotcaptured.md): This component has not been captured.
- [componentDontRegister](componentdontregister.md)
- [unresolvedComponentDLLErr](unresolvedcomponentdllerr.md)
- [retryComponentRegistrationErr](retrycomponentregistrationerr.md)
- [badComponentInstance](badcomponentinstance.md): Invalid component passed to Component Manager.
