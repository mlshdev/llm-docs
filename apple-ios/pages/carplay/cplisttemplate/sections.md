> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/sections](https://developer.apple.com/documentation/carplay/cplisttemplate/sections)

# sections (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The sections that the list displays.

## Declaration

```swift
var sections: [CPListSection] { get }
```

<a id="Discussion"></a>

## Discussion

To add new sections to the list, to remove or reorder existing sections, or to update a section’s appearance, use the [updateSections(\_:)](updatesections%28__%29.md) method.

## See Also

### Managing Sections

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections that the template can display.
- [sectionCount](sectioncount.md): The number of sections in the list.
- [updateSections(\_:)](updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.
- [CPListSection](../cplistsection.md): A container that groups your list items into sections.

# sections (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The sections that the list displays.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CPListSection *> * sections;
```

<a id="Discussion"></a>

## Discussion

To add new sections to the list, to remove or reorder existing sections, or to update a section’s appearance, use the [updateSections:](updatesections%28__%29.md) method.

## See Also

### Managing Sections

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections that the template can display.
- [sectionCount](sectioncount.md): The number of sections in the list.
- [updateSections:](updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.
- [CPListSection](../cplistsection.md): A container that groups your list items into sections.
