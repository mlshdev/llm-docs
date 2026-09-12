> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserapplescripttask/completionhandler](https://developer.apple.com/documentation/foundation/nsuserapplescripttask/completionhandler)

# NSUserAppleScriptTask.CompletionHandler (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

Implement this block to retrieve the result of the AppleScript executed by [execute(withAppleEvent:completionHandler:)](execute%28withappleevent_completionhandler_%29.md).

## Declaration

```swift
typealias CompletionHandler = @Sendable (NSAppleEventDescriptor?, (any Error)?) -> Void
```

# NSUserAppleScriptTaskCompletionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Implement this block to retrieve the result of the AppleScript executed by [executeWithAppleEvent:completionHandler:](execute%28withappleevent_completionhandler_%29.md).

## Declaration

```objectivec
typedef void (^)(NSAppleEventDescriptor *, NSError *) NSUserAppleScriptTaskCompletionHandler;
```
