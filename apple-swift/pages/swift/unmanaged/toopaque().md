> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unmanaged/toopaque()](https://developer.apple.com/documentation/swift/unmanaged/toopaque())

# toOpaque()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unsafely converts an unmanaged class reference to a pointer.

## Declaration

```swift
func toOpaque() -> UnsafeMutableRawPointer
```

<a id="return-value"></a>

## Return Value

An opaque pointer to the value of this unmanaged reference.

<a id="discussion"></a>

## Discussion

This operation does not change reference counts.

```swift
let str0 = "boxcar" as CFString
let bits = Unmanaged.passUnretained(str0)
let ptr = bits.toOpaque()
```
