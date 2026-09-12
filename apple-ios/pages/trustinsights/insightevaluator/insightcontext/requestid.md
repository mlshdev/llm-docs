> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/insightcontext/requestid](https://developer.apple.com/documentation/trustinsights/insightevaluator/insightcontext/requestid)

# requestID

**Framework:** Trust Insights  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An optional identifier you can use to tie an assessment to a specific transaction.

## Declaration

```swift
var requestID: String?
```

<a id="Discussion"></a>

## Discussion

It’s a best practice to use a server generated identifier and then to verify that your app includes it in the evaluation result. The enables your app to verify that the service produced the result in response to the specific request.

## See Also

### insight context properties

- [operationCategory](operationcategory.md): The type of operation you’re requesting the evaluation for.
- [requestedInsight](requestedinsight.md): The insight you’re requesting.
