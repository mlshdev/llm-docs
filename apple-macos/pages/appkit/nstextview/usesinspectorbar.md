> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/usesinspectorbar](https://developer.apple.com/documentation/appkit/nstextview/usesinspectorbar)

# usesInspectorBar (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether this text view uses the inspector bar.

## Declaration

```swift
var usesInspectorBar: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The inspector bar displays text formatting controls, much like those in iWork applications, which can be used in place of the formatting controls in the ruler accessory view.

## See Also

### Using text formatting controls

- [usesRuler](usesruler.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use a ruler.
- [isRulerVisible](isrulervisible.md): A Boolean value that controls whether the scroll view enclosing text views sharing the receiver’s layout manager displays the ruler.

# usesInspectorBar (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether this text view uses the inspector bar.

## Declaration

```objectivec
@property BOOL usesInspectorBar;
```

<a id="Discussion"></a>

## Discussion

The inspector bar displays text formatting controls, much like those in iWork applications, which can be used in place of the formatting controls in the ruler accessory view.

## See Also

### Using text formatting controls

- [usesRuler](usesruler.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use a ruler.
- [rulerVisible](isrulervisible.md): A Boolean value that controls whether the scroll view enclosing text views sharing the receiver’s layout manager displays the ruler.
