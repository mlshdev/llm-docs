> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinformationratingitem/init(rating:maximumrating:title:detail:)](https://developer.apple.com/documentation/carplay/cpinformationratingitem/init(rating:maximumrating:title:detail:))

# init(rating:maximumRating:title:detail:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a rating item with a current and a maximum rating.

## Declaration

```swift
init(rating: NSNumber?, maximumRating: NSNumber?, title: String?, detail: String?)
```

## Parameters

- `rating`: A number in the range of 0 to `maximumRating`. The number must be an increment of 0.5.
- `maximumRating`: A whole number in the range of 1 to 5 that specifies the maximum rating that the item allows.
- `title`: The text that the template displays as the item’s title.
- `detail`: The text that the template displays below or beside the title, depending on the template’s layout. See [CPInformationTemplateLayout](../cpinformationtemplatelayout.md) for more information.

# initWithRating:maximumRating:title:detail: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a rating item with a current and a maximum rating.

## Declaration

```objectivec
- (instancetype) initWithRating:(NSNumber *) rating maximumRating:(NSNumber *) maximumRating title:(NSString *) title detail:(NSString *) detail;
```

## Parameters

- `rating`: A number in the range of 0 to `maximumRating`. The number must be an increment of 0.5.
- `maximumRating`: A whole number in the range of 1 to 5 that specifies the maximum rating that the item allows.
- `title`: The text that the template displays as the item’s title.
- `detail`: The text that the template displays below or beside the title, depending on the template’s layout. See [CPInformationTemplateLayout](../cpinformationtemplatelayout.md) for more information.
