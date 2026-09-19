> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photosui/phprojectsectioncontent/cloudassetidentifiers

# cloudAssetIdentifiers (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array containing all cloud asset identifiers referenced in the content.

## Declaration

```swift
var cloudAssetIdentifiers: [PHCloudIdentifier] { get }
```

## See Also

### Determining Content Properties

- [elements](elements.md): An array of asset, text, or journal entry elements contained in the content.
- [numberOfColumns](numberofcolumns.md): The number of columns if section content is displayed in a grid layout.
- [aspectRatio](aspectratio.md): The aspect ratio of the full content layout, defined as width over height.
- [backgroundColor](backgroundcolor.md): The background color of the section content when created from an Apple Print Product.

# cloudAssetIdentifiers (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array containing all cloud asset identifiers referenced in the content.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<PHCloudIdentifier *> * cloudAssetIdentifiers;
```

## See Also

### Determining Content Properties

- [elements](elements.md): An array of asset, text, or journal entry elements contained in the content.
- [numberOfColumns](numberofcolumns.md): The number of columns if section content is displayed in a grid layout.
- [aspectRatio](aspectratio.md): The aspect ratio of the full content layout, defined as width over height.
- [backgroundColor](backgroundcolor.md): The background color of the section content when created from an Apple Print Product.
