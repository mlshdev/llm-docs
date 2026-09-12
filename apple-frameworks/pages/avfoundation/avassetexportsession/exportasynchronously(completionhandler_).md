> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/exportasynchronously(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassetexportsession/exportasynchronously(completionhandler:))

# exportAsynchronously(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Starts the asynchronous execution of an export session.

> Use [export(to:as:isolation:)](export%28to_as_isolation_%29.md) instead.

## Declaration

```swift
func exportAsynchronously(completionHandler handler: @escaping @Sendable () -> Void)
```

```swift
func export() async
```

## Parameters

- `handler`: A callback the system invokes when it finishes successfully, or in the event of writing failure.

# exportAsynchronouslyWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Starts the asynchronous execution of an export session.

## Declaration

```objectivec
- (void) exportAsynchronouslyWithCompletionHandler:(void (^)()) handler;
```

## Parameters

- `handler`: A callback the system invokes when it finishes successfully, or in the event of writing failure.

## See Also

### Exporting media

- [cancelExport](cancelexport%28%29.md): Deprecated. Cancels the execution of an export session.
