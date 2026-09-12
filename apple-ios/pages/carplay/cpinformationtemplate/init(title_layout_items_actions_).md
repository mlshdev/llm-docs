> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinformationtemplate/init(title:layout:items:actions:)](https://developer.apple.com/documentation/carplay/cpinformationtemplate/init(title:layout:items:actions:))

# init(title:layout:items:actions:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates an information template that displays the provided items using the chosen layout.

## Declaration

```swift
init(title: String, layout: CPInformationTemplateLayout, items: [CPInformationItem], actions: [CPTextButton])
```

## Parameters

- `title`: The title that the template displays.
- `layout`: The layout that the template uses to arrange its items. See [CPInformationTemplateLayout](../cpinformationtemplatelayout.md) for more information.
- `items`: An array of information items that the template displays.
- `actions`: An array of text buttons that provides the actions that the user can perform.

<a id="Discussion"></a>

## Discussion

The template can display up to 10 information items. If `items` contains more objects, the template uses only the first 10. Likewise, the template displays three actions maximum. If `actions` contains more than that, the template uses only the first three.

# initWithTitle:layout:items:actions: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates an information template that displays the provided items using the chosen layout.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title layout:(CPInformationTemplateLayout) layout items:(NSArray<__kindof CPInformationItem *> *) items actions:(NSArray<CPTextButton *> *) actions;
```

## Parameters

- `title`: The title that the template displays.
- `layout`: The layout that the template uses to arrange its items. See [CPInformationTemplateLayout](../cpinformationtemplatelayout.md) for more information.
- `items`: An array of information items that the template displays.
- `actions`: An array of text buttons that provides the actions that the user can perform.

<a id="Discussion"></a>

## Discussion

The template can display up to 10 information items. If `items` contains more objects, the template uses only the first 10. Likewise, the template displays three actions maximum. If `actions` contains more than that, the template uses only the first three.
