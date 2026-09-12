> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/updatesections(_:)](https://developer.apple.com/documentation/carplay/cplisttemplate/updatesections(_:))

# updateSections(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Adds, removes, reorders, or updates the list’s sections.

## Declaration

```swift
func updateSections(_ sections: [CPListSection])
```

## Parameters

- `sections`: An array of sections to display.

<a id="Discussion"></a>

## Discussion

This method is multipurpose. Use it to add new sections to the list, to remove or reorder existing sections, and to update a section’s appearance. At runtime, use [maximumSectionCount](maximumsectioncount.md) to determine the maximum number of sections the list can display. CarPlay trims the array if its size exceeds this limit.

## See Also

### Managing Sections

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections that the template can display.
- [sectionCount](sectioncount.md): The number of sections in the list.
- [sections](sections.md): The sections that the list displays.
- [CPListSection](../cplistsection.md): A container that groups your list items into sections.

# updateSections: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Adds, removes, reorders, or updates the list’s sections.

## Declaration

```objectivec
- (void) updateSections:(NSArray<CPListSection *> *) sections;
```

## Parameters

- `sections`: An array of sections to display.

<a id="Discussion"></a>

## Discussion

This method is multipurpose. Use it to add new sections to the list, to remove or reorder existing sections, and to update a section’s appearance. At runtime, use [maximumSectionCount](maximumsectioncount.md) to determine the maximum number of sections the list can display. CarPlay trims the array if its size exceeds this limit.

## See Also

### Managing Sections

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections that the template can display.
- [sectionCount](sectioncount.md): The number of sections in the list.
- [sections](sections.md): The sections that the list displays.
- [CPListSection](../cplistsection.md): A container that groups your list items into sections.
