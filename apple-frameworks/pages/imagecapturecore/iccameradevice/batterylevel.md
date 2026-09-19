> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameradevice/batterylevel

# batteryLevel (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The battery charge level.

## Declaration

```swift
var batteryLevel: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property ranges from 0 to 100.

## See Also

### Inspecting the Battery Charge Level

- [batteryLevelAvailable](batterylevelavailable.md): A Boolean value that indicates whether the battery charge level is available.

# batteryLevel (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The battery charge level.

## Declaration

```objectivec
@property (readonly) NSUInteger batteryLevel;
```

<a id="Discussion"></a>

## Discussion

The value of this property ranges from 0 to 100.

## See Also

### Inspecting the Battery Charge Level

- [batteryLevelAvailable](batterylevelavailable.md): A Boolean value that indicates whether the battery charge level is available.
