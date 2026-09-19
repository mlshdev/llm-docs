> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/trustinsights/insightevaluator/insightcontext/operationcategory

# operationCategory

**Framework:** Trust Insights  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The type of operation you’re requesting the evaluation for.

## Declaration

```swift
var operationCategory: InsightEvaluator.OperationCategory
```

<a id="Discussion"></a>

## Discussion

The framework may present information based on this request in the transparency log that shows the use of this framework by your app.

## See Also

### insight context properties

- [requestID](requestid.md): An optional identifier you can use to tie an assessment to a specific transaction.
- [requestedInsight](requestedinsight.md): The insight you’re requesting.
