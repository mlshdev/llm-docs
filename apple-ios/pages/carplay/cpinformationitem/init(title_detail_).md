> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinformationitem/init(title:detail:)](https://developer.apple.com/documentation/carplay/cpinformationitem/init(title:detail:))

# init(title:detail:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates an information item with a title and detail text.

## Declaration

```swift
init(title: String?, detail: String?)
```

## Parameters

- `title`: The text that the template displays as the item’s title.
- `detail`: The text that the template displays below or beside the title, depending on the template’s layout. See [CPInformationTemplateLayout](../cpinformationtemplatelayout.md) for more information.

# initWithTitle:detail: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates an information item with a title and detail text.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title detail:(NSString *) detail;
```

## Parameters

- `title`: The text that the template displays as the item’s title.
- `detail`: The text that the template displays below or beside the title, depending on the template’s layout. See [CPInformationTemplateLayout](../cpinformationtemplatelayout.md) for more information.
