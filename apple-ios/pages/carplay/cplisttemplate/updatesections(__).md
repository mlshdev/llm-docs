> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/updatesections(_:)

# updateSections(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Adds, removes, reorders, or updates the current sections in the list.

## Declaration

```swift
func updateSections(_ sections: [CPListSection])
```

## Parameters

- `sections`: The array of sections to display in your list. This initializer copies the array, trimming sections and items as needed to fit within the limits in the [maximumSectionCount](maximumsectioncount.md) and [maximumItemCount](maximumitemcount.md)properties. The initializer trims sections from the end of the array, and keeps adding items section by section until it reaches the maximum.

<a id="discussion"></a>

## Discussion

If the list is visible when you call this method, CarPlay refreshes the list’s appearance to reflect the new items.

## See Also

### Managing section content

- [sectionCount](sectioncount.md): The current number of sections in the list.
- [sections](sections.md): The sections that the list displays.

# updateSections: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Adds, removes, reorders, or updates the current sections in the list.

## Declaration

```objectivec
- (void) updateSections:(NSArray<CPListSection *> *) sections;
```

## Parameters

- `sections`: The array of sections to display in your list. This initializer copies the array, trimming sections and items as needed to fit within the limits in the [maximumSectionCount](maximumsectioncount.md) and [maximumItemCount](maximumitemcount.md)properties. The initializer trims sections from the end of the array, and keeps adding items section by section until it reaches the maximum.

<a id="discussion"></a>

## Discussion

If the list is visible when you call this method, CarPlay refreshes the list’s appearance to reflect the new items.

## See Also

### Managing section content

- [sectionCount](sectioncount.md): The current number of sections in the list.
- [sections](sections.md): The sections that the list displays.
