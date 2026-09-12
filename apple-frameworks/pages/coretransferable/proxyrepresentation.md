> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/proxyrepresentation](https://developer.apple.com/documentation/coretransferable/proxyrepresentation)

# ProxyRepresentation

**Framework:** Core Transferable  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A transfer representation that uses another type’s transfer representation as its own.

## Declaration

```swift
struct ProxyRepresentation<Item, ProxyRepresentation> where Item : Transferable, ProxyRepresentation : Transferable
```

## Mentioned In

- [Choosing a transfer representation for a model type](choosing-a-transfer-representation-for-a-model-type.md)

<a id="overview"></a>

## Overview

Use this representation to rely on an existing transfer representation that’s suitable for the type. For example,  a `Note` type might use the [String](https://developer.apple.com/documentation/swift/string) structure’s built-in [Transferable](transferable.md) conformance — a plain text representation — so it can be pasted into any text editor:

```swift
struct Note: Transferable {
    var body: String

    static var transferRepresentation: some TransferRepresentation {
        ProxyRepresentation(\.body)
    }
}
```

`ProxyRepresentation` makes it easy to provide alternative representations for receivers that don’t support the preferred custom format.

```swift
 struct Todo: Transferable, Codable {
    var text: String
    var isDone = false

    static var transferRepresentation: some TransferRepresentation {
        CodableRepresentation(contentType: .todo)
        ProxyRepresentation(\.text)
    }
}

 extension UTType {
     static let todo = UTType(exportedAs: "com.example.todo")
 }
```

Write the order of the representations in the `transferRepresentation` property from more preferred to less preferred. In the previous example, if the receiver knows about the custom `com.example.todo` content type, it will receive that custom content type. Using a `ProxyRepresentation` as the alternative lets people paste the to-do item in any text editor that doesn’t support the `com.example.todo` content type but works with text formats.

`ProxyRepresentation` is a convenience, and its evaluation isn’t supposed to be calculation-heavy. Don’t perform long-running work in `exporting` and `importing` closures. They shouldn’t contain network requests, file operations, or other potentially time-consuming tasks as they can cause delays during operations with `Transferable` items.

Use [FileRepresentation](filerepresentation.md) or [DataRepresentation](datarepresentation.md) to read and write files or for other lengthy tasks.

## Topics

### Initializers

- [init(exporting:)](proxyrepresentation/init%28exporting_%29-6gjdh.md): Deprecated. Creates a transfer representation that’s exported by proxy through another transfer representation.
- [init(exporting:)](proxyrepresentation/init%28exporting_%29-q3qp.md): Creates a transfer representation that’s exported by proxy through another transfer representation.
- [init(exporting:importing:)](proxyrepresentation/init%28exporting_importing_%29-4aiur.md): Creates a transfer representation that’s imported and exported by proxy through another transfer representation.
- [init(exporting:importing:)](proxyrepresentation/init%28exporting_importing_%29-8q8zv.md): Deprecated. Creates a transfer representation that’s imported and exported by proxy through another transfer representation.
- [init(exporting:importing:)](proxyrepresentation/init%28exporting_importing_%29-h69f.md): Creates a transfer representation that’s imported and exported by proxy through another transfer representation.
- [init(importing:)](proxyrepresentation/init%28importing_%29-4w9l5.md): Creates a transfer representation that’s imported by proxy through another transfer representation.
- [init(importing:)](proxyrepresentation/init%28importing_%29-pq40.md): Creates a transfer representation that’s imported by proxy through another transfer representation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TransferRepresentation](transferrepresentation.md)

## See Also

### Transfer customization

- [TransferRepresentationVisibility](transferrepresentationvisibility.md): The visibility levels that specify the kinds of apps and processes that can see an item in transit.
