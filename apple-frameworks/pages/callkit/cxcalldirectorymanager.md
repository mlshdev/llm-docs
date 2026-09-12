> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectorymanager](https://developer.apple.com/documentation/callkit/cxcalldirectorymanager)

# CXCallDirectoryManager (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

The programmatic interface to an object that manages a Call Directory app extension.

## Declaration

```swift
class CXCallDirectoryManager
```

## Topics

### Accessing the Shared Instance

- [sharedInstance](cxcalldirectorymanager/sharedinstance.md): Returns the shared call directory manager instance for the app.

### Working with a Call Directory App Extension

- [getEnabledStatusForExtension(withIdentifier:completionHandler:)](cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md): Asynchronously returns the enabled status of the extension with the specified identifier.
- [reloadExtension(withIdentifier:completionHandler:)](cxcalldirectorymanager/reloadextension%28withidentifier_completionhandler_%29.md): Asynchronously reloads the extension with the specified identifier.
- [CXCallDirectoryManager.EnabledStatus](cxcalldirectorymanager/enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtension(withIdentifier:completionHandler:)](cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.

### Opening the Settings App

- [openSettings(completionHandler:)](cxcalldirectorymanager/opensettings%28completionhandler_%29.md): Opens the iOS Settings app and shows the Call Blocking & Identification settings.

### Errors

- [CXCallDirectoryManager.EnabledStatus](cxcalldirectorymanager/enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtension(withIdentifier:completionHandler:)](cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.
- [CXErrorCodeCallDirectoryManagerError](cxerrorcodecalldirectorymanagererror-swift.struct.md): Errors when interacting with a call directory manager.
- [CXErrorCodeCallDirectoryManagerError.Code](cxerrorcodecalldirectorymanagererror-swift.struct/code.md): Error codes the CallKit framework returns.
- [CXErrorDomainCallDirectoryManager](cxerrordomaincalldirectorymanager.md): Domain for errors when interacting with a call directory manager.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Caller ID

- [Identifying and blocking calls](identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryProvider](cxcalldirectoryprovider.md): The principal object for a Call Directory app extension for a host app.
- [CXCallDirectoryExtensionContext](cxcalldirectoryextensioncontext.md): A programmatic interface for adding identification and blocking entries to a Call Directory app extension.
- [CXCallDirectoryExtensionContextDelegate](cxcalldirectoryextensioncontextdelegate.md): A collection of methods a Call Directory extension context object calls when a request fails.

# CXCallDirectoryManager (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The programmatic interface to an object that manages a Call Directory app extension.

## Declaration

```objectivec
@interface CXCallDirectoryManager : NSObject
```

## Topics

### Accessing the Shared Instance

- [sharedInstance](cxcalldirectorymanager/sharedinstance.md): Returns the shared call directory manager instance for the app.

### Working with a Call Directory App Extension

- [getEnabledStatusForExtensionWithIdentifier:completionHandler:](cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md): Asynchronously returns the enabled status of the extension with the specified identifier.
- [reloadExtensionWithIdentifier:completionHandler:](cxcalldirectorymanager/reloadextension%28withidentifier_completionhandler_%29.md): Asynchronously reloads the extension with the specified identifier.
- [CXCallDirectoryEnabledStatus](cxcalldirectorymanager/enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtensionWithIdentifier:completionHandler:](cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.

### Opening the Settings App

- [openSettingsWithCompletionHandler:](cxcalldirectorymanager/opensettings%28completionhandler_%29.md): Opens the iOS Settings app and shows the Call Blocking & Identification settings.

### Errors

- [CXCallDirectoryEnabledStatus](cxcalldirectorymanager/enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtensionWithIdentifier:completionHandler:](cxcalldirectorymanager/getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.
- [CXErrorCodeCallDirectoryManagerError](cxerrorcodecalldirectorymanagererror-swift.struct/code.md): Error codes the CallKit framework returns.
- [CXErrorDomainCallDirectoryManager](cxerrordomaincalldirectorymanager.md): Domain for errors when interacting with a call directory manager.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Caller ID

- [Identifying and blocking calls](identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryProvider](cxcalldirectoryprovider.md): The principal object for a Call Directory app extension for a host app.
- [CXCallDirectoryExtensionContext](cxcalldirectoryextensioncontext.md): A programmatic interface for adding identification and blocking entries to a Call Directory app extension.
- [CXCallDirectoryExtensionContextDelegate](cxcalldirectoryextensioncontextdelegate.md): A collection of methods a Call Directory extension context object calls when a request fails.
