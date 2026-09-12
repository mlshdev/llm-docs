> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/isdrawingfindindicator](https://developer.apple.com/documentation/appkit/nsview/isdrawingfindindicator)

# isDrawingFindIndicator (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the view or one of its ancestors is being drawn for a find indicator.

## Declaration

```swift
var isDrawingFindIndicator: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the view contents are being drawn so that they are easily readable against the find indicator background. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

# drawingFindIndicator (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the view or one of its ancestors is being drawn for a find indicator.

## Declaration

```objectivec
@property (readonly, getter=isDrawingFindIndicator) BOOL drawingFindIndicator;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the view contents are being drawn so that they are easily readable against the find indicator background. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).
