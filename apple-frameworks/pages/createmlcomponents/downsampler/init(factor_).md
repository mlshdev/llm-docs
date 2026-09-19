> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/downsampler/init(factor:)

# init(factor:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a down sample temporal transformer.

## Declaration

```swift
init(factor: Int)
```

## Parameters

- `factor`: The down sample factor to the input stream.

<a id="discussion"></a>

## Discussion

> **Precondition**

> `factor` must be greater than 0.
