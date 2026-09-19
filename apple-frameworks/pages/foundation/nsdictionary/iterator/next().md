> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsdictionary/iterator/next()

# next()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the next key-value pair of a dictionary object as a tuple.

## Declaration

```swift
final func next() -> (key: Any, value: Any)?
```

<a id="Discussion"></a>

## Discussion

If all key-value pairs have been iterated over, this method returns `nil`.
