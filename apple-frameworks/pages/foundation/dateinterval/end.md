> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/dateinterval/end

# end

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The end date.

## Declaration

```swift
var end: Date { get set }
```

<a id="Discussion"></a>

## Discussion

Precondition: `end >= start`

## See Also

### Accessing Start Date, End Date, and Duration

- [start](start.md): The start date.
- [duration](duration.md): The duration.
