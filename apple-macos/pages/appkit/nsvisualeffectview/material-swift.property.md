> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/material-swift.property](https://developer.apple.com/documentation/appkit/nsvisualeffectview/material-swift.property)

# material (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The material shown by the visual effect view.

## Declaration

```swift
var material: NSVisualEffectView.Material { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [NSVisualEffectView.Material.appearanceBased](material-swift.enum/appearancebased.md); the material updates to the correct material based on the appearance set on this view.

## See Also

### Specifying the Background Material

- [NSVisualEffectView.Material](material-swift.enum.md): Constants to specify the material shown by the visual effect view.

# material (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The material shown by the visual effect view.

## Declaration

```objectivec
@property NSVisualEffectMaterial material;
```

<a id="Discussion"></a>

## Discussion

The default value is [NSVisualEffectMaterialAppearanceBased](material-swift.enum/appearancebased.md); the material updates to the correct material based on the appearance set on this view.

## See Also

### Specifying the Background Material

- [NSVisualEffectMaterial](material-swift.enum.md): Constants to specify the material shown by the visual effect view.
