> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entitycollection/isempty

# isEmpty

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Boolean value that indicates whether the collection is empty.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` if the collection is empty, or `false` if the collection has one or more identifiers.
