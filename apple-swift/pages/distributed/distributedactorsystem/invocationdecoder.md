> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactorsystem/invocationdecoder](https://developer.apple.com/documentation/distributed/distributedactorsystem/invocationdecoder)

# InvocationDecoder

**Framework:** Distributed  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Type of [DistributedTargetInvocationDecoder](../distributedtargetinvocationdecoder.md) that should be used when decoding invocations during [executeDistributedTarget(on:target:invocationDecoder:handler:)](executedistributedtarget%28on_target_invocationdecoder_handler_%29.md) calls.

## Declaration

```swift
associatedtype InvocationDecoder : DistributedTargetInvocationDecoder where Self.InvocationDecoder.SerializationRequirement == Self.InvocationEncoder.SerializationRequirement
```
