> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/trustinsights/insightevaluation/insight

# insight

**Framework:** Trust Insights  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Result values and errors for the requested insights.

## Declaration

```swift
final let insight: (repeat each InsightResult)
```

## See Also

### Evaluation properties

- [additionalInfo](additionalinfo.md): Additional information about the evaluation.
- [generationTimestamp](generationtimestamp.md): The timestamp that indicates when the framework created the on-device portion of the assessment, in UTC.
- [requestID](requestid.md): An app defined identifier.
- [serverTimestamp](servertimestamp.md): The server-side timestamp that indicates when the server processed the evaluation, in UTC.
- [signedPayload](signedpayload.md): A signed data object that contains details about the insight.
