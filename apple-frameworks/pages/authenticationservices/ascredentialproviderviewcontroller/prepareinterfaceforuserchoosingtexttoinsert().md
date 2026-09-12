> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterfaceforuserchoosingtexttoinsert()](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterfaceforuserchoosingtexttoinsert())

# prepareInterfaceForUserChoosingTextToInsert() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Prepare the view controller to show a list of all insertable text with user selectable fields.

## Declaration

```swift
func prepareInterfaceForUserChoosingTextToInsert()
```

<a id="discussion"></a>

## Discussion

This method is called by the system to prepare the extension’s view controller to present a list of any insertable text with selectable fields.

In order for your extension to be presented in the list of options for text insertion request, your extension needs to specify a true value for the Information Property List key `ProvidesTextToInsert` under the `ASCredentialProviderExtensionCapabilities` dictionary.

```
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ ProvidesTextToInsert => true
```

# prepareInterfaceForUserChoosingTextToInsert (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Prepare the view controller to show a list of all insertable text with user selectable fields.

## Declaration

```objectivec
- (void) prepareInterfaceForUserChoosingTextToInsert;
```

<a id="discussion"></a>

## Discussion

This method is called by the system to prepare the extension’s view controller to present a list of any insertable text with selectable fields.

In order for your extension to be presented in the list of options for text insertion request, your extension needs to specify a true value for the Information Property List key `ProvidesTextToInsert` under the `ASCredentialProviderExtensionCapabilities` dictionary.

```
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ ProvidesTextToInsert => true
```
