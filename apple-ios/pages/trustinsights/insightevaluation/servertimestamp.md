> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/trustinsights/insightevaluation/servertimestamp

# serverTimestamp

**Framework:** Trust Insights  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The server-side timestamp that indicates when the server processed the evaluation, in UTC.

## Declaration

```swift
final let serverTimestamp: Date
```

## See Also

### Evaluation properties

- [additionalInfo](additionalinfo.md): Additional information about the evaluation.
- [generationTimestamp](generationtimestamp.md): The timestamp that indicates when the framework created the on-device portion of the assessment, in UTC.
- [insight](insight.md): Result values and errors for the requested insights.
- [requestID](requestid.md): An app defined identifier.
- [signedPayload](signedpayload.md): A signed data object that contains details about the insight.
