> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringisequaltoutf8cstring(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsstringisequaltoutf8cstring(_:_:))

# JSStringIsEqualToUTF8CString(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether a JavaScript string matches a null-terminated UTF-8 string.

## Declaration

```swift
func JSStringIsEqualToUTF8CString(_ a: JSStringRef!, _ b: UnsafePointer<CChar>!) -> Bool
```

## Parameters

- `a`: The [JSStringRef](jsstringref.md) to test.
- `b`: The null-terminated UTF-8 string to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two strings match; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing JavaScript Strings

- [JSStringIsEqual(\_:\_:)](jsstringisequal%28____%29.md): Tests whether two JavaScript strings match.

# JSStringIsEqualToUTF8CString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether a JavaScript string matches a null-terminated UTF-8 string.

## Declaration

```objectivec
bool JSStringIsEqualToUTF8CString(JSStringRef a, const char *b);
```

## Parameters

- `a`: The [JSStringRef](jsstringref.md) to test.
- `b`: The null-terminated UTF-8 string to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two strings match; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing JavaScript Strings

- [JSStringIsEqual](jsstringisequal%28____%29.md): Tests whether two JavaScript strings match.
