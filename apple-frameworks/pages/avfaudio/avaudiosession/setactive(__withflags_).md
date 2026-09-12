> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setactive(_:withflags:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setactive(_:withflags:))

# setActive(\_:withFlags:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Activates or deactivates your app’s audio session; provides flags for use by other audio sessions.

> Use [setActive(\_:options:)](setactive%28__options_%29.md) instead.

## Declaration

```swift
func setActive(_ active: Bool, withFlags flags: Int) throws
```

## Parameters

- `active`: Use [true](https://developer.apple.com/documentation/swift/true) to activate your app’s audio session or [false](https://developer.apple.com/documentation/swift/false) to deactivate it.
- `flags`: A bitmapped value containing one or more flags.

<a id="Discussion"></a>

## Discussion

If another app’s active audio session has higher priority than your app, and that other audio session doesn’t allow mixing with other apps, attempting to activate your audio session might fail.

# setActive:withFlags:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Activates or deactivates your app’s audio session; provides flags for use by other audio sessions.

> Use [setActive:withOptions:error:](setactive%28__options_%29.md) instead.

## Declaration

```objectivec
- (BOOL) setActive:(BOOL) active withFlags:(NSInteger) flags error:(NSError **) outError;
```

## Parameters

- `active`: Use [true](https://developer.apple.com/documentation/swift/true) to activate your app’s audio session or [false](https://developer.apple.com/documentation/swift/false) to deactivate it.
- `flags`: A bitmapped value containing one or more flags.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) on success or [false](https://developer.apple.com/documentation/swift/false) on failure.

<a id="Discussion"></a>

## Discussion

If another app’s active audio session has higher priority than your app, and that other audio session doesn’t allow mixing with other apps, attempting to activate your audio session might fail.
