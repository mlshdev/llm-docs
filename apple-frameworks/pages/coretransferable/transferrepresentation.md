> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferrepresentation](https://developer.apple.com/documentation/coretransferable/transferrepresentation)

# TransferRepresentation

**Framework:** Core Transferable  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A declarative description of the process of importing and exporting a transferable item.

## Declaration

```swift
protocol TransferRepresentation<Item> : Sendable
```

<a id="overview"></a>

## Overview

Combine multiple existing transfer representations to compose a single transfer representation that describes how to transfer an item in multiple scenarios.

The following shows a `Greeting` type that transfers both as a `Codable` type and by proxy through its `message` string.

```swift
import UniformTypeIdentifiers

struct Greeting: Codable, Transferable {
    let message: String
    var displayInAllCaps: Bool = false

    static var transferRepresentation: some TransferRepresentation {
        CodableRepresentation(contentType: .greeting)
        ProxyRepresentation(exporting: \.message)
    }
}

extension UTType {
    static let greeting = UTType(exportedAs: "com.example.greeting")
}
```

## Topics

### Implementing a transfer representation

- [body](transferrepresentation/body-swift.property.md): A builder expression that describes the process of importing and exporting an item.
- [Body](transferrepresentation/body-swift.associatedtype.md): The transfer representation for the item.
- [Item](transferrepresentation/item.md): The type of the item that’s being transferred.

### Configuring exports

- [exportingCondition(\_:)](transferrepresentation/exportingcondition%28__%29.md): Prevents the system from exporting an item if it does not meet the supplied condition.

### Controlling visibility

- [visibility(\_:)](transferrepresentation/visibility%28__%29.md): Specifies the kinds of apps and processes that can see an item in transit.

### Instance Methods

- [suggestedFileName(\_:)](transferrepresentation/suggestedfilename%28__%29-2yln2.md): Provides a filename to use if the receiver chooses to write the item to disk.
- [suggestedFileName(\_:)](transferrepresentation/suggestedfilename%28__%29-47rg0.md): Provides a filename to use if the receiver chooses to write the item to disk.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [CodableRepresentation](codablerepresentation.md)
- [DataRepresentation](datarepresentation.md)
- [FileRepresentation](filerepresentation.md)
- [ProxyRepresentation](proxyrepresentation.md)
- [TupleTransferRepresentation](tupletransferrepresentation.md)

## See Also

### Essentials

- [Transferable](transferable.md): A protocol that describes how a type interacts with transport APIs such as drag and drop or copy and paste.
- [Choosing a transfer representation for a model type](choosing-a-transfer-representation-for-a-model-type.md): Define a custom representation for your data using a combination of built-in types.
