> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/updateconfiguration(_:completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scstream/updateconfiguration(_:completionhandler:))

# updateConfiguration(\_:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Updates the stream with a new configuration.

## Declaration

```swift
func updateConfiguration(_ streamConfig: SCStreamConfiguration, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func updateConfiguration(_ streamConfig: SCStreamConfiguration) async throws
```

## Parameters

- `streamConfig`: An object that provides the updated stream configuration.
- `completionHandler`: A completion handler the system calls when this method completes. It includes an error if the update fails.

## See Also

### Updating stream configuration

- [updateContentFilter(\_:completionHandler:)](updatecontentfilter%28__completionhandler_%29.md): Updates the stream by applying a new content filter.

# updateConfiguration:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

Updates the stream with a new configuration.

## Declaration

```objectivec
- (void) updateConfiguration:(SCStreamConfiguration *) streamConfig completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `streamConfig`: An object that provides the updated stream configuration.
- `completionHandler`: A completion handler the system calls when this method completes. It includes an error if the update fails.

## See Also

### Updating stream configuration

- [updateContentFilter:completionHandler:](updatecontentfilter%28__completionhandler_%29.md): Updates the stream by applying a new content filter.
