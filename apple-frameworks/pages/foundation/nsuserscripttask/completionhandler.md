> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserscripttask/completionhandler](https://developer.apple.com/documentation/foundation/nsuserscripttask/completionhandler)

# NSUserScriptTask.CompletionHandler (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

Implement this block to retrieve the error of the script executed by [execute(completionHandler:)](execute%28completionhandler_%29.md).

## Declaration

```swift
typealias CompletionHandler = @Sendable ((any Error)?) -> Void
```

# NSUserScriptTaskCompletionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Implement this block to retrieve the error of the script executed by [executeWithCompletionHandler:](execute%28completionhandler_%29.md).

## Declaration

```objectivec
typedef void (^)(NSError *) NSUserScriptTaskCompletionHandler;
```
