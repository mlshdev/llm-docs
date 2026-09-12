> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgfloat-swift.struct/hashvalue](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct/hashvalue)

# hashValue

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS · watchOS 1.0+

The hash value.

## Declaration

```swift
var hashValue: Int { get }
```

<a id="Discussion"></a>

## Discussion

**Axiom:** `x == y` implies `x.hashValue == y.hashValue`.

> **Note**

>  The hash value is not guaranteed to be stable across different invocations of the same program.  Do not persist the hash value across program runs.
