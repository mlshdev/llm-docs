> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/picture-taker-keys](https://developer.apple.com/documentation/quartz/picture-taker-keys)

# Picture Taker Keys

**Interface languages:** Swift, Objective-C

**Framework:** Quartz  
**Kind:** API Collection

Keys for customizing the picture taker appearance and behavior. These values are set by sending the picture taker instance `setValue:forKey`.

## Topics

### Constants

- [IKPictureTakerAllowsVideoCaptureKey](ikpicturetakerallowsvideocapturekey.md): A key for allowing video capture.
- [IKPictureTakerAllowsFileChoosingKey](ikpicturetakerallowsfilechoosingkey.md): A key for allowing the user to choose a file.
- [IKPictureTakerUpdateRecentPictureKey](ikpicturetakerupdaterecentpicturekey.md): A key for allowing a recent picture to be updated.
- [IKPictureTakerAllowsEditingKey](ikpicturetakerallowseditingkey.md): A key for allowing image editing.
- [IKPictureTakerShowEffectsKey](ikpicturetakershoweffectskey.md): A key for showing effects.
- [IKPictureTakerInformationalTextKey](ikpicturetakerinformationaltextkey.md): A key for informational text. The associated value is an `NSString` or `NSAttributedString` object whose default value is `"Drag Image Here"`.
- [IKPictureTakerImageTransformsKey](ikpicturetakerimagetransformskey.md): A n image transformation key. The associated value is an `NSDictionary` object that can be serialized.
- [IKPictureTakerOutputImageMaxSizeKey](ikpicturetakeroutputimagemaxsizekey.md): A key for the maximum size of the output image. The associated value is an `NSValue` object (`NSSize`).
- [IKPictureTakerCropAreaSizeKey](ikpicturetakercropareasizekey.md): Deprecated. A key for the cropping area size. The associated value is an `NSValue` object (`NSSize`).
- [IKPictureTakerShowAddressBookPictureKey](ikpicturetakershowaddressbookpicturekey.md): A key for showing the address book picture.
- [IKPictureTakerShowEmptyPictureKey](ikpicturetakershowemptypicturekey.md): A key for showing an empty picture. The associated value is an `NSImage` object. The default value is `nil`. If set to an image, the picture taker automatically shows an image at the end of the Recent Pictures pop-up menu. that means “no picture.”
- [IKPictureTakerRemainOpenAfterValidateKey](ikpicturetakerremainopenaftervalidatekey.md): A key that determines if the picture taker UI should remain open after the user selects done.
