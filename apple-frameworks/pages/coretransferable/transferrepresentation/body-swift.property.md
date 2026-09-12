> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferrepresentation/body-swift.property](https://developer.apple.com/documentation/coretransferable/transferrepresentation/body-swift.property)

# body

**Framework:** Core Transferable  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A builder expression that describes the process of importing and exporting an item.

## Declaration

```swift
@TransferRepresentationBuilder<Self.Item> var body: Self.Body { get }
```

<a id="discussion"></a>

## Discussion

Combine multiple existing transfer representations to compose a single transfer representation that describes how to transfer an item in multiple scenarios.

```swift
struct CombinedRepresentation: TransferRepresentation {
   var body: some TransferRepresentation {
       DataRepresentation(...)
       FileRepresentation(...)
   }
}
```

## See Also

### Implementing a transfer representation

- [Body](body-swift.associatedtype.md): The transfer representation for the item.
- [Item](item.md): The type of the item that’s being transferred.
