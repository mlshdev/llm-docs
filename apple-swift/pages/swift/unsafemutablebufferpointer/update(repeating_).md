> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/update(repeating:)](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/update(repeating:))

# update(repeating:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates every element of this buffer’s initialized memory.

## Declaration

```swift
func update(repeating repeatedValue: Element)
```

## Parameters

- `repeatedValue`: The value used when updating this pointer’s memory.

<a id="discussion"></a>

## Discussion

The buffer’s memory must be initialized or its `Element` type must be a trivial type.

> **Note**

> All buffer elements must already be initialized.
