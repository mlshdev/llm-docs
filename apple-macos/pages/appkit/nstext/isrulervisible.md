> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/isrulervisible](https://developer.apple.com/documentation/appkit/nstext/isrulervisible)

# isRulerVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver’s enclosing scroll view shows its ruler.

## Declaration

```swift
var isRulerVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver’s enclosing scroll view shows its ruler, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Using the ruler

- [toggleRuler(\_:)](toggleruler%28__%29.md): This action method shows or hides the ruler, if the receiver is enclosed in a scroll view.

# rulerVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver’s enclosing scroll view shows its ruler.

## Declaration

```objectivec
@property (readonly, getter=isRulerVisible) BOOL rulerVisible;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver’s enclosing scroll view shows its ruler, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Using the ruler

- [toggleRuler:](toggleruler%28__%29.md): This action method shows or hides the ruler, if the receiver is enclosed in a scroll view.
