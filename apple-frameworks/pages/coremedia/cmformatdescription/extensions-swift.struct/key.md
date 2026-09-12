> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/extensions-swift.struct/key](https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/key)

# CMFormatDescription.Extensions.Key

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
struct Key
```

## Topics

### Extension Keys

- [alphaChannelMode](key/alphachannelmode.md)
- [alternativeTransferCharacteristics](key/alternativetransfercharacteristics.md)
- [ambientViewingEnvironment](key/ambientviewingenvironment.md)
- [auxiliaryTypeInfo](key/auxiliarytypeinfo.md)
- [backgroundColor](key/backgroundcolor.md)
- [bitsPerComponent](key/bitspercomponent.md)
- [bytesPerRow](key/bytesperrow.md)
- [chromaLocationBottomField](key/chromalocationbottomfield.md)
- [chromaLocationTopField](key/chromalocationtopfield.md)
- [cleanAperture](key/cleanaperture.md)
- [colorPrimaries](key/colorprimaries.md)
- [conformsToMPEG2VideoProfile](key/conformstompeg2videoprofile.md)
- [containsAlphaChannel](key/containsalphachannel.md)
- [contentLightLevelInfo](key/contentlightlevelinfo.md)
- [defaultFontName](key/defaultfontname.md)
- [defaultStyle](key/defaultstyle.md)
- [defaultTextBox](key/defaulttextbox.md)
- [depth](key/depth.md)
- [displayFlags](key/displayflags.md)
- [fieldCount](key/fieldcount.md)
- [fieldDetail](key/fielddetail.md)
- [fontTable](key/fonttable.md)
- [formatName](key/formatname.md)
- [fullRangeVideo](key/fullrangevideo.md)
- [gammaLevel](key/gammalevel.md)
- [horizontalJustification](key/horizontaljustification.md)
- [iccProfile](key/iccprofile.md)
- [masteringDisplayColorVolume](key/masteringdisplaycolorvolume.md)
- [metadataKeyTable](key/metadatakeytable.md)
- [originalCompressionSettings](key/originalcompressionsettings.md)
- [pixelAspectRatio](key/pixelaspectratio.md)
- [revisionLevel](key/revisionlevel.md)
- [sampleDescriptionExtensionAtoms](key/sampledescriptionextensionatoms.md)
- [sourceReferenceName](key/sourcereferencename.md)
- [spatialQuality](key/spatialquality.md)
- [temporalQuality](key/temporalquality.md)
- [textJustification](key/textjustification.md)
- [transferFunction](key/transferfunction.md)
- [vendor](key/vendor.md)
- [verbatimISOSampleEntry](key/verbatimisosampleentry.md)
- [verbatimSampleDescription](key/verbatimsampledescription.md)
- [version](key/version.md)
- [verticalJustification](key/verticaljustification.md)
- [yCbCrMatrix](key/ycbcrmatrix.md)

### Initializers

- [init(rawValue:)](key/init%28rawvalue_%29.md): Creates a new `Key` backed by `rawValue`

### Type Properties

- [cameraCalibrationDataLensCollection](key/cameracalibrationdatalenscollection.md): Specifies intrinsic and extrinsic parameters for single or multiple lenses. The value for this key is represented by [CMFormatDescription.Extensions.Value.CameraCalibrationDataLensCollection](value/cameracalibrationdatalenscollection.md) type.
- [contentColorVolume](key/contentcolorvolume.md): Matches payload of ITU-T-H.265:11/2019, D.2.40 Content Colour Volume SEI message. The value of this key is of [CMFormatDescription.Extensions.Value.ContentColorVolume](value/contentcolorvolume.md) type.
- [convertedFromExternalSphericalTags](key/convertedfromexternalsphericaltags.md): Indicates that the image description contains projected media data converted from an external format.
- [hasAdditionalViews](key/hasadditionalviews.md): A boolean indicating that one or more additional views may be present beyond stereo left and stereo right eyes (e.g,. a “centerline” view).
- [hasLeftStereoEyeView](key/hasleftstereoeyeview.md): A boolean indicating the stereo left eye is present in video frames.
- [hasRightStereoEyeView](key/hasrightstereoeyeview.md): A boolean indicating the stereo right eye is present in video frames.
- [heroEye](key/heroeye.md): Indicates which of the two eyes should be used as the primary when rendering in 2D. It is usually perpendicular to the target image surface.
- [horizontalDisparityAdjustment](key/horizontaldisparityadjustment.md): Indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [horizontalFieldOfView](key/horizontalfieldofview.md): Horizontal field of view in thousandths of a degree (i.e., 123456 is 123.456 degrees).
- [logTransferFunction](key/logtransferfunction.md): Indicates that the transfer function or gamma of the content is a log format and identifies the specific log curve.
- [projectionKind](key/projectionkind.md): Indicates the projection that should be applied to presented decoded video frames.
- [protectedContentOriginalFormat](key/protectedcontentoriginalformat.md): FourCharCode number representing the original format
- [stereoCameraBaseline](key/stereocamerabaseline.md): Indicates the distance between centers of the lenses of the camera system.
- [viewPackingKind](key/viewpackingkind.md): Indicates the packing type of stereoscopic video frames.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [CMFormatDescription.Extensions.Value](value.md)
