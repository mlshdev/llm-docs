> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreencell/cornerradius

# cornerRadius (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The radius to use when drawing rounded corners for the cell.

## Declaration

```swift
var cornerRadius: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Setting the radius to a value greater than 0.0 points applies increasingly rounded corners to the cell.

## See Also

### Modifying Cell Appearance

- [contentBleed](contentbleed.md): The amount of content that overlaps into the masked portions of the cell.
- [maskAmount](maskamount.md): The factor that determines the amount of masking applied on the cell.

# cornerRadius (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The radius to use when drawing rounded corners for the cell.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat cornerRadius;
```

<a id="Discussion"></a>

## Discussion

Setting the radius to a value greater than 0.0 points applies increasingly rounded corners to the cell.

## See Also

### Modifying Cell Appearance

- [contentBleed](contentbleed.md): The amount of content that overlaps into the masked portions of the cell.
- [maskAmount](maskamount.md): The factor that determines the amount of masking applied on the cell.
