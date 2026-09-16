> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/regex/wordboundarykind(_:)

# wordBoundaryKind(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a regular expression that uses the specified word boundary algorithm.

## Declaration

```swift
func wordBoundaryKind(_ wordBoundaryKind: RegexWordBoundaryKind) -> Regex<Regex<Output>.RegexOutput>
```

## Parameters

- `wordBoundaryKind`: The algorithm to use for determining word boundaries.

<a id="return-value"></a>

## Return Value

The modified regular expression.
