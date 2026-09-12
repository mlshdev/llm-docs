> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectsectioncontent/elements](https://developer.apple.com/documentation/photosui/phprojectsectioncontent/elements)

# elements (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array of asset, text, or journal entry elements contained in the content.

## Declaration

```swift
var elements: [PHProjectElement] { get }
```

## See Also

### Determining Content Properties

- [numberOfColumns](numberofcolumns.md): The number of columns if section content is displayed in a grid layout.
- [aspectRatio](aspectratio.md): The aspect ratio of the full content layout, defined as width over height.
- [cloudAssetIdentifiers](cloudassetidentifiers.md): An array containing all cloud asset identifiers referenced in the content.
- [backgroundColor](backgroundcolor.md): The background color of the section content when created from an Apple Print Product.

# elements (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array of asset, text, or journal entry elements contained in the content.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof PHProjectElement *> * elements;
```

## See Also

### Determining Content Properties

- [numberOfColumns](numberofcolumns.md): The number of columns if section content is displayed in a grid layout.
- [aspectRatio](aspectratio.md): The aspect ratio of the full content layout, defined as width over height.
- [cloudAssetIdentifiers](cloudassetidentifiers.md): An array containing all cloud asset identifiers referenced in the content.
- [backgroundColor](backgroundcolor.md): The background color of the section content when created from an Apple Print Product.
