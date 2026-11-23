> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/init(title:listheader:sections:assistantcellconfiguration:)

# init(title:listHeader:sections:assistantCellConfiguration:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a list template with a title, sections, and a header and assistant cell with optional details.

## Declaration

```swift
init(title: String?, listHeader: CPListTemplateDetailsHeader?, sections: [CPListSection], assistantCellConfiguration: CPAssistantCellConfiguration?)
```

## Parameters

- `title`: The text to display in the navigation bar while the template is visible.
- `listHeader`: The header section to display above the list of items.
- `sections`: An array of sections, each with zero or more items. This initializer copies the array, trimming sections and items as needed to fit within the limits in the [maximumSectionCount](maximumsectioncount.md) and [maximumItemCount](maximumitemcount.md) properties. The initializer trims sections from the end of the array, and keeps adding items section by section until it reaches the maximum.
- `assistantCellConfiguration`: The configuration attributes for the assistant cell. Audio, video, and communication apps use this cell to facilitate interactions with Siri. Specify `nil` for all other types of apps.

<a id="return-value"></a>

## Return Value

A newly initialized list template.

<a id="discussion"></a>

## Discussion

If you add grid buttons to your list using the [headerGridButtons](headergridbuttons.md) property, the grid buttons appear below the header section.

## See Also

### Creating a list template

- [init(title:sections:)](init%28title_sections_%29.md): Creates a list template with a title and sections to display.
- [init(title:sections:assistantCellConfiguration:)](init%28title_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and an assistant cell.
- [init(title:sections:assistantCellConfiguration:headerGridButtons:)](init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Creates a list template with a title, sections, an optional assistant cell, and one or more buttons to display in the header.

# initWithTitle:listHeader:sections:assistantCellConfiguration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a list template with a title, sections, and a header and assistant cell with optional details.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title listHeader:(CPListTemplateDetailsHeader *) listHeader sections:(NSArray<CPListSection *> *) sections assistantCellConfiguration:(CPAssistantCellConfiguration *) assistantCellConfiguration;
```

## Parameters

- `title`: The text to display in the navigation bar while the template is visible.
- `listHeader`: The header section to display above the list of items.
- `sections`: An array of sections, each with zero or more items. This initializer copies the array, trimming sections and items as needed to fit within the limits in the [maximumSectionCount](maximumsectioncount.md) and [maximumItemCount](maximumitemcount.md) properties. The initializer trims sections from the end of the array, and keeps adding items section by section until it reaches the maximum.
- `assistantCellConfiguration`: The configuration attributes for the assistant cell. Audio, video, and communication apps use this cell to facilitate interactions with Siri. Specify `nil` for all other types of apps.

<a id="return-value"></a>

## Return Value

A newly initialized list template.

<a id="discussion"></a>

## Discussion

If you add grid buttons to your list using the [headerGridButtons](headergridbuttons.md) property, the grid buttons appear below the header section.

## See Also

### Creating a list template

- [initWithTitle:sections:](init%28title_sections_%29.md): Creates a list template with a title and sections to display.
- [initWithTitle:sections:assistantCellConfiguration:](init%28title_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and an assistant cell.
- [initWithTitle:sections:assistantCellConfiguration:headerGridButtons:](init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Creates a list template with a title, sections, an optional assistant cell, and one or more buttons to display in the header.
