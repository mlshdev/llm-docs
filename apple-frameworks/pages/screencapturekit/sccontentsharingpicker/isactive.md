> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/isactive](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/isactive)

# isActive (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates if the picker is active.

## Declaration

```swift
var isActive: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When this value is `true`, the capture stream picker is active, available for managing capture. The default value is `false`.

# active (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates if the picker is active.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isActive) BOOL active;
```

<a id="discussion"></a>

## Discussion

When this value is `true`, the capture stream picker is active, available for managing capture. The default value is `false`.
