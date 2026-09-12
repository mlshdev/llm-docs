> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/itemcount](https://developer.apple.com/documentation/carplay/cplisttemplate/itemcount)

# itemCount (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The total number of items, across all sections, in the list.

## Declaration

```swift
var itemCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This value never exceeds [maximumItemCount](maximumitemcount.md). If you initialize a list where the total number of items, across all sections, is greater than [maximumItemCount](maximumitemcount.md), CarPlay only displays items up to this limit and discards the rest.

## See Also

### Getting Supplementary Information

- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path for the specified item.
- [title](title.md): The title that the navigation bar displays when the template is visible.

# itemCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The total number of items, across all sections, in the list.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger itemCount;
```

<a id="Discussion"></a>

## Discussion

This value never exceeds [maximumItemCount](maximumitemcount.md). If you initialize a list where the total number of items, across all sections, is greater than [maximumItemCount](maximumitemcount.md), CarPlay only displays items up to this limit and discards the rest.

## See Also

### Getting Supplementary Information

- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [indexPathForItem:](indexpath%28for_%29.md): Returns the index path for the specified item.
- [title](title.md): The title that the navigation bar displays when the template is visible.
