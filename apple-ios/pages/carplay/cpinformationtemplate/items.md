> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinformationtemplate/items](https://developer.apple.com/documentation/carplay/cpinformationtemplate/items)

# items (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The items that the template displays.

## Declaration

```swift
var items: [CPInformationItem] { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a new array to this property to update the items that the template displays. The template can display 10 items maximum. If the array contains more items, the template uses only the first 10.

## See Also

### Managing the Items

- [CPInformationItem](../cpinformationitem.md): A data object that provides content for an information template.
- [CPInformationRatingItem](../cpinformationratingitem.md): A data object that provides rated content for an information template.

# items (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The items that the template displays.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<__kindof CPInformationItem *> * items;
```

<a id="Discussion"></a>

## Discussion

Assign a new array to this property to update the items that the template displays. The template can display 10 items maximum. If the array contains more items, the template uses only the first 10.

## See Also

### Managing the Items

- [CPInformationItem](../cpinformationitem.md): A data object that provides content for an information template.
- [CPInformationRatingItem](../cpinformationratingitem.md): A data object that provides rated content for an information template.
