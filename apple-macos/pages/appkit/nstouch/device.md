> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstouch/device

# device (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The digitizer that generates the touch. Useful to distinguish touches emanating from multiple-device scenarios.

## Declaration

```swift
var device: Any? { get }
```

## See Also

### Using Touch Device Properties

- [deviceSize](devicesize.md): The range of the touch device in points, such as 72 ppi.

# device (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The digitizer that generates the touch. Useful to distinguish touches emanating from multiple-device scenarios.

## Declaration

```objectivec
@property (strong, readonly, nullable) id device;
```

## See Also

### Using Touch Device Properties

- [deviceSize](devicesize.md): The range of the touch device in points, such as 72 ppi.
