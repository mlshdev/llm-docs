> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withunsafemutablepointer(to:_:)](https://developer.apple.com/documentation/swift/withunsafemutablepointer(to:_:))

# withUnsafeMutablePointer(to:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calls the given closure with a mutable pointer to the given argument.

## Declaration

```swift
func withUnsafeMutablePointer<T, E, Result>(to value: inout T, _ body: (UnsafeMutablePointer<T>) throws(E) -> Result) throws(E) -> Result where E : Error, T : ~Copyable, Result : ~Copyable
```

## Parameters

- `value`: An instance to temporarily use via pointer. Note that the `inout` exclusivity rules mean that, like any other `inout` argument, `value` cannot be directly accessed by other code for the duration of `body`. Access must only occur through the pointer argument to `body` until `body` returns.
- `body`: A closure that takes a mutable pointer to `value` as its sole argument. If the closure has a return value, that value is also used as the return value of the `withUnsafeMutablePointer(to:_:)` function. The pointer argument is valid only for the duration of the function’s execution.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure.

<a id="discussion"></a>

## Discussion

The `withUnsafeMutablePointer(to:_:)` function is useful for calling Objective-C APIs that take in/out parameters (and default-constructible out parameters) by pointer.

The pointer argument to `body` is valid only during the execution of `withUnsafeMutablePointer(to:_:)`. Do not store or return the pointer for later use.

## See Also

### Pointers to Values

- [withUnsafePointer(to:\_:)](withunsafepointer%28to___%29-9fjn6.md): Invokes the given closure with a pointer to the given argument.
- [withUnsafePointer(to:\_:)](withunsafepointer%28to___%29-35wrn.md): Invokes the given closure with a pointer to the given argument.
- [withUnsafeBytes(of:\_:)](withunsafebytes%28of___%29-3ywhh.md): Invokes the given closure with a buffer pointer covering the raw bytes of the given argument.
- [withUnsafeBytes(of:\_:)](withunsafebytes%28of___%29-5gesg.md): Invokes the given closure with a buffer pointer covering the raw bytes of the given argument.
- [withUnsafeMutableBytes(of:\_:)](withunsafemutablebytes%28of___%29.md): Invokes the given closure with a mutable buffer pointer covering the raw bytes of the given argument.
