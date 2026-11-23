> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/init(title:sections:assistantcellconfiguration:)

# init(title:sections:assistantCellConfiguration:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a list template with a title, sections, and an assistant cell.

## Declaration

```swift
init(title: String?, sections: [CPListSection], assistantCellConfiguration: CPAssistantCellConfiguration?)
```

## Parameters

- `title`: The text to display in the navigation bar while the template is visible.
- `sections`: An array of sections, each with zero or more items. This initializer copies the array, trimming sections and items as needed to fit within the limits in the [maximumSectionCount](maximumsectioncount.md) and [maximumItemCount](maximumitemcount.md) properties. The initializer trims sections from the end of the array, and keeps adding items section by section until it reaches the maximum.
- `assistantCellConfiguration`: The configuration attributes for the assistant cell. Audio, video, and communication apps use this cell to facilitate interactions with Siri. Specify `nil` for all other types of apps.

<a id="return-value"></a>

## Return Value

A newly initialized list template.

<a id="discussion"></a>

## Discussion

The system provides the text and accessory image for the assistant cell; you can’t change these. Use the [assistantCellConfiguration](assistantcellconfiguration.md) property to update the cell’s configuration after you initialize the template. CarPlay observes this property and automatically updates your app’s interface in response to any changes.

Your app doesn’t receive a callback when the user selects the assistant cell. Instead, you configure an Intents extension to handle the type of intent you specify in the cell’s configuration; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent).

## See Also

### Creating a list template

- [init(title:sections:)](init%28title_sections_%29.md): Creates a list template with a title and sections to display.
- [init(title:listHeader:sections:assistantCellConfiguration:)](init%28title_listheader_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and a header and assistant cell with optional details.
- [init(title:sections:assistantCellConfiguration:headerGridButtons:)](init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Creates a list template with a title, sections, an optional assistant cell, and one or more buttons to display in the header.

# initWithTitle:sections:assistantCellConfiguration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a list template with a title, sections, and an assistant cell.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title sections:(NSArray<CPListSection *> *) sections assistantCellConfiguration:(CPAssistantCellConfiguration *) assistantCellConfiguration;
```

## Parameters

- `title`: The text to display in the navigation bar while the template is visible.
- `sections`: An array of sections, each with zero or more items. This initializer copies the array, trimming sections and items as needed to fit within the limits in the [maximumSectionCount](maximumsectioncount.md) and [maximumItemCount](maximumitemcount.md) properties. The initializer trims sections from the end of the array, and keeps adding items section by section until it reaches the maximum.
- `assistantCellConfiguration`: The configuration attributes for the assistant cell. Audio, video, and communication apps use this cell to facilitate interactions with Siri. Specify `nil` for all other types of apps.

<a id="return-value"></a>

## Return Value

A newly initialized list template.

<a id="discussion"></a>

## Discussion

The system provides the text and accessory image for the assistant cell; you can’t change these. Use the [assistantCellConfiguration](assistantcellconfiguration.md) property to update the cell’s configuration after you initialize the template. CarPlay observes this property and automatically updates your app’s interface in response to any changes.

Your app doesn’t receive a callback when the user selects the assistant cell. Instead, you configure an Intents extension to handle the type of intent you specify in the cell’s configuration; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent).

## See Also

### Creating a list template

- [initWithTitle:sections:](init%28title_sections_%29.md): Creates a list template with a title and sections to display.
- [initWithTitle:listHeader:sections:assistantCellConfiguration:](init%28title_listheader_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and a header and assistant cell with optional details.
- [initWithTitle:sections:assistantCellConfiguration:headerGridButtons:](init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Creates a list template with a title, sections, an optional assistant cell, and one or more buttons to display in the header.
