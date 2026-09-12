> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice/defaultusername](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/defaultusername)

# defaultUsername (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

A default username on protected scanners.

## Declaration

```swift
var defaultUsername: String { get set }
```

<a id="Discussion"></a>

## Discussion

If the scanner is protected, you can set this property to a specific username as a convenience, instead of prompting the user for a username. The value persists until reset to `nil`.

# defaultUsername (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

A default username on protected scanners.

## Declaration

```objectivec
@property (copy) NSString * defaultUsername;
```

<a id="Discussion"></a>

## Discussion

If the scanner is protected, you can set this property to a specific username as a convenience, instead of prompting the user for a username. The value persists until reset to `nil`.
