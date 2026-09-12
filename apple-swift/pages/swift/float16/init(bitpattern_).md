> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/init(bitpattern:)](https://developer.apple.com/documentation/swift/float16/init(bitpattern:))

# init(bitPattern:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new value with the given bit pattern.

## Declaration

```swift
init(bitPattern: UInt16)
```

## Parameters

- `bitPattern`: The integer encoding of a `Float16` instance.

<a id="discussion"></a>

## Discussion

The value passed as `bitPattern` is interpreted in the binary interchange format defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).
