> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1560069-anonymous/badcomponentselector](https://developer.apple.com/documentation/coreservices/1560069-anonymous/badcomponentselector)

# badComponentSelector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Component does not support the specified request code.

## Declaration

```objectivec
badComponentSelector = (int)0x80008002
```

## See Also

### Result Codes

- [invalidComponentID](../1559940-anonymous/invalidcomponentid.md): Invalid component ID.
- [validInstancesExist](../1559940-anonymous/validinstancesexist.md): This component has open connections.
- [componentNotCaptured](../1559940-anonymous/componentnotcaptured.md): This component has not been captured.
- [componentDontRegister](../1559940-anonymous/componentdontregister.md)
- [unresolvedComponentDLLErr](../1559940-anonymous/unresolvedcomponentdllerr.md)
- [retryComponentRegistrationErr](../1559940-anonymous/retrycomponentregistrationerr.md)
- [badComponentInstance](badcomponentinstance.md): Invalid component passed to Component Manager.
