> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcameraviewcontroller/issupported](https://developer.apple.com/documentation/visionkit/vndocumentcameraviewcontroller/issupported)

# isSupported (Swift)

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean variable that indicates whether or not the current device supports document scanning.

## Declaration

```swift
class var isSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

This class method returns `false` for unsupported hardware.

## See Also

### Supporting the document camera

- [delegate](delegate.md): The delegate to be notified when the user saves or cancels the document scanner.

# supported (Objective-C)

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean variable that indicates whether or not the current device supports document scanning.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isSupported) BOOL supported;
```

<a id="discussion"></a>

## Discussion

This class method returns `false` for unsupported hardware.

## See Also

### Supporting the document camera

- [delegate](delegate.md): The delegate to be notified when the user saves or cancels the document scanner.
