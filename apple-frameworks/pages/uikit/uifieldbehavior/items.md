> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uifieldbehavior/items

# items (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The dynamic items associated with the current field behavior.

## Declaration

```swift
var items: [any UIDynamicItem] { get }
```

<a id="Discussion"></a>

## Discussion

When it is enabled, the current field applies its behavior to all of the items in the array.

## See Also

### Managing the associated dynamic items

- [addItem(\_:)](additem%28__%29.md): Associates the field behavior with the specified dynamic item.
- [removeItem(\_:)](removeitem%28__%29.md): Removes the field behavior from the specified dynamic item.

# items (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The dynamic items associated with the current field behavior.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<UIDynamicItem>> * items;
```

<a id="Discussion"></a>

## Discussion

When it is enabled, the current field applies its behavior to all of the items in the array.

## See Also

### Managing the associated dynamic items

- [addItem:](additem%28__%29.md): Associates the field behavior with the specified dynamic item.
- [removeItem:](removeitem%28__%29.md): Removes the field behavior from the specified dynamic item.
