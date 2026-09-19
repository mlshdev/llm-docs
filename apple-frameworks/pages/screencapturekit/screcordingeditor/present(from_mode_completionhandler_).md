> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/screcordingeditor/present(from:mode:completionhandler:)

# present(from:mode:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** tvOS 27.0+

## Declaration

```swift
func present(from windowScene: UIWindowScene, mode: SCRecordingEditor.Mode, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func present(from windowScene: UIWindowScene, mode: SCRecordingEditor.Mode) async throws
```

# presentFromWindowScene:mode:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** tvOS 27.0+

## Declaration

```objectivec
- (void) presentFromWindowScene:(UIWindowScene *) windowScene mode:(SCRecordingEditorMode) mode completionHandler:(void (^)(NSError *error)) completionHandler;
```
