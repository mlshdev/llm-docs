> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/privatecloudcomputelanguagemodel/quotausage-swift.struct/resetdate](https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/quotausage-swift.struct/resetdate)

# resetDate

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The date at which the quota refreshes.

## Declaration

```swift
var resetDate: Date?
```

## Mentioned In

- [Adding server-side intelligence with Private Cloud Compute](../../adding-server-side-intelligence-with-private-cloud-compute.md)

<a id="discussion"></a>

## Discussion

A `nil` value indicates that the model provider has not reported a reset time. This may be because the provider’s limit does not refresh on a fixed schedule, or because the provider does not expose this information.

## See Also

### Getting the quota status

- [status](status-swift.property.md): The current quota status.
- [PrivateCloudComputeLanguageModel.QuotaUsage.Status](status-swift.enum.md): The quota status of a language model.
