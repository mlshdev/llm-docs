> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/shared

# shared (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

The system-provided picker UI instance for capturing display and audio content from someone’s Mac.

## Declaration

```swift
class var shared: SCContentSharingPicker { get }
```

<a id="discussion"></a>

## Discussion

> **Important**

>  Use this shared instance of the system picker rather than creating your own.

The picker gives a person control over what information on their Mac they wish to let your app view or record such as specific applications, displays, and windows.

# sharedPicker (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

The system-provided picker UI instance for capturing display and audio content from someone’s Mac.

## Declaration

```objectivec
@property (class, readonly) SCContentSharingPicker * sharedPicker;
```

<a id="discussion"></a>

## Discussion

> **Important**

>  Use this shared instance of the system picker rather than creating your own.

The picker gives a person control over what information on their Mac they wish to let your app view or record such as specific applications, displays, and windows.
