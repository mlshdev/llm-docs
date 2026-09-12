> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/exittest/result/standarderrorcontent](https://developer.apple.com/documentation/testing/exittest/result/standarderrorcontent)

# standardErrorContent

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** Swift 6.2+ · Xcode 26.0+

All bytes written to the standard error stream of the exit test before it exited.

## Declaration

```swift
var standardErrorContent: [UInt8]
```

<a id="discussion"></a>

## Discussion

The value of this property may contain any arbitrary sequence of bytes, including sequences that are not valid UTF-8 and cannot be decoded by [String.init(cString:)](https://developer.apple.com/documentation/swift/string/init%28cstring:%29-6kr8s). Consider using [String.init(validating:as:)](https://developer.apple.com/documentation/swift/string/init%28validating:as:%29-84qr9) instead.

When checking the value of this property, keep in mind that the standard output stream is globally accessible, and any code running in an exit test may write to it including the operating system and any third-party dependencies you have declared in your package. Rather than comparing the value of this property with [==](https://developer.apple.com/documentation/swift/array/==%28_:_:%29), use [contains(\_:)](https://developer.apple.com/documentation/swift/collection/contains%28_:%29) to check if expected output is present.

To enable gathering output from the standard error stream during an exit test, pass `\.standardErrorContent` in the `observedValues` argument of [expect(processExitsWith:observing:\_:sourceLocation:performing:)](../../expect%28processexitswith_observing___sourcelocation_performing_%29.md) or [require(processExitsWith:observing:\_:sourceLocation:performing:)](../../require%28processexitswith_observing___sourcelocation_performing_%29.md).

If you did not request standard error content when running an exit test, the value of this property is the empty array.
