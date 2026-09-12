> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/proextensionprincipalclass](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/proextensionprincipalclass)

# ProExtensionPrincipalClass

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** ProVideo Encoder Extensions 1.0+ · ProVideo Workflow Extensions 1.0+

The name of the class with the principal implementation of your extension.

## Details

`ProExtensionPrincipalClass`

<a id="Discussion"></a>

## Discussion

The Compressor app instantiates the class specified in the `ProExtensionPrincipalClass` key to convert source files to the output format your extension supports. Customize your extension code by adopting the following protocols in the implementation of this class:

- [CompressorExtensionSettings](../../../professional_video_applications/compressorextensionsettings.md)
- [CompressorExtensionColorSpaces](../../../professional_video_applications/compressorextensioncolorspaces.md)
- [CompressorExtensionSettingsOptional](../../../professional_video_applications/compressorextensionsettingsoptional.md)
- [CompressorExtensionEncoder](../../../professional_video_applications/compressorextensionencoder.md)

## See Also

### Professional Video Applications

- [ProExtensionAttributes](proextensionattributes.md): A dictionary that specifies the minimum size of the floating window in which Final Cut Pro hosts the extension view.
- [ProExtensionPrincipalViewControllerClass](proextensionprincipalviewcontrollerclass.md): The name of the principal view controller class of your extension.
- [ProExtensionUUID](proextensionuuid.md): A UUID string that uniquely identifies your extension to the Compressor app.
