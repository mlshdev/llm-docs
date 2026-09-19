> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreencell/maskamount

# maskAmount (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The factor that determines the amount of masking applied on the cell.

## Declaration

```swift
var maskAmount: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The amount of masking is determined by attributes of the collection view. A value of 0.0 is applied automatically when the cell is in full screen mode, indicating that there is no masking around the cell. A value of 1.0 is the default masking applied in browsing mode.

## See Also

### Modifying Cell Appearance

- [contentBleed](contentbleed.md): The amount of content that overlaps into the masked portions of the cell.
- [cornerRadius](cornerradius.md): The radius to use when drawing rounded corners for the cell.

# maskAmount (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The factor that determines the amount of masking applied on the cell.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat maskAmount;
```

<a id="Discussion"></a>

## Discussion

The amount of masking is determined by attributes of the collection view. A value of 0.0 is applied automatically when the cell is in full screen mode, indicating that there is no masking around the cell. A value of 1.0 is the default masking applied in browsing mode.

## See Also

### Modifying Cell Appearance

- [contentBleed](contentbleed.md): The amount of content that overlaps into the masked portions of the cell.
- [cornerRadius](cornerradius.md): The radius to use when drawing rounded corners for the cell.
