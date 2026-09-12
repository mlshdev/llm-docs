> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectsectioncontent/numberofcolumns](https://developer.apple.com/documentation/photosui/phprojectsectioncontent/numberofcolumns)

# numberOfColumns (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The number of columns if section content is displayed in a grid layout.

## Declaration

```swift
var numberOfColumns: Int { get }
```

<a id="Discussion"></a>

## Discussion

The number of columns informs the suggested layout of the content, in resolution-independent grid space units. One grid space unit is defined as the width of the project canvas divided by `numberOfColumns`.

## See Also

### Determining Content Properties

- [elements](elements.md): An array of asset, text, or journal entry elements contained in the content.
- [aspectRatio](aspectratio.md): The aspect ratio of the full content layout, defined as width over height.
- [cloudAssetIdentifiers](cloudassetidentifiers.md): An array containing all cloud asset identifiers referenced in the content.
- [backgroundColor](backgroundcolor.md): The background color of the section content when created from an Apple Print Product.

# numberOfColumns (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The number of columns if section content is displayed in a grid layout.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfColumns;
```

<a id="Discussion"></a>

## Discussion

The number of columns informs the suggested layout of the content, in resolution-independent grid space units. One grid space unit is defined as the width of the project canvas divided by `numberOfColumns`.

## See Also

### Determining Content Properties

- [elements](elements.md): An array of asset, text, or journal entry elements contained in the content.
- [aspectRatio](aspectratio.md): The aspect ratio of the full content layout, defined as width over height.
- [cloudAssetIdentifiers](cloudassetidentifiers.md): An array containing all cloud asset identifiers referenced in the content.
- [backgroundColor](backgroundcolor.md): The background color of the section content when created from an Apple Print Product.
