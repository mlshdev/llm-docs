> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreenlayout/maskamount](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreenlayout/maskamount)

# maskAmount (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The amount by which to mask the cells in a collection view.

## Declaration

```swift
var maskAmount: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use the `maskAmount` property to change how much masking the collection view applies to its cells. Setting the value of the property on the layout updates the `maskAmount` value of all the cells.

This property can take on a float value between `0` and `1.0`. A value of `0` indicates that the cells are full-screen, and a value of `1.0` indicates that the collection view applies the full mask to its cells.

The default value of this property is `1.0`.

![Diagrams showing a fully masked cell with a maskAmount value of 1.0, and an unmasked cell with a maskAmount value of 0.0.](https://developer.apple.com/images/com.apple.tvuikit/media-4142366@2x.png)

## See Also

### Configuring cell masks

- [maskInset](maskinset.md): The edge insets of the cell mask.

# maskAmount (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The amount by which to mask the cells in a collection view.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat maskAmount;
```

<a id="Discussion"></a>

## Discussion

Use the `maskAmount` property to change how much masking the collection view applies to its cells. Setting the value of the property on the layout updates the `maskAmount` value of all the cells.

This property can take on a float value between `0` and `1.0`. A value of `0` indicates that the cells are full-screen, and a value of `1.0` indicates that the collection view applies the full mask to its cells.

The default value of this property is `1.0`.

![Diagrams showing a fully masked cell with a maskAmount value of 1.0, and an unmasked cell with a maskAmount value of 0.0.](https://developer.apple.com/images/com.apple.tvuikit/media-4142366@2x.png)

## See Also

### Configuring cell masks

- [maskInset](maskinset.md): The edge insets of the cell mask.
