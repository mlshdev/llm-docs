> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwindowfeatures/width](https://developer.apple.com/documentation/webkit/wkwindowfeatures/width)

# width (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The requested width of the containing window.

## Declaration

```swift
var width: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

The object in this property contains a [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value. If the webpage didn’t request a specific window width, this property is `nil`.

## See Also

### Inspecting Window Position and Dimensions

- [allowsResizing](allowsresizing.md): A Boolean value that indicates whether to make the containing window window resizable.
- [height](height.md): The requested height of the containing window.
- [x](x.md): The requested x-coordinate of the containing window.
- [y](y.md): The requested y-coordinate of the containing window.

# width (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The requested width of the containing window.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * width;
```

<a id="Discussion"></a>

## Discussion

The object in this property contains a [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value. If the webpage didn’t request a specific window width, this property is `nil`.

## See Also

### Inspecting Window Position and Dimensions

- [allowsResizing](allowsresizing.md): A Boolean value that indicates whether to make the containing window window resizable.
- [height](height.md): The requested height of the containing window.
- [x](x.md): The requested x-coordinate of the containing window.
- [y](y.md): The requested y-coordinate of the containing window.
