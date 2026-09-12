> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/autoreleasingunsafemutablepointer/pointee](https://developer.apple.com/documentation/swift/autoreleasingunsafemutablepointer/pointee)

# pointee

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieve or set the `Pointee` instance referenced by `self`.

## Declaration

```swift
var pointee: Pointee { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

`AutoreleasingUnsafeMutablePointer` is assumed to reference a value with `__autoreleasing` ownership semantics, like `NSFoo **` declarations in ARC. Setting the pointee autoreleases the new value before trivially storing it in the referenced memory.

> **Precondition**

> The pointee has been initialized with an instance of type `Pointee`.

## See Also

### Accessing a Pointer’s Memory

- [subscript(\_:)](subscript%28__%29.md): Access the `i`th element of the raw array pointed to by `self`.
