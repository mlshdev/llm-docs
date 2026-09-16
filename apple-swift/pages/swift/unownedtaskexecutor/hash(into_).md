> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unownedtaskexecutor/hash(into:)

# hash(into:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Hash the executor identity into the given hasher.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

<a id="discussion"></a>

## Discussion

This function is available independently from the `Hashable` conformance, allowing back-deployment to older runtimes when implementing `Hashable` in user code
