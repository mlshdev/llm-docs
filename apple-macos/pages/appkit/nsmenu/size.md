> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsmenu/size

# size (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The size of the menu in screen coordinates

## Declaration

```swift
var size: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a value of type `NSSize`, indicating the size of the menu in screen coordinates.

The menu may draw at a smaller size when shown, depending on its positioning and display configuration.

## See Also

### Configuring Menu Size

- [minimumWidth](minimumwidth.md): The minimum width of the menu in screen coordinates.

# size (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The size of the menu in screen coordinates

## Declaration

```objectivec
@property (readonly) NSSize size;
```

<a id="Discussion"></a>

## Discussion

This property contains a value of type `NSSize`, indicating the size of the menu in screen coordinates.

The menu may draw at a smaller size when shown, depending on its positioning and display configuration.

## See Also

### Configuring Menu Size

- [minimumWidth](minimumwidth.md): The minimum width of the menu in screen coordinates.
- [sizeToFit](sizetofit.md): Deprecated. Resizes the menu to exactly fit its items.
