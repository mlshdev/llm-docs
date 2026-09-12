> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectsection/title](https://developer.apple.com/documentation/photosui/phprojectsection/title)

# title (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The optional section title.

## Declaration

```swift
var title: String { get }
```

<a id="Discussion"></a>

## Discussion

By default, the title should relate to the content, like the Moment’s name or the geographical location where content was captured. The title can also be an empty string.

## See Also

### Determining Section Contents

- [sectionContents](sectioncontents.md): An array containing PHProjectionSessionContent objects.
- [PHProjectSectionContent](../phprojectsectioncontent.md): An object containing section elements and layout information for a single level of curation.

# title (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The optional section title.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * title;
```

<a id="Discussion"></a>

## Discussion

By default, the title should relate to the content, like the Moment’s name or the geographical location where content was captured. The title can also be an empty string.

## See Also

### Determining Section Contents

- [sectionContents](sectioncontents.md): An array containing PHProjectionSessionContent objects.
- [PHProjectSectionContent](../phprojectsectioncontent.md): An object containing section elements and layout information for a single level of curation.
