> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/sectioncount

# sectionCount (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The current number of sections in the list.

## Declaration

```swift
var sectionCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This property reflects the total number of sections in the list. The value never exceeds the maximum number of supported sections, as set in the [maximumSectionCount](maximumsectioncount.md) property. If you initialize or update the list with more sections than the allowed maximum, CarPlay discards any sections past the maximum number.

## See Also

### Managing section content

- [sections](sections.md): The sections that the list displays.
- [updateSections(\_:)](updatesections%28__%29.md): Adds, removes, reorders, or updates the current sections in the list.

# sectionCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The current number of sections in the list.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger sectionCount;
```

<a id="discussion"></a>

## Discussion

This property reflects the total number of sections in the list. The value never exceeds the maximum number of supported sections, as set in the [maximumSectionCount](maximumsectioncount.md) property. If you initialize or update the list with more sections than the allowed maximum, CarPlay discards any sections past the maximum number.

## See Also

### Managing section content

- [sections](sections.md): The sections that the list displays.
- [updateSections:](updatesections%28__%29.md): Adds, removes, reorders, or updates the current sections in the list.
