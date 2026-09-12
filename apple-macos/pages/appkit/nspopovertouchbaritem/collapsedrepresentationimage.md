> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopovertouchbaritem/collapsedrepresentationimage](https://developer.apple.com/documentation/appkit/nspopovertouchbaritem/collapsedrepresentationimage)

# collapsedRepresentationImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The image displayed by the button for the default collapsed representation.

## Declaration

```swift
var collapsedRepresentationImage: UIImage? { get set }
```

```swift
var collapsedRepresentationImage: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

If the [collapsedRepresentation](collapsedrepresentation.md) button has been replaced by a different view, this property may not have any effect.

## See Also

### Configuring the collapsed popover

- [collapsedRepresentation](collapsedrepresentation.md): The view displayed when this item is displayed in its parent bar.
- [collapsedRepresentationLabel](collapsedrepresentationlabel.md): The localized string displayed by the button for the default collapsed representation.

# collapsedRepresentationImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The image displayed by the button for the default collapsed representation.

## Declaration

```objectivec
@property (strong, nullable) UIImage * collapsedRepresentationImage;
```

```objectivec
@property (strong, nullable) NSImage * collapsedRepresentationImage;
```

<a id="Discussion"></a>

## Discussion

If the [collapsedRepresentation](collapsedrepresentation.md) button has been replaced by a different view, this property may not have any effect.

## See Also

### Configuring the collapsed popover

- [collapsedRepresentation](collapsedrepresentation.md): The view displayed when this item is displayed in its parent bar.
- [collapsedRepresentationLabel](collapsedrepresentationlabel.md): The localized string displayed by the button for the default collapsed representation.
