> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistsection/initwithitems:header:sectionindextitle:](https://developer.apple.com/documentation/carplay/cplistsection/initwithitems:header:sectionindextitle:)

# initWithItems:header:sectionIndexTitle:

**Interface language:** Objective-C

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a section with list items, a header, and a section index title.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<id<CPListTemplateItem>> *) items header:(NSString *) header sectionIndexTitle:(NSString *) sectionIndexTitle;
```

## Parameters

- `items`: A list of items to include in the section.
- `header`: The section header text.
- `sectionIndexTitle`: A section index title. The system displays only the first character of the title, so choose a single-character section index title.

<a id="return-value"></a>

## Return Value

A newly initialized list section.

## See Also

### Creating a Section

- [initWithItems:](initwithitems_.md): Creates a section with list items.
- [initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:](init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](../cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](../cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](../cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](../cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](../cpmessagelistitem.md): A list template row that represents a conversation or contact.
