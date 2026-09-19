> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/componentdontregister

# componentDontRegister

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var componentDontRegister: Int { get }
```

## See Also

### Result Codes

- [invalidComponentID](invalidcomponentid.md): Invalid component ID.
- [validInstancesExist](validinstancesexist.md): This component has open connections.
- [componentNotCaptured](componentnotcaptured.md): This component has not been captured.
- [unresolvedComponentDLLErr](unresolvedcomponentdllerr.md)
- [retryComponentRegistrationErr](retrycomponentregistrationerr.md)
- [badComponentSelector](badcomponentselector.md): Component does not support the specified request code.
- [badComponentInstance](badcomponentinstance.md): Invalid component passed to Component Manager.
