> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photosui/phprojectsection/sectioncontents

# sectionContents (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array containing PHProjectionSessionContent objects.

## Declaration

```swift
var sectionContents: [PHProjectSectionContent] { get }
```

<a id="Discussion"></a>

## Discussion

The content is ordered by number of elements, from fewest to most. Projects should present only one level of content to the user at a time, because assets are reused within individual content objects.

## See Also

### Determining Section Contents

- [title](title.md): The optional section title.
- [PHProjectSectionContent](../phprojectsectioncontent.md): An object containing section elements and layout information for a single level of curation.

# sectionContents (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An array containing PHProjectionSessionContent objects.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<PHProjectSectionContent *> * sectionContents;
```

<a id="Discussion"></a>

## Discussion

The content is ordered by number of elements, from fewest to most. Projects should present only one level of content to the user at a time, because assets are reused within individual content objects.

## See Also

### Determining Section Contents

- [title](title.md): The optional section title.
- [PHProjectSectionContent](../phprojectsectioncontent.md): An object containing section elements and layout information for a single level of curation.
