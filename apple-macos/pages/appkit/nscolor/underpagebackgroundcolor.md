> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/underpagebackgroundcolor](https://developer.apple.com/documentation/appkit/nscolor/underpagebackgroundcolor)

# underPageBackgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

The color to use in the area beneath your window’s views.

## Declaration

```swift
class var underPageBackgroundColor: NSColor { get }
```

<a id="return-value"></a>

## Return Value

Use this color to fill the backdrop underneath your app’s main content.

<a id="discussion"></a>

## Discussion

When applied to an [NSBox](../nsbox.md) object, this color supports Desktop Tinting in Dark Mode. With Desktop Tinting, the system modifies this color dynamically by incorporating some of the color from the underlying desktop image. The system does not apply this dynamic tinting effect to other types of views.

## See Also

### Window colors

- [windowBackgroundColor](windowbackgroundcolor.md): The color to use for the window background.
- [windowFrameTextColor](windowframetextcolor.md): The color to use for text in a window’s frame.

# underPageBackgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

The color to use in the area beneath your window’s views.

## Declaration

```objectivec
@property (class, strong, readonly) NSColor * underPageBackgroundColor;
```

<a id="return-value"></a>

## Return Value

Use this color to fill the backdrop underneath your app’s main content.

<a id="discussion"></a>

## Discussion

When applied to an [NSBox](../nsbox.md) object, this color supports Desktop Tinting in Dark Mode. With Desktop Tinting, the system modifies this color dynamically by incorporating some of the color from the underlying desktop image. The system does not apply this dynamic tinting effect to other types of views.

## See Also

### Window colors

- [windowBackgroundColor](windowbackgroundcolor.md): The color to use for the window background.
- [windowFrameTextColor](windowframetextcolor.md): The color to use for text in a window’s frame.
