> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringisequal(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsstringisequal(_:_:))

# JSStringIsEqual(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether two JavaScript strings match.

## Declaration

```swift
func JSStringIsEqual(_ a: JSStringRef!, _ b: JSStringRef!) -> Bool
```

## Parameters

- `a`: The first [JSStringRef](jsstringref.md) to test.
- `b`: The second [JSStringRef](jsstringref.md) to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two strings match; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing JavaScript Strings

- [JSStringIsEqualToUTF8CString(\_:\_:)](jsstringisequaltoutf8cstring%28____%29.md): Tests whether a JavaScript string matches a null-terminated UTF-8 string.

# JSStringIsEqual (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether two JavaScript strings match.

## Declaration

```objectivec
bool JSStringIsEqual(JSStringRef a, JSStringRef b);
```

## Parameters

- `a`: The first [JSStringRef](jsstringref.md) to test.
- `b`: The second [JSStringRef](jsstringref.md) to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two strings match; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing JavaScript Strings

- [JSStringIsEqualToUTF8CString](jsstringisequaltoutf8cstring%28____%29.md): Tests whether a JavaScript string matches a null-terminated UTF-8 string.
