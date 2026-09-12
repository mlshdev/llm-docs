> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/maximumitemcount](https://developer.apple.com/documentation/carplay/cplisttemplate/maximumitemcount)

# maximumItemCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of items, across all sections, that the template can display.

## Declaration

```swift
class var maximumItemCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is dependent on any user interface limits that the vehicle imposes. See [CPSessionConfiguration](../cpsessionconfiguration.md) for more information. At runtime, use this value to determine the maximum number of items, across all sections, that your list can display.

## See Also

### Getting Supplementary Information

- [itemCount](itemcount.md): The total number of items, across all sections, in the list.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path for the specified item.
- [title](title.md): The title that the navigation bar displays when the template is visible.

# maximumItemCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of items, across all sections, that the template can display.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSUInteger maximumItemCount;
```

<a id="Discussion"></a>

## Discussion

This property’s value is dependent on any user interface limits that the vehicle imposes. See [CPSessionConfiguration](../cpsessionconfiguration.md) for more information. At runtime, use this value to determine the maximum number of items, across all sections, that your list can display.

## See Also

### Getting Supplementary Information

- [itemCount](itemcount.md): The total number of items, across all sections, in the list.
- [indexPathForItem:](indexpath%28for_%29.md): Returns the index path for the specified item.
- [title](title.md): The title that the navigation bar displays when the template is visible.
