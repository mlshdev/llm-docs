> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/devicesize](https://developer.apple.com/documentation/appkit/nstouch/devicesize)

# deviceSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The range of the touch device in points, such as 72 ppi.

## Declaration

```swift
var deviceSize: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

The lower-left corner of the surface is considered (0,0).

## See Also

### Using Touch Device Properties

- [device](device.md): The digitizer that generates the touch. Useful to distinguish touches emanating from multiple-device scenarios.

# deviceSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The range of the touch device in points, such as 72 ppi.

## Declaration

```objectivec
@property (readonly) NSSize deviceSize;
```

<a id="Discussion"></a>

## Discussion

The lower-left corner of the surface is considered (0,0).

## See Also

### Using Touch Device Properties

- [device](device.md): The digitizer that generates the touch. Useful to distinguish touches emanating from multiple-device scenarios.
