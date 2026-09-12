> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopovertouchbaritem/collapsedrepresentation](https://developer.apple.com/documentation/appkit/nspopovertouchbaritem/collapsedrepresentation)

# collapsedRepresentation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The view displayed when this item is displayed in its parent bar.

## Declaration

```swift
var collapsedRepresentation: NSView { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this is an [NSButton](../nsbutton.md) whose target is this popover item, whose action is [showPopover(\_:)](showpopover%28__%29.md), and whose image and title are bound to this item’s [collapsedRepresentationImage](collapsedrepresentationimage.md) and [collapsedRepresentationImage](collapsedrepresentationimage.md) respectively.

## See Also

### Configuring the collapsed popover

- [collapsedRepresentationImage](collapsedrepresentationimage.md): The image displayed by the button for the default collapsed representation.
- [collapsedRepresentationLabel](collapsedrepresentationlabel.md): The localized string displayed by the button for the default collapsed representation.

# collapsedRepresentation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The view displayed when this item is displayed in its parent bar.

## Declaration

```objectivec
@property (strong) NSView * collapsedRepresentation;
```

<a id="Discussion"></a>

## Discussion

By default, this is an [NSButton](../nsbutton.md) whose target is this popover item, whose action is [showPopover:](showpopover%28__%29.md), and whose image and title are bound to this item’s [collapsedRepresentationImage](collapsedrepresentationimage.md) and [collapsedRepresentationImage](collapsedrepresentationimage.md) respectively.

## See Also

### Configuring the collapsed popover

- [collapsedRepresentationImage](collapsedrepresentationimage.md): The image displayed by the button for the default collapsed representation.
- [collapsedRepresentationLabel](collapsedrepresentationlabel.md): The localized string displayed by the button for the default collapsed representation.
