> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/url/asyncbytes/asynciterator/next()

# next()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Declaration

```swift
mutating func next() async throws -> UInt8?
```

<a id="return-value"></a>

## Return Value

The next element, if it exists, or `nil` to signal the end of the sequence.
