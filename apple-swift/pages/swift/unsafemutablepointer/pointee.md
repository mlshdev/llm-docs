> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer/pointee](https://developer.apple.com/documentation/swift/unsafemutablepointer/pointee)

# pointee

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads or updates the instance referenced by this pointer.

## Declaration

```swift
var pointee: Pointee { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

When reading from the `pointee` property, the instance referenced by this pointer must already be initialized. When `pointee` is used as the left side of an assignment, the instance is updated. The instance must be initialized or this pointer’s `Pointee` type must be a trivial type.

Uninitialized memory cannot be initialized to a nontrivial type using `pointee`. Instead, use an initializing method, such as `initialize(to:)`.
