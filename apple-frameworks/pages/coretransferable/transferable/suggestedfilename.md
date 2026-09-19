> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/transferable/suggestedfilename

# suggestedFilename

**Framework:** Core Transferable  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

A suggested filename of a `Transferable` value.

## Declaration

```swift
var suggestedFilename: String? { get }
```

<a id="discussion"></a>

## Discussion

A filename for given item, or `nil` if none specified. A name can be specified using `TransferRepresentation.suggestedFileName(_:)`. The default implementation of this property is available to all types that conform to [Transferable](../transferable.md) protocol.
