> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/proextensionprincipalviewcontrollerclass](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/proextensionprincipalviewcontrollerclass)

# ProExtensionPrincipalViewControllerClass

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** ProVideo Encoder Extensions 1.0+ · ProVideo Workflow Extensions 1.0+

The name of the principal view controller class of your extension.

## Details

`ProExtensionPrincipalViewControllerClass`

<a id="Discussion"></a>

## Discussion

This key provides the name of the primary view controller class of your extension that adopts the [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller) protocol. When you create an extension, the Xcode template automatically includes this key in the workflow extension information property list. You only modify the value of this key when you rename the primary view controller class in your extension.

## See Also

### Professional Video Applications

- [ProExtensionAttributes](proextensionattributes.md): A dictionary that specifies the minimum size of the floating window in which Final Cut Pro hosts the extension view.
- [ProExtensionPrincipalClass](proextensionprincipalclass.md): The name of the class with the principal implementation of your extension.
- [ProExtensionUUID](proextensionuuid.md): A UUID string that uniquely identifies your extension to the Compressor app.
