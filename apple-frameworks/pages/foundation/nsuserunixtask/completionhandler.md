> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsuserunixtask/completionhandler

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
