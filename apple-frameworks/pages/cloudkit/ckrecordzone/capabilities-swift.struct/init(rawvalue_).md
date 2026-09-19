> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckrecordzone/capabilities-swift.struct/init(rawvalue:)

# init(rawValue:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a set of capabilities for a record zone.

## Declaration

```swift
init(rawValue: UInt)
```

## Parameters

- `rawValue`: An integer that represents the combined set of capabilities to create.

<a id="Discussion"></a>

## Discussion

Capabilities on record zones that you create locally aren’t valid until you save the record zone. Capabilities on record zones that you fetch from the server are always valid.
