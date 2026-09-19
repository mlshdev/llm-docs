> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/isbackgroundreplacementactive

# isBackgroundReplacementActive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether Background Replacement is currently active on a capture device.

## Declaration

```swift
var isBackgroundReplacementActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Configuring background replacement

- [isBackgroundReplacementEnabled](isbackgroundreplacementenabled.md): A class property that indicates whether a person enables the Background Replacement feature for this app.

# backgroundReplacementActive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether Background Replacement is currently active on a capture device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isBackgroundReplacementActive) BOOL backgroundReplacementActive;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Configuring background replacement

- [backgroundReplacementEnabled](isbackgroundreplacementenabled.md): A class property that indicates whether a person enables the Background Replacement feature for this app.
