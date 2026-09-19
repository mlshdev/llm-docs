> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/characterset/init(charactersin:)-8tcll

# init(charactersIn:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initialize with a range of integers.

## Declaration

```swift
init(charactersIn range: Range<Unicode.Scalar>)
```

<a id="discussion"></a>

## Discussion

It is the caller’s responsibility to ensure that the values represent valid `Unicode.Scalar` values, if that is what is desired.
