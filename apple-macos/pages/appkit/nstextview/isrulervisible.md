> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/isrulervisible](https://developer.apple.com/documentation/appkit/nstextview/isrulervisible)

# isRulerVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the scroll view enclosing text views sharing the receiver’s layout manager displays the ruler.

## Declaration

```swift
var isRulerVisible: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to show the ruler, [false](https://developer.apple.com/documentation/swift/false) to hide the ruler. By default, the ruler is hidden.

## See Also

### Related Documentation

- [toggleRuler(\_:)](../nstext/toggleruler%28__%29.md): This action method shows or hides the ruler, if the receiver is enclosed in a scroll view.

### Using text formatting controls

- [usesRuler](usesruler.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use a ruler.
- [usesInspectorBar](usesinspectorbar.md): A Boolean value that indicates whether this text view uses the inspector bar.

# rulerVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the scroll view enclosing text views sharing the receiver’s layout manager displays the ruler.

## Declaration

```objectivec
@property (getter=isRulerVisible) BOOL rulerVisible;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to show the ruler, [false](https://developer.apple.com/documentation/swift/false) to hide the ruler. By default, the ruler is hidden.

## See Also

### Related Documentation

- [toggleRuler:](../nstext/toggleruler%28__%29.md): This action method shows or hides the ruler, if the receiver is enclosed in a scroll view.

### Using text formatting controls

- [usesRuler](usesruler.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use a ruler.
- [usesInspectorBar](usesinspectorbar.md): A Boolean value that indicates whether this text view uses the inspector bar.
