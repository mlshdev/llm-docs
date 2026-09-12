> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrordomaincalldirectorymanager](https://developer.apple.com/documentation/callkit/cxerrordomaincalldirectorymanager)

# CXErrorDomainCallDirectoryManager (Swift)

**Framework:** CallKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Domain for errors when interacting with a call directory manager.

## Declaration

```swift
let CXErrorDomainCallDirectoryManager: String
```

<a id="Discussion"></a>

## Discussion

See [CallKit Constants](callkit-constants.md) for possible error codes.

## See Also

### Errors

- [CXCallDirectoryManager.EnabledStatus](cxcalldirectorymanager/enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtension(withIdentifier:completionHandler:)](cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.
- [CXErrorCodeCallDirectoryManagerError](cxerrorcodecalldirectorymanagererror-swift.struct.md): Errors when interacting with a call directory manager.
- [CXErrorCodeCallDirectoryManagerError.Code](cxerrorcodecalldirectorymanagererror-swift.struct/code.md): Error codes the CallKit framework returns.

# CXErrorDomainCallDirectoryManager (Objective-C)

**Framework:** CallKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Domain for errors when interacting with a call directory manager.

## Declaration

```objectivec
extern NSErrorDomain const CXErrorDomainCallDirectoryManager;
```

<a id="Discussion"></a>

## Discussion

See [CallKit Constants](callkit-constants.md) for possible error codes.

## See Also

### Errors

- [CXCallDirectoryEnabledStatus](cxcalldirectorymanager/enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtensionWithIdentifier:completionHandler:](cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.
- [CXErrorCodeCallDirectoryManagerError](cxerrorcodecalldirectorymanagererror-swift.struct/code.md): Error codes the CallKit framework returns.
