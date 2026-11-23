> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/itemcount

# itemCount (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The total number of items, across all sections, in the list.

## Declaration

```swift
var itemCount: Int { get }
```

<a id="discussion"></a>

## Discussion

The value in this property never exceeds the maximum number of items, as set in the [maximumItemCount](maximumitemcount.md) property. If you initialize or update the list with more items than the allowed maximum, CarPlay adds items until it reaches the maximum and discards the rest.

## See Also

### Getting item details

- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path for the specified item.

# itemCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The total number of items, across all sections, in the list.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger itemCount;
```

<a id="discussion"></a>

## Discussion

The value in this property never exceeds the maximum number of items, as set in the [maximumItemCount](maximumitemcount.md) property. If you initialize or update the list with more items than the allowed maximum, CarPlay adds items until it reaches the maximum and discards the rest.

## See Also

### Getting item details

- [indexPathForItem:](indexpath%28for_%29.md): Returns the index path for the specified item.
