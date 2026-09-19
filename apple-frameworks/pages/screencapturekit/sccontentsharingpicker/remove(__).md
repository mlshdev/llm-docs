> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/remove(_:)

# remove(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Removes an observer instance from the content-sharing picker.

## Declaration

```swift
func remove(_ observer: any SCContentSharingPickerObserver)
```

## Parameters

- `observer`: The observer instance to remove.

## See Also

### Manage observers

- [add(\_:)](add%28__%29.md): Adds an observer instance to notify of changes in the content-sharing picker.

# removeObserver: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Removes an observer instance from the content-sharing picker.

## Declaration

```objectivec
- (void) removeObserver:(id<SCContentSharingPickerObserver>) observer;
```

## Parameters

- `observer`: The observer instance to remove.

## See Also

### Manage observers

- [addObserver:](add%28__%29.md): Adds an observer instance to notify of changes in the content-sharing picker.
