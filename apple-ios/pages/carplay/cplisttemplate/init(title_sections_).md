> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/init(title:sections:)

# init(title:sections:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a list template with a title and sections to display.

## Declaration

```swift
init(title: String?, sections: [CPListSection])
```

## Parameters

- `title`: The text to display in the navigation bar while the template is visible.
- `sections`: An array of sections, each with zero or more items. This initializer copies the array, trimming sections and items as needed to fit within the limits in the [maximumSectionCount](maximumsectioncount.md) and [maximumItemCount](maximumitemcount.md) properties. The initializer trims sections from the end of the array, and keeps adding items section by section until it reaches the maximum.

<a id="return-value"></a>

## Return Value

A newly initialized list template.

## See Also

### Creating a list template

- [init(title:sections:assistantCellConfiguration:)](init%28title_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and an assistant cell.
- [init(title:listHeader:sections:assistantCellConfiguration:)](init%28title_listheader_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and a header and assistant cell with optional details.
- [init(title:sections:assistantCellConfiguration:headerGridButtons:)](init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Creates a list template with a title, sections, an optional assistant cell, and one or more buttons to display in the header.

# initWithTitle:sections: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a list template with a title and sections to display.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title sections:(NSArray<CPListSection *> *) sections;
```

## Parameters

- `title`: The text to display in the navigation bar while the template is visible.
- `sections`: An array of sections, each with zero or more items. This initializer copies the array, trimming sections and items as needed to fit within the limits in the [maximumSectionCount](maximumsectioncount.md) and [maximumItemCount](maximumitemcount.md) properties. The initializer trims sections from the end of the array, and keeps adding items section by section until it reaches the maximum.

<a id="return-value"></a>

## Return Value

A newly initialized list template.

## See Also

### Creating a list template

- [initWithTitle:sections:assistantCellConfiguration:](init%28title_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and an assistant cell.
- [initWithTitle:listHeader:sections:assistantCellConfiguration:](init%28title_listheader_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and a header and assistant cell with optional details.
- [initWithTitle:sections:assistantCellConfiguration:headerGridButtons:](init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Creates a list template with a title, sections, an optional assistant cell, and one or more buttons to display in the header.
