> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/textcontainerinset](https://developer.apple.com/documentation/uikit/uitextview/textcontainerinset)

# textContainerInset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The inset of the text container’s layout area within the text view’s content area.

## Declaration

```swift
var textContainerInset: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

This property provides text margins for text laid out in the text view. By default the value of this property is `(8, 0, 8, 0)`.

## See Also

### Configuring layout attributes

- [usesStandardTextScaling](usesstandardtextscaling.md): A Boolean value that determines the rendering scale of the text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

# textContainerInset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The inset of the text container’s layout area within the text view’s content area.

## Declaration

```objectivec
@property (nonatomic, assign) UIEdgeInsets textContainerInset;
```

<a id="Discussion"></a>

## Discussion

This property provides text margins for text laid out in the text view. By default the value of this property is `(8, 0, 8, 0)`.

## See Also

### Configuring layout attributes

- [usesStandardTextScaling](usesstandardtextscaling.md): A Boolean value that determines the rendering scale of the text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
