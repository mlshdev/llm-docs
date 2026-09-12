> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequestdelegate/requestneedsuserapproval(_:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequestdelegate/requestneedsuserapproval(_:))

# requestNeedsUserApproval(\_:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate that the user must grant approval before the manager can activate the extension.

## Declaration

```swift
func requestNeedsUserApproval(_ request: OSSystemExtensionRequest)
```

<a id="Discussion"></a>

## Discussion

Activating an extension may require explicit user approval to proceed. For example, this occurs when the user hasn’t approved the extension. The manager calls this method to notify the delegate. Activation remains pending until the user grants or denies permission, or until the app quits.

## See Also

### Handling Indeterminate Installs

- [request(\_:actionForReplacingExtension:withExtension:)](request%28__actionforreplacingextension_withextension_%29.md): Tells the delegate that the user has a different version of the extension installed on their system.
- [OSSystemExtensionProperties](../ossystemextensionproperties.md): Properties that identify a specific version of a system extension.
- [OSSystemExtensionRequest.ReplacementAction](../ossystemextensionrequest/replacementaction.md): Actions for describing how the extension manager should resolve a version conflict.

# requestNeedsUserApproval: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate that the user must grant approval before the manager can activate the extension.

## Declaration

```objectivec
- (void) requestNeedsUserApproval:(OSSystemExtensionRequest *) request;
```

<a id="Discussion"></a>

## Discussion

Activating an extension may require explicit user approval to proceed. For example, this occurs when the user hasn’t approved the extension. The manager calls this method to notify the delegate. Activation remains pending until the user grants or denies permission, or until the app quits.

## See Also

### Handling Indeterminate Installs

- [request:actionForReplacingExtension:withExtension:](request%28__actionforreplacingextension_withextension_%29.md): Tells the delegate that the user has a different version of the extension installed on their system.
- [OSSystemExtensionProperties](../ossystemextensionproperties.md): Properties that identify a specific version of a system extension.
- [OSSystemExtensionReplacementAction](../ossystemextensionrequest/replacementaction.md): Actions for describing how the extension manager should resolve a version conflict.
