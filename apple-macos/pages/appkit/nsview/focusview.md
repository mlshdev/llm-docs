> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/focusview](https://developer.apple.com/documentation/appkit/nsview/focusview)

# focusView (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The currently focused view object.

## Declaration

```swift
class var focusView: NSView? { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is `nil` if there is no focused view.

# focusView (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The currently focused view object.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSView * focusView;
```

<a id="Discussion"></a>

## Discussion

The value in this property is `nil` if there is no focused view.
