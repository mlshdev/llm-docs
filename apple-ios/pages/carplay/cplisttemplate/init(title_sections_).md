> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/init(title:sections:)](https://developer.apple.com/documentation/carplay/cplisttemplate/init(title:sections:))

# init(title:sections:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a list template with an array of list sections and optional title.

## Declaration

```swift
init(title: String?, sections: [CPListSection])
```

## Parameters

- `title`: A title that appears in the navigation bar while the template is visible.
- `sections`: An array of list sections, each with zero or more list items.

<a id="return-value"></a>

## Return Value

A newly initialized list template.

## See Also

### Creating a List Template

- [init(title:sections:assistantCellConfiguration:)](init%28title_sections_assistantcellconfiguration_%29.md): Creates a sectioned list template that optionally displays the assistant cell.

# initWithTitle:sections: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a list template with an array of list sections and optional title.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title sections:(NSArray<CPListSection *> *) sections;
```

## Parameters

- `title`: A title that appears in the navigation bar while the template is visible.
- `sections`: An array of list sections, each with zero or more list items.

<a id="return-value"></a>

## Return Value

A newly initialized list template.

## See Also

### Creating a List Template

- [initWithTitle:sections:assistantCellConfiguration:](init%28title_sections_assistantcellconfiguration_%29.md): Creates a sectioned list template that optionally displays the assistant cell.
