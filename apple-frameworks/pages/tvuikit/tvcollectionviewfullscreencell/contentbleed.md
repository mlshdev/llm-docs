> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreencell/contentbleed

# contentBleed (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The amount of content that overlaps into the masked portions of the cell.

## Declaration

```swift
var contentBleed: UIEdgeInsets { get }
```

<a id="Discussion"></a>

## Discussion

The portions of content that bleed into the masked portions go out of bounds, and consequently disappear from view.

## See Also

### Modifying Cell Appearance

- [cornerRadius](cornerradius.md): The radius to use when drawing rounded corners for the cell.
- [maskAmount](maskamount.md): The factor that determines the amount of masking applied on the cell.

# contentBleed (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The amount of content that overlaps into the masked portions of the cell.

## Declaration

```objectivec
@property (nonatomic, readonly) UIEdgeInsets contentBleed;
```

<a id="Discussion"></a>

## Discussion

The portions of content that bleed into the masked portions go out of bounds, and consequently disappear from view.

## See Also

### Modifying Cell Appearance

- [cornerRadius](cornerradius.md): The radius to use when drawing rounded corners for the cell.
- [maskAmount](maskamount.md): The factor that determines the amount of masking applied on the cell.
