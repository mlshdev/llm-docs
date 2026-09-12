> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreenlayout/maskinset](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreenlayout/maskinset)

# maskInset (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The edge insets of the cell mask.

## Declaration

```swift
var maskInset: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

Use the `maskInset` property to create a mask around the cell that is only revealed when the cell is brought into focus.

The default value of this property is `UIEdgeInsetsMake(32.0, 120.0, 0.0, 120.0)`.

## See Also

### Configuring cell masks

- [maskAmount](maskamount.md): The amount by which to mask the cells in a collection view.

# maskInset (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The edge insets of the cell mask.

## Declaration

```objectivec
@property (nonatomic, assign) UIEdgeInsets maskInset;
```

<a id="Discussion"></a>

## Discussion

Use the `maskInset` property to create a mask around the cell that is only revealed when the cell is brought into focus.

The default value of this property is `UIEdgeInsetsMake(32.0, 120.0, 0.0, 120.0)`.

## See Also

### Configuring cell masks

- [maskAmount](maskamount.md): The amount by which to mask the cells in a collection view.
