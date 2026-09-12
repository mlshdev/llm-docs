> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserautomatortask/completionhandler](https://developer.apple.com/documentation/foundation/nsuserautomatortask/completionhandler)

# NSUserAutomatorTask.CompletionHandler (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

Implement this block to retrieve the output of the Automator workflow executed by [execute(withInput:completionHandler:)](execute%28withinput_completionhandler_%29.md).

## Declaration

```swift
typealias CompletionHandler = @Sendable (Any?, (any Error)?) -> Void
```

# NSUserAutomatorTaskCompletionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Implement this block to retrieve the output of the Automator workflow executed by [executeWithInput:completionHandler:](execute%28withinput_completionhandler_%29.md).

## Declaration

```objectivec
typedef void (^)(id, NSError *) NSUserAutomatorTaskCompletionHandler;
```
