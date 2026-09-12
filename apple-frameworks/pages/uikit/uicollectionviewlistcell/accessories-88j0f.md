> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlistcell/accessories-88j0f](https://developer.apple.com/documentation/uikit/uicollectionviewlistcell/accessories-88j0f)

# accessories

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

An array of the accessories that decorate the cell.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UICellAccessory *> * accessories;
```

<a id="Discussion"></a>

## Discussion

System accessories have system-defined placement within the cell. The system automatically determines their rendering order and which side of the cell they appear on. The order of system accessories in the array doesn’t affect their placement.

For custom accessories, you determine their placement. The order of custom accessories in the array affects the order in which the system evaluates their [UICellAccessoryPosition](../uicellaccessoryposition.md).

> **Important**

>  The system throws an exception if you include more than one instance of any system accessory. You can include multiple custom accessories.

## See Also

### Managing cell accessories

- [UICellAccessory](../uicellaccessory-c.class.md): An accessory in a collection view list cell.
