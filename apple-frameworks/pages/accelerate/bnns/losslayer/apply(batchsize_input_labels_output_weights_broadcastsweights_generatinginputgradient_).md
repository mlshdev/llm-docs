> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/losslayer/apply(batchsize:input:labels:output:weights:broadcastsweights:generatinginputgradient:)](https://developer.apple.com/documentation/accelerate/bnns/losslayer/apply(batchsize:input:labels:output:weights:broadcastsweights:generatinginputgradient:))

# apply(batchSize:input:labels:output:weights:broadcastsWeights:generatingInputGradient:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

> Use the BNNSGraph API instead.

## Declaration

```swift
func apply(batchSize: Int, input: BNNSNDArrayDescriptor, labels: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, weights: BNNSNDArrayDescriptor?, broadcastsWeights: Bool, generatingInputGradient inputGradient: BNNSNDArrayDescriptor) throws
```
