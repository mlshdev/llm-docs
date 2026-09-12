> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserunixtask/completionhandler](https://developer.apple.com/documentation/foundation/nsuserunixtask/completionhandler)

# NSUserUnixTask.CompletionHandler (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

Implement this block to retrieve an error from the Unix scripted executed by [execute(withArguments:completionHandler:)](execute%28witharguments_completionhandler_%29.md).

## Declaration

```swift
typealias CompletionHandler = @Sendable ((any Error)?) -> Void
```

# NSUserUnixTaskCompletionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Implement this block to retrieve an error from the Unix scripted executed by [executeWithArguments:completionHandler:](execute%28witharguments_completionhandler_%29.md).

## Declaration

```objectivec
typedef void (^)(NSError *) NSUserUnixTaskCompletionHandler;
```
