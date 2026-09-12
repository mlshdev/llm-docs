> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/init(title:sections:assistantcellconfiguration:)](https://developer.apple.com/documentation/carplay/cplisttemplate/init(title:sections:assistantcellconfiguration:))

# init(title:sections:assistantCellConfiguration:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a sectioned list template that optionally displays the assistant cell.

## Declaration

```swift
init(title: String?, sections: [CPListSection], assistantCellConfiguration: CPAssistantCellConfiguration?)
```

## Parameters

- `title`: The title that the navigation bar displays while the template is visible.
- `sections`: An array of sections, each with zero or more list items. For more information, see [CPListSection](../cplistsection.md).
- `assistantCellConfiguration`: The object that provides the configuration attributes for the assistant cell, such as position and visibility. For more information, see [CPAssistantCellConfiguration](../cpassistantcellconfiguration.md).

<a id="Discussion"></a>

## Discussion

The system provides the text and accessory image for the assistant cell and you can’t change these. Use the [assistantCellConfiguration](assistantcellconfiguration.md) property to update the cell’s configuration after you initialize the template. CarPlay observes this property and automatically updates your app’s interface in response to any changes.

Your app doesn’t receive a callback when the user selects the assistant cell. Instead, you configure an Intents Extension to handle the type of intent you specify in the cell’s configuration; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent).

## See Also

### Creating a List Template

- [init(title:sections:)](init%28title_sections_%29.md): Creates a list template with an array of list sections and optional title.

# initWithTitle:sections:assistantCellConfiguration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a sectioned list template that optionally displays the assistant cell.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title sections:(NSArray<CPListSection *> *) sections assistantCellConfiguration:(CPAssistantCellConfiguration *) assistantCellConfiguration;
```

## Parameters

- `title`: The title that the navigation bar displays while the template is visible.
- `sections`: An array of sections, each with zero or more list items. For more information, see [CPListSection](../cplistsection.md).
- `assistantCellConfiguration`: The object that provides the configuration attributes for the assistant cell, such as position and visibility. For more information, see [CPAssistantCellConfiguration](../cpassistantcellconfiguration.md).

<a id="Discussion"></a>

## Discussion

The system provides the text and accessory image for the assistant cell and you can’t change these. Use the [assistantCellConfiguration](assistantcellconfiguration.md) property to update the cell’s configuration after you initialize the template. CarPlay observes this property and automatically updates your app’s interface in response to any changes.

Your app doesn’t receive a callback when the user selects the assistant cell. Instead, you configure an Intents Extension to handle the type of intent you specify in the cell’s configuration; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent).

## See Also

### Creating a List Template

- [initWithTitle:sections:](init%28title_sections_%29.md): Creates a list template with an array of list sections and optional title.
