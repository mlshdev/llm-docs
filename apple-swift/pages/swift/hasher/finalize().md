> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/hasher/finalize()](https://developer.apple.com/documentation/swift/hasher/finalize())

# finalize()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finalizes the hasher state and returns the hash value.

## Declaration

```swift
func finalize() -> Int
```

<a id="return-value"></a>

## Return Value

The hash value calculated by the hasher.

<a id="discussion"></a>

## Discussion

Finalizing consumes the hasher: it is illegal to finalize a hasher you don’t own, or to perform operations on a finalized hasher. (These may become compile-time errors in the future.)

Hash values are not guaranteed to be equal across different executions of your program. Do not save hash values to use during a future execution.
