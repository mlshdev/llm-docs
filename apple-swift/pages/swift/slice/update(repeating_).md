> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/slice/update(repeating:)

# update(repeating:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates every element of this buffer slice’s initialized memory.

## Declaration

```swift
func update<Element>(repeating repeatedValue: Element) where Base == UnsafeMutableBufferPointer<Element>
```

## Parameters

- `repeatedValue`: The value used when updating this pointer’s memory.

<a id="discussion"></a>

## Discussion

The buffer slice’s memory must be initialized or its `Element` must be a trivial type.

> **Note**

> All buffer elements must already be initialized.
