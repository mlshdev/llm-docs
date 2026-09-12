> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mirror/children-swift.typealias](https://developer.apple.com/documentation/swift/mirror/children-swift.typealias)

# Mirror.Children

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type used to represent substructure.

## Declaration

```swift
typealias Children = AnyCollection<Mirror.Child>
```

<a id="discussion"></a>

## Discussion

When working with a mirror that reflects a bidirectional or random access collection, you may find it useful to “upgrade” instances of this type to `AnyBidirectionalCollection` or `AnyRandomAccessCollection`. For example, to display the last twenty children of a mirror if they can be accessed efficiently, you write the following code:

```swift
if let b = AnyBidirectionalCollection(someMirror.children) {
    for element in b.suffix(20) {
        print(element)
    }
}
```
