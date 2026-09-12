> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/withcstring(_:)](https://developer.apple.com/documentation/swift/substring/withcstring(_:))

# withCString(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of UTF-8 code units.

## Declaration

```swift
func withCString<Result, E>(_ body: (UnsafePointer<CChar>) throws(E) -> Result) throws(E) -> Result where E : Error
```

## Parameters

- `body`: A closure with a pointer parameter that points to a null-terminated sequence of UTF-8 code units. If `body` has a return value, that value is also used as the return value for the `withCString(_:)` method. The pointer argument is valid only for the duration of the method’s execution.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure parameter.

<a id="discussion"></a>

## Discussion

The pointer passed as an argument to `body` is valid only during the execution of `withCString(_:)`. Do not store or return the pointer for later use.
