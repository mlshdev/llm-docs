> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/cancelexport()](https://developer.apple.com/documentation/avfoundation/avassetexportsession/cancelexport())

# cancelExport() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Cancels the execution of an export session.

> Use Task.cancel() instead

## Declaration

```swift
func cancelExport()
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol. Use [cancel()](https://developer.apple.com/documentation/swift/task/cancel%28%29) on the [Task](https://developer.apple.com/documentation/swift/task) or parent task that initiated the export instead.

# cancelExport (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Cancels the execution of an export session.

## Declaration

```objectivec
- (void) cancelExport;
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol. Use [cancel()](https://developer.apple.com/documentation/swift/task/cancel%28%29) on the [Task](https://developer.apple.com/documentation/swift/task) or parent task that initiated the export instead.

## See Also

### Exporting media

- [exportAsynchronouslyWithCompletionHandler:](exportasynchronously%28completionhandler_%29.md): Deprecated. Starts the asynchronous execution of an export session.
