> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionproperties](https://developer.apple.com/documentation/systemextensions/ossystemextensionproperties)

# OSSystemExtensionProperties (Swift)

**Framework:** System Extensions  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

Properties that identify a specific version of a system extension.

## Declaration

```swift
class OSSystemExtensionProperties
```

## Topics

### Identifying the Extension

- [bundleIdentifier](ossystemextensionproperties/bundleidentifier.md): The bundle identifier of the extension.
- [bundleVersion](ossystemextensionproperties/bundleversion.md): The bundle version of the extension.
- [bundleShortVersion](ossystemextensionproperties/bundleshortversion.md): The bundle short version string of the extension.

### Locating the Extension’s Installed Location

- [url](ossystemextensionproperties/url.md): The file URL of the extension bundle.

### Instance Properties

- [isAwaitingUserApproval](ossystemextensionproperties/isawaitinguserapproval.md)
- [isEnabled](ossystemextensionproperties/isenabled.md)
- [isUninstalling](ossystemextensionproperties/isuninstalling.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Handling Indeterminate Installs

- [requestNeedsUserApproval(\_:)](ossystemextensionrequestdelegate/requestneedsuserapproval%28__%29.md): Tells the delegate that the user must grant approval before the manager can activate the extension.
- [request(\_:actionForReplacingExtension:withExtension:)](ossystemextensionrequestdelegate/request%28__actionforreplacingextension_withextension_%29.md): Tells the delegate that the user has a different version of the extension installed on their system.
- [OSSystemExtensionRequest.ReplacementAction](ossystemextensionrequest/replacementaction.md): Actions for describing how the extension manager should resolve a version conflict.

# OSSystemExtensionProperties (Objective-C)

**Framework:** System Extensions  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

Properties that identify a specific version of a system extension.

## Declaration

```objectivec
@interface OSSystemExtensionProperties : NSObject
```

## Topics

### Identifying the Extension

- [bundleIdentifier](ossystemextensionproperties/bundleidentifier.md): The bundle identifier of the extension.
- [bundleVersion](ossystemextensionproperties/bundleversion.md): The bundle version of the extension.
- [bundleShortVersion](ossystemextensionproperties/bundleshortversion.md): The bundle short version string of the extension.

### Locating the Extension’s Installed Location

- [URL](ossystemextensionproperties/url.md): The file URL of the extension bundle.

### Instance Properties

- [isAwaitingUserApproval](ossystemextensionproperties/isawaitinguserapproval.md)
- [isEnabled](ossystemextensionproperties/isenabled.md)
- [isUninstalling](ossystemextensionproperties/isuninstalling.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Handling Indeterminate Installs

- [requestNeedsUserApproval:](ossystemextensionrequestdelegate/requestneedsuserapproval%28__%29.md): Tells the delegate that the user must grant approval before the manager can activate the extension.
- [request:actionForReplacingExtension:withExtension:](ossystemextensionrequestdelegate/request%28__actionforreplacingextension_withextension_%29.md): Tells the delegate that the user has a different version of the extension installed on their system.
- [OSSystemExtensionReplacementAction](ossystemextensionrequest/replacementaction.md): Actions for describing how the extension manager should resolve a version conflict.
