> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/showgrammarpresentation(for:in:)](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/showgrammarpresentation(for:in:))

# showGrammarPresentation(for:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Used to support the presentation of grammar issues in text. When the user interacts with an issue, call this to bring up the relevant UI.

## Declaration

```swift
func showGrammarPresentation(for range: NSRange, in context: UIWritingToolsCoordinator.Context) -> Bool
```

<a id="discussion"></a>

## Discussion

Pass in context and range to identify the issue the user selected. The context must match one of the contexts returned from [writingToolsCoordinator(\_:requestsContextsFor:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestscontextsfor_completion_%29.md) and the range must match the range in the context of one of the grammar details returned for that context from [writingToolsCoordinator(\_:requestsGrammarResultsFor:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestsgrammarresultsfor_completion_%29.md) Returns NO if the UI cannot be brought up.

# showGrammarPresentationForRange:inContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Used to support the presentation of grammar issues in text. When the user interacts with an issue, call this to bring up the relevant UI.

## Declaration

```objectivec
- (BOOL) showGrammarPresentationForRange:(NSRange) range inContext:(UIWritingToolsCoordinatorContext *) context;
```

<a id="discussion"></a>

## Discussion

Pass in context and range to identify the issue the user selected. The context must match one of the contexts returned from [writingToolsCoordinator:requestsContextsForScope:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestscontextsfor_completion_%29.md) and the range must match the range in the context of one of the grammar details returned for that context from [writingToolsCoordinator:requestsGrammarResultsForContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestsgrammarresultsfor_completion_%29.md) Returns NO if the UI cannot be brought up.
