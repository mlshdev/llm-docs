> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/outputspan/removelast()

# removeLast()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Remove the last initialized element from this span.

## Declaration

```swift
mutating func removeLast() -> Element
```

<a id="return-value"></a>

## Return Value

The removed element.

<a id="discussion"></a>

## Discussion

Returns the last element. The `OutputSpan` must not be empty.
