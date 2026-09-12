> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/sectioncount](https://developer.apple.com/documentation/carplay/cplisttemplate/sectioncount)

# sectionCount (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The number of sections in the list.

## Declaration

```swift
var sectionCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This value never exceeds [maximumSectionCount](maximumsectioncount.md). If you initialize a list, or call the [updateSections(\_:)](updatesections%28__%29.md) method, with an array larger than `maximumSectionCount`, CarPlay trims the array to an appropriate size.

## See Also

### Managing Sections

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections that the template can display.
- [sections](sections.md): The sections that the list displays.
- [updateSections(\_:)](updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.
- [CPListSection](../cplistsection.md): A container that groups your list items into sections.

# sectionCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The number of sections in the list.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger sectionCount;
```

<a id="Discussion"></a>

## Discussion

This value never exceeds [maximumSectionCount](maximumsectioncount.md). If you initialize a list, or call the [updateSections:](updatesections%28__%29.md) method, with an array larger than `maximumSectionCount`, CarPlay trims the array to an appropriate size.

## See Also

### Managing Sections

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections that the template can display.
- [sections](sections.md): The sections that the list displays.
- [updateSections:](updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.
- [CPListSection](../cplistsection.md): A container that groups your list items into sections.
