> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/distributed/distributedtargetinvocationdecoder/decodereturntype()

# decodeReturnType()

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Attempt to decode the known return type of the distributed invocation.

## Declaration

```swift
mutating func decodeReturnType() throws -> (any Any.Type)?
```

<a id="discussion"></a>

## Discussion

It is legal to implement this by returning `nil`, and then the system will take the concrete return type from the located function signature.
