> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/withcstring(encodedas:_:)](https://developer.apple.com/documentation/swift/string/withcstring(encodedas:_:))

# withCString(encodedAs:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of code units.

## Declaration

```swift
func withCString<Result, TargetEncoding, E>(encodedAs targetEncoding: TargetEncoding.Type, _ body: (UnsafePointer<TargetEncoding.CodeUnit>) throws(E) -> Result) throws(E) -> Result where TargetEncoding : _UnicodeEncoding, E : Error
```

## Parameters

- `targetEncoding`: The encoding in which the code units should be interpreted.
- `body`: A closure with a pointer parameter that points to a null-terminated sequence of code units. If `body` has a return value, that value is also used as the return value for the `withCString(encodedAs:_:)` method. The pointer argument is valid only for the duration of the method’s execution.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure parameter.

<a id="discussion"></a>

## Discussion

The pointer passed as an argument to `body` is valid only during the execution of `withCString(encodedAs:_:)`. Do not store or return the pointer for later use.

## See Also

### Getting C Strings

- [utf8CString](utf8cstring.md): A contiguously stored null-terminated UTF-8 representation of the string.
- [withCString(\_:)](withcstring%28__%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of UTF-8 code units.
