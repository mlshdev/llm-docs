> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestsgrammarresultsfor:completion:)

# writingToolsCoordinator(\_:requestsGrammarResultsFor:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Asks the delegate for information about grammar issues in the specified context.

## Declaration

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, requestsGrammarResultsFor context: UIWritingToolsCoordinator.Context, completion: @escaping @Sendable ([NSTextCheckingResult]) -> Void)
```

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, grammarResultsFor context: UIWritingToolsCoordinator.Context) async -> [NSTextCheckingResult]
```

<a id="discussion"></a>

## Discussion

To support the grammar presentation UI, the delegate should provide information about the identified and currently indicated grammar issues in the specified context. The elements of the results array should be `NSTextCheckingResult` objects of grammar type, of the sort that are returned from grammar checking, with ranges relative to the context. If you use grammar presentation, you must implement this delegate method to provide them.

# writingToolsCoordinator:requestsGrammarResultsForContext:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Asks the delegate for information about grammar issues in the specified context.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(UIWritingToolsCoordinator *) writingToolsCoordinator requestsGrammarResultsForContext:(UIWritingToolsCoordinatorContext *) context completion:(void (^)(NSArray<NSTextCheckingResult *> *results)) completion;
```

<a id="discussion"></a>

## Discussion

To support the grammar presentation UI, the delegate should provide information about the identified and currently indicated grammar issues in the specified context. The elements of the results array should be `NSTextCheckingResult` objects of grammar type, of the sort that are returned from grammar checking, with ranges relative to the context. If you use grammar presentation, you must implement this delegate method to provide them.
