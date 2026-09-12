> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/caption-authoring](https://developer.apple.com/documentation/avfoundation/caption-authoring)

# Caption authoring

**Interface languages:** Swift, Objective-C

**Framework:** AVFoundation  
**Kind:** API Collection

Create captions and subtitles in industry-standard formats.

## Topics

### Captions

- [AVCaption](avcaption.md): An object that represents text to present over a time range.
- [AVMutableCaption](avmutablecaption.md): A mutable caption subclass that you use to create new captions.

### Regions

- [AVCaptionRegion](avcaptionregion.md): An object that represents the region in which the system presents a caption.
- [AVMutableCaptionRegion](avmutablecaptionregion.md): A mutable caption region subclass that you use to create new caption regions.

### Groups

- [AVCaptionGroup](avcaptiongroup.md): An object that represents zero or more captions that intersect in time.
- [AVCaptionGrouper](avcaptiongrouper.md): An object that analyzes the temporal overlaps of caption objects to create caption groups for each span of concurrent captions.

### Presentation

- [AVCaptionRenderer](avcaptionrenderer.md): An object that renders captions for display at a particular time.

### Reading and writing

- [AVAssetReaderOutputCaptionAdaptor](avassetreaderoutputcaptionadaptor.md): Deprecated. An object that reads caption group objects from an asset track that contains timed text.
- [AVAssetWriterInputCaptionAdaptor](avassetwriterinputcaptionadaptor.md): Deprecated. An object that appends captions to an asset writer input.

### Conversion and validation

- [AVCaptionSettingsKey](avcaptionsettingskey.md): A structure that defines dictionary keys to configure the caption converter and validator.
- [AVCaptionFormatConformer](avcaptionformatconformer.md): An object that converts a canonical caption to a specific format.
- [AVCaptionConversionValidator](avcaptionconversionvalidator.md): An object that validates captions for a conversion operation.
