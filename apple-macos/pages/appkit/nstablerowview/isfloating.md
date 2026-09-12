> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/isfloating](https://developer.apple.com/documentation/appkit/nstablerowview/isfloating)

# isFloating (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies whether the row is drawn using the floating style.

## Declaration

```swift
var isFloating: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Floating is a temporary attribute that is set when a particular group row is actually floating above other rows. The state may change dynamically based on the position of the group row. Drawing may be different for rows that are currently ‘floating’.

## See Also

### Display Style

- [isEmphasized](isemphasized.md): Determines whether the row will draw with the alternate or secondary color (unless overridden).
- [interiorBackgroundStyle](interiorbackgroundstyle.md): Specifies how the subviews should draw.

# floating (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies whether the row is drawn using the floating style.

## Declaration

```objectivec
@property (getter=isFloating) BOOL floating;
```

<a id="Discussion"></a>

## Discussion

Floating is a temporary attribute that is set when a particular group row is actually floating above other rows. The state may change dynamically based on the position of the group row. Drawing may be different for rows that are currently ‘floating’.

## See Also

### Display Style

- [emphasized](isemphasized.md): Determines whether the row will draw with the alternate or secondary color (unless overridden).
- [interiorBackgroundStyle](interiorbackgroundstyle.md): Specifies how the subviews should draw.
