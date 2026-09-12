> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewrowaction/backgroundcolor](https://developer.apple.com/documentation/appkit/nstableviewrowaction/backgroundcolor)

# backgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The background color of the action button.

## Declaration

```swift
@NSCopying var backgroundColor: NSColor! { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the background color for your button. If you do not specify a value for this property, AppKit assigns a default color based on the value in the [style](style-swift.property.md) property. Generally, this color is red for destructive actions and blue for nondestructive actions.

## See Also

### Configuring the Action’s Appearance

- [style](style-swift.property.md): The style applied to the action button.
- [title](title.md): The title of the action button.

# backgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The background color of the action button.

## Declaration

```objectivec
@property (copy, null_resettable) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the background color for your button. If you do not specify a value for this property, AppKit assigns a default color based on the value in the [style](style-swift.property.md) property. Generally, this color is red for destructive actions and blue for nondestructive actions.

## See Also

### Configuring the Action’s Appearance

- [style](style-swift.property.md): The style applied to the action button.
- [title](title.md): The title of the action button.
