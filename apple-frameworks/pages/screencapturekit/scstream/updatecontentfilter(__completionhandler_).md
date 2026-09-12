> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/updatecontentfilter(_:completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scstream/updatecontentfilter(_:completionhandler:))

# updateContentFilter(\_:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Updates the stream by applying a new content filter.

## Declaration

```swift
func updateContentFilter(_ contentFilter: SCContentFilter, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func updateContentFilter(_ contentFilter: SCContentFilter) async throws
```

## Parameters

- `contentFilter`: The content filter to apply.
- `completionHandler`: A completion handler the system calls when this method completes. It includes an error if the update fails.

## See Also

### Updating stream configuration

- [updateConfiguration(\_:completionHandler:)](updateconfiguration%28__completionhandler_%29.md): Updates the stream with a new configuration.

# updateContentFilter:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Updates the stream by applying a new content filter.

## Declaration

```objectivec
- (void) updateContentFilter:(SCContentFilter *) contentFilter completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `contentFilter`: The content filter to apply.
- `completionHandler`: A completion handler the system calls when this method completes. It includes an error if the update fails.

## See Also

### Updating stream configuration

- [updateConfiguration:completionHandler:](updateconfiguration%28__completionhandler_%29.md): Updates the stream with a new configuration.
