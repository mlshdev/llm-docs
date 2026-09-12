> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluation/signedpayload](https://developer.apple.com/documentation/trustinsights/insightevaluation/signedpayload)

# signedPayload

**Framework:** Trust Insights  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A signed data object that contains details about the insight.

## Declaration

```swift
final let signedPayload: Data
```

<a id="Discussion"></a>

## Discussion

This data is a signed data object that represents Trust Insights Data. Trust Insights Data is the data package that contains assessments of the legitimacy of end user activity that Trust Insights returns.

The data is in the CBOR Object Signing and Encryption ([CBOR](https://www.rfc-editor.org/rfc/rfc8152)) format for server side validation and processing.

## See Also

### Evaluation properties

- [additionalInfo](additionalinfo.md): Additional information about the evaluation.
- [generationTimestamp](generationtimestamp.md): The timestamp that indicates when the framework created the on-device portion of the assessment, in UTC.
- [insight](insight.md): Result values and errors for the requested insights.
- [requestID](requestid.md): An app defined identifier.
- [serverTimestamp](servertimestamp.md): The server-side timestamp that indicates when the server processed the evaluation, in UTC.
