> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/sections

# sections (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The sections that the list displays.

## Declaration

```swift
var sections: [CPListSection] { get }
```

<a id="discussion"></a>

## Discussion

Specify the sections for your list when creating your list template. To add, remove, reorder, or update the current sections, call the [updateSections(\_:)](updatesections%28__%29.md) method.

## See Also

### Managing section content

- [sectionCount](sectioncount.md): The current number of sections in the list.
- [updateSections(\_:)](updatesections%28__%29.md): Adds, removes, reorders, or updates the current sections in the list.

# sections (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The sections that the list displays.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CPListSection *> * sections;
```

<a id="discussion"></a>

## Discussion

Specify the sections for your list when creating your list template. To add, remove, reorder, or update the current sections, call the [updateSections:](updatesections%28__%29.md) method.

## See Also

### Managing section content

- [sectionCount](sectioncount.md): The current number of sections in the list.
- [updateSections:](updatesections%28__%29.md): Adds, removes, reorders, or updates the current sections in the list.
