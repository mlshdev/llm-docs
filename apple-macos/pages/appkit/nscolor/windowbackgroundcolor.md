> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/windowbackgroundcolor](https://developer.apple.com/documentation/appkit/nscolor/windowbackgroundcolor)

# windowBackgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for the window background.

## Declaration

```swift
class var windowBackgroundColor: NSColor { get }
```

<a id="return-value"></a>

## Return Value

The window background color.

<a id="discussion"></a>

## Discussion

When applied to an [NSBox](../nsbox.md) object, this color supports Desktop Tinting in Dark Mode. With Desktop Tinting, the system modifies this color dynamically by incorporating some of the color from the underlying desktop image. The system does not apply this dynamic tinting effect to other types of views.

## See Also

### Window colors

- [windowFrameTextColor](windowframetextcolor.md): The color to use for text in a window’s frame.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color to use in the area beneath your window’s views.

# windowBackgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for the window background.

## Declaration

```objectivec
@property (class, strong, readonly) NSColor * windowBackgroundColor;
```

<a id="return-value"></a>

## Return Value

The window background color.

<a id="discussion"></a>

## Discussion

When applied to an [NSBox](../nsbox.md) object, this color supports Desktop Tinting in Dark Mode. With Desktop Tinting, the system modifies this color dynamically by incorporating some of the color from the underlying desktop image. The system does not apply this dynamic tinting effect to other types of views.

## See Also

### Window colors

- [windowFrameTextColor](windowframetextcolor.md): The color to use for text in a window’s frame.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color to use in the area beneath your window’s views.
