> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/cascadingreferenceframe](https://developer.apple.com/documentation/appkit/nswindow/cascadingreferenceframe)

# cascadingReferenceFrame (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```swift
var cascadingReferenceFrame: NSRect { get }
```

<a id="discussion"></a>

## Discussion

The frame to use when cascading or sizing a new window based on the receiver’s position or size. This may be different from `frame` when the receiver is positioned by the system.

# cascadingReferenceFrame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```objectivec
@property (readonly) NSRect cascadingReferenceFrame;
```

<a id="discussion"></a>

## Discussion

The frame to use when cascading or sizing a new window based on the receiver’s position or size. This may be different from `frame` when the receiver is positioned by the system.
