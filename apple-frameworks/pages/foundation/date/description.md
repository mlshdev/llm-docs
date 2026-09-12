> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/description](https://developer.apple.com/documentation/foundation/date/description)

# description

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The representation is useful for debugging only. There are a number of options to acquire a formatted string for a date including: date formatters (see [NSDateFormatter](https://developer.apple.com//apple_ref/occ/cl/NSDateFormatter) and [Data Formatting Guide](https://developer.apple.com//apple_ref/doc/uid/10000029i)), and the `Date` function `description(locale:)`.

## Declaration

```swift
var description: String { get }
```

## See Also

### Describing Dates

- [description(with:)](description%28with_%29.md): Returns a string representation of the receiver using the given locale.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the date.
