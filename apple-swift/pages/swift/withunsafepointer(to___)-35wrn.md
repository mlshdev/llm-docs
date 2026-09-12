> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withunsafepointer(to:_:)-35wrn](https://developer.apple.com/documentation/swift/withunsafepointer(to:_:)-35wrn)

# withUnsafePointer(to:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes the given closure with a pointer to the given argument.

## Declaration

```swift
func withUnsafePointer<T, E, Result>(to value: borrowing T, _ body: (UnsafePointer<T>) throws(E) -> Result) throws(E) -> Result where E : Error, T : ~Copyable, Result : ~Copyable
```

## Parameters

- `value`: An instance to temporarily use via pointer.
- `body`: A closure that takes a pointer to `value` as its sole argument. If the closure has a return value, that value is also used as the return value of the `withUnsafePointer(to:_:)` function. The pointer argument is valid only for the duration of the function’s execution. It is undefined behavior to try to mutate through the pointer argument by converting it to `UnsafeMutablePointer` or any other mutable pointer type. If you need to mutate the argument through the pointer, use `withUnsafeMutablePointer(to:_:)` instead.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure.

<a id="discussion"></a>

## Discussion

The `withUnsafePointer(to:_:)` function is useful for calling Objective-C APIs that take in parameters by const pointer.

The pointer argument to `body` is valid only during the execution of `withUnsafePointer(to:_:)`. Do not store or return the pointer for later use.

## See Also

### Pointers to Values

- [withUnsafePointer(to:\_:)](withunsafepointer%28to___%29-9fjn6.md): Invokes the given closure with a pointer to the given argument.
- [withUnsafeMutablePointer(to:\_:)](withunsafemutablepointer%28to___%29.md): Calls the given closure with a mutable pointer to the given argument.
- [withUnsafeBytes(of:\_:)](withunsafebytes%28of___%29-3ywhh.md): Invokes the given closure with a buffer pointer covering the raw bytes of the given argument.
- [withUnsafeBytes(of:\_:)](withunsafebytes%28of___%29-5gesg.md): Invokes the given closure with a buffer pointer covering the raw bytes of the given argument.
- [withUnsafeMutableBytes(of:\_:)](withunsafemutablebytes%28of___%29.md): Invokes the given closure with a mutable buffer pointer covering the raw bytes of the given argument.
