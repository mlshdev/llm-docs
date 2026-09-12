> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/add(_:)](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/add(_:))

# add(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Adds an observer instance to notify of changes in the content-sharing picker.

## Declaration

```swift
func add(_ observer: any SCContentSharingPickerObserver)
```

## Parameters

- `observer`: The observer instance to send notifications to.

## See Also

### Manage observers

- [remove(\_:)](remove%28__%29.md): Removes an observer instance from the content-sharing picker.

# addObserver: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Adds an observer instance to notify of changes in the content-sharing picker.

## Declaration

```objectivec
- (void) addObserver:(id<SCContentSharingPickerObserver>) observer;
```

## Parameters

- `observer`: The observer instance to send notifications to.

## See Also

### Manage observers

- [removeObserver:](remove%28__%29.md): Removes an observer instance from the content-sharing picker.
