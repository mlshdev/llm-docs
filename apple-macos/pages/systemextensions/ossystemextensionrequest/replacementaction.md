> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequest/replacementaction](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequest/replacementaction)

# OSSystemExtensionRequest.ReplacementAction (Swift)

**Framework:** System Extensions  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

Actions for describing how the extension manager should resolve a version conflict.

## Declaration

```swift
enum ReplacementAction
```

## Topics

### Replacement Actions

- [OSSystemExtensionRequest.ReplacementAction.cancel](replacementaction/cancel.md): An action that tells the manager to cancel replacement of a system extension.
- [OSSystemExtensionRequest.ReplacementAction.replace](replacementaction/replace.md): An action that tells the manager to replace an existing system extension.

### Initializers

- [init(rawValue:)](replacementaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Indeterminate Installs

- [requestNeedsUserApproval(\_:)](../ossystemextensionrequestdelegate/requestneedsuserapproval%28__%29.md): Tells the delegate that the user must grant approval before the manager can activate the extension.
- [request(\_:actionForReplacingExtension:withExtension:)](../ossystemextensionrequestdelegate/request%28__actionforreplacingextension_withextension_%29.md): Tells the delegate that the user has a different version of the extension installed on their system.
- [OSSystemExtensionProperties](../ossystemextensionproperties.md): Properties that identify a specific version of a system extension.

# OSSystemExtensionReplacementAction (Objective-C)

**Framework:** System Extensions  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

Actions for describing how the extension manager should resolve a version conflict.

## Declaration

```objectivec
enum OSSystemExtensionReplacementAction : NSInteger;
```

## Topics

### Replacement Actions

- [OSSystemExtensionReplacementActionCancel](replacementaction/cancel.md): An action that tells the manager to cancel replacement of a system extension.
- [OSSystemExtensionReplacementActionReplace](replacementaction/replace.md): An action that tells the manager to replace an existing system extension.

## See Also

### Handling Indeterminate Installs

- [requestNeedsUserApproval:](../ossystemextensionrequestdelegate/requestneedsuserapproval%28__%29.md): Tells the delegate that the user must grant approval before the manager can activate the extension.
- [request:actionForReplacingExtension:withExtension:](../ossystemextensionrequestdelegate/request%28__actionforreplacingextension_withextension_%29.md): Tells the delegate that the user has a different version of the extension installed on their system.
- [OSSystemExtensionProperties](../ossystemextensionproperties.md): Properties that identify a specific version of a system extension.
