> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwindowfeatures/allowsresizing](https://developer.apple.com/documentation/webkit/wkwindowfeatures/allowsresizing)

# allowsResizing (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether to make the containing window window resizable.

## Declaration

```swift
var allowsResizing: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

If the webpage didn’t request a resizable window, this property is `nil`.

## See Also

### Inspecting Window Position and Dimensions

- [height](height.md): The requested height of the containing window.
- [width](width.md): The requested width of the containing window.
- [x](x.md): The requested x-coordinate of the containing window.
- [y](y.md): The requested y-coordinate of the containing window.

# allowsResizing (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether to make the containing window window resizable.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * allowsResizing;
```

<a id="Discussion"></a>

## Discussion

If the webpage didn’t request a resizable window, this property is `nil`.

## See Also

### Inspecting Window Position and Dimensions

- [height](height.md): The requested height of the containing window.
- [width](width.md): The requested width of the containing window.
- [x](x.md): The requested x-coordinate of the containing window.
- [y](y.md): The requested y-coordinate of the containing window.
