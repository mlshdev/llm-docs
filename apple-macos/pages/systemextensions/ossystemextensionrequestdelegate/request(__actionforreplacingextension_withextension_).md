> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequestdelegate/request(_:actionforreplacingextension:withextension:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequestdelegate/request(_:actionforreplacingextension:withextension:))

# request(\_:actionForReplacingExtension:withExtension:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate that the user has a different version of the extension installed on their system.

## Declaration

```swift
func request(_ request: OSSystemExtensionRequest, actionForReplacingExtension existing: OSSystemExtensionProperties, withExtension ext: OSSystemExtensionProperties) -> OSSystemExtensionRequest.ReplacementAction
```

## Parameters

- `request`: The request that encountered a conflict.
- `existing`: A properties object that describes the installed version of the extension.
- `ext`: A properties object that describes the updated version of the extension.

<a id="return-value"></a>

## Return Value

A replacement action the manager should take to resolve the conflict.

## Mentioned In

- [Installing System Extensions and Drivers](../installing-system-extensions-and-drivers.md)

<a id="Discussion"></a>

## Discussion

The manager calls this method when it encounters an existing extension with the same team and bundle identifiers, but with different version identifiers. It uses the [CFBundleVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleversion) and [CFBundleShortVersionString](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleshortversionstring) identifiers to determine if the existing and new versions differ. The delegate must make a decision on whether to replace the existing extension.

Implement this method to return an [OSSystemExtensionRequest.ReplacementAction](../ossystemextensionrequest/replacementaction.md), which tells the manager what to do. If you return [OSSystemExtensionRequest.ReplacementAction.cancel](../ossystemextensionrequest/replacementaction/cancel.md), the manager aborts the installation and calls [request(\_:didFailWithError:)](request%28__didfailwitherror_%29.md), with the [OSSystemExtensionError.Code.requestCanceled](../ossystemextensionerror/code/requestcanceled.md) error code.

If the local system has System Extension developer mode enabled, the manager always calls this method when it finds an existing installation, even if the version identifiers match.

## See Also

### Handling Indeterminate Installs

- [requestNeedsUserApproval(\_:)](requestneedsuserapproval%28__%29.md): Tells the delegate that the user must grant approval before the manager can activate the extension.
- [OSSystemExtensionProperties](../ossystemextensionproperties.md): Properties that identify a specific version of a system extension.
- [OSSystemExtensionRequest.ReplacementAction](../ossystemextensionrequest/replacementaction.md): Actions for describing how the extension manager should resolve a version conflict.

# request:actionForReplacingExtension:withExtension: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate that the user has a different version of the extension installed on their system.

## Declaration

```objectivec
- (OSSystemExtensionReplacementAction) request:(OSSystemExtensionRequest *) request actionForReplacingExtension:(OSSystemExtensionProperties *) existing withExtension:(OSSystemExtensionProperties *) ext;
```

## Parameters

- `request`: The request that encountered a conflict.
- `existing`: A properties object that describes the installed version of the extension.
- `ext`: A properties object that describes the updated version of the extension.

<a id="return-value"></a>

## Return Value

A replacement action the manager should take to resolve the conflict.

## Mentioned In

- [Installing System Extensions and Drivers](../installing-system-extensions-and-drivers.md)

<a id="Discussion"></a>

## Discussion

The manager calls this method when it encounters an existing extension with the same team and bundle identifiers, but with different version identifiers. It uses the [CFBundleVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleversion) and [CFBundleShortVersionString](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleshortversionstring) identifiers to determine if the existing and new versions differ. The delegate must make a decision on whether to replace the existing extension.

Implement this method to return an [OSSystemExtensionReplacementAction](../ossystemextensionrequest/replacementaction.md), which tells the manager what to do. If you return [OSSystemExtensionReplacementActionCancel](../ossystemextensionrequest/replacementaction/cancel.md), the manager aborts the installation and calls [request:didFailWithError:](request%28__didfailwitherror_%29.md), with the [OSSystemExtensionErrorRequestCanceled](../ossystemextensionerror/code/requestcanceled.md) error code.

If the local system has System Extension developer mode enabled, the manager always calls this method when it finds an existing installation, even if the version identifiers match.

## See Also

### Handling Indeterminate Installs

- [requestNeedsUserApproval:](requestneedsuserapproval%28__%29.md): Tells the delegate that the user must grant approval before the manager can activate the extension.
- [OSSystemExtensionProperties](../ossystemextensionproperties.md): Properties that identify a specific version of a system extension.
- [OSSystemExtensionReplacementAction](../ossystemextensionrequest/replacementaction.md): Actions for describing how the extension manager should resolve a version conflict.
