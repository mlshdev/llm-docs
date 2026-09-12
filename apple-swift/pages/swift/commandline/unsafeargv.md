> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/commandline/unsafeargv](https://developer.apple.com/documentation/swift/commandline/unsafeargv)

# unsafeArgv

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Access to the raw argv value from C.

## Declaration

```swift
static var unsafeArgv: UnsafeMutablePointer<UnsafeMutablePointer<Int8>?> { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is a `nil`-terminated C array. Including the trailing `nil`, there are [argc](argc.md) `+ 1` elements in the array.

> **Note**

> Accessing the argument vector through this pointer is unsafe. Where possible, use [arguments](arguments.md) instead.

## See Also

### Accessing Raw Argument Data

- [argc](argc.md): Access to the raw argc value from C.
