> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterfaceforextensionconfiguration()](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterfaceforextensionconfiguration())

# prepareInterfaceForExtensionConfiguration() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Prepares the interface to enable the user to configure the extension.

## Declaration

```swift
func prepareInterfaceForExtensionConfiguration()
```

<a id="Discussion"></a>

## Discussion

The system calls this method after the user enables your extension in Settings. Use this method to prepare a user interface for configuring the extension. You can also use the method to tell the system what credential identities your extension supports by adding them to the shared [ASCredentialIdentityStore](../ascredentialidentitystore.md) instance. Any identities you add become available as AutoFill suggestions.

After finishing configuration, tell the system to dismiss your view controller by calling the context’s [completeExtensionConfigurationRequest()](../ascredentialproviderextensioncontext/completeextensionconfigurationrequest%28%29.md) method.

> **Note**

>  To receive a call to this method, specify the [ShowsConfigurationUI](../../bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities/showsconfigurationui.md) key with a value of `YES` in the [ASCredentialProviderExtensionCapabilities](../../bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities.md) dictionary, within the [NSExtensionAttributes](../../bundleresources/information-property-list/nsextension/nsextensionattributes.md) dictionary in the extension’s [Information Property List](../../bundleresources/information-property-list.md).

## See Also

### Configuring the credential provider extension

- [ASCredentialIdentityStore](../ascredentialidentitystore.md): A container that your extension fills to provide credentials through the QuickType bar.

# prepareInterfaceForExtensionConfiguration (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Prepares the interface to enable the user to configure the extension.

## Declaration

```objectivec
- (void) prepareInterfaceForExtensionConfiguration;
```

<a id="Discussion"></a>

## Discussion

The system calls this method after the user enables your extension in Settings. Use this method to prepare a user interface for configuring the extension. You can also use the method to tell the system what credential identities your extension supports by adding them to the shared [ASCredentialIdentityStore](../ascredentialidentitystore.md) instance. Any identities you add become available as AutoFill suggestions.

After finishing configuration, tell the system to dismiss your view controller by calling the context’s [completeExtensionConfigurationRequest](../ascredentialproviderextensioncontext/completeextensionconfigurationrequest%28%29.md) method.

> **Note**

>  To receive a call to this method, specify the [ShowsConfigurationUI](../../bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities/showsconfigurationui.md) key with a value of `YES` in the [ASCredentialProviderExtensionCapabilities](../../bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities.md) dictionary, within the [NSExtensionAttributes](../../bundleresources/information-property-list/nsextension/nsextensionattributes.md) dictionary in the extension’s [Information Property List](../../bundleresources/information-property-list.md).

## See Also

### Configuring the credential provider extension

- [ASCredentialIdentityStore](../ascredentialidentitystore.md): A container that your extension fills to provide credentials through the QuickType bar.
