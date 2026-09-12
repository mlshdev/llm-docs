> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescreeninput/init(displayid:)](https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/init(displayid:))

# init(displayID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Initializes a capture screen input that provides media data from the specified display.

## Declaration

```swift
init?(displayID: CGDirectDisplayID)
```

## Parameters

- `displayID`: The ID of the display from which to capture video.

  `CGDirectDisplayID` is defined in `<CoreGraphics/CGDirectDisplay.h>`.

<a id="return-value"></a>

## Return Value

A capture screen input initialized to provide media data from a given display. If the display cannot be used (because it is not available on the system, for example), returns `nil`.

## See Also

### Initializing a capture screen input

- [init()](init%28%29.md): Initializes a capture screen input that provides media data from the main screen.

# initWithDisplayID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Initializes a capture screen input that provides media data from the specified display.

## Declaration

```objectivec
- (instancetype) initWithDisplayID:(CGDirectDisplayID) displayID;
```

## Parameters

- `displayID`: The ID of the display from which to capture video.

  `CGDirectDisplayID` is defined in `<CoreGraphics/CGDirectDisplay.h>`.

<a id="return-value"></a>

## Return Value

A capture screen input initialized to provide media data from a given display. If the display cannot be used (because it is not available on the system, for example), returns `nil`.

## See Also

### Initializing a capture screen input

- [init](init%28%29.md): Initializes a capture screen input that provides media data from the main screen.
- [new](new.md): Creates a capture screen input that provides media data from the main screen.
