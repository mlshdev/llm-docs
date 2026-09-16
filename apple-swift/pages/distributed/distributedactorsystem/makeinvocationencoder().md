> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/distributed/distributedactorsystem/makeinvocationencoder()

# makeInvocationEncoder()

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Invoked by the Swift runtime when a distributed remote call is about to be made.

## Declaration

```swift
func makeInvocationEncoder() -> Self.InvocationEncoder
```

<a id="discussion"></a>

## Discussion

The returned `DistributedTargetInvocation` will be populated with all arguments, generic substitutions, and specific error and return types that are associated with this specific invocation.
