> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/oslog/oslogstore/getentries(with:at:matching:)

# getEntries(with:at:matching:)

**Framework:** OSLog  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a sequence of log entries filtered by the parameters passed in.

## Declaration

```swift
func getEntries(with options: OSLogEnumerator.Options = [], at position: OSLogPosition? = nil, matching predicate: NSPredicate? = nil) throws -> AnySequence<OSLogEntry>
```
