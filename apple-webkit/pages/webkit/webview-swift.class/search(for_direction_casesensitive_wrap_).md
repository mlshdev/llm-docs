> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/search(for:direction:casesensitive:wrap:)](https://developer.apple.com/documentation/webkit/webview-swift.class/search(for:direction:casesensitive:wrap:))

# search(for:direction:caseSensitive:wrap:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Searches a document view for a string and highlights it if it is found.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func search(for string: String!, direction forward: Bool, caseSensitive caseFlag: Bool, wrap wrapFlag: Bool) -> Bool
```

## Parameters

- `string`: The search string.
- `forward`: If [true](https://developer.apple.com/documentation/swift/true) the direction of the search is forward; if [false](https://developer.apple.com/documentation/swift/false), the direction is backward.
- `caseFlag`: If [true](https://developer.apple.com/documentation/swift/true) if the search is case sensitive; otherwise, it is not.
- `wrapFlag`: If [true](https://developer.apple.com/documentation/swift/true) if the search wraps; otherwise, it does not.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the search is successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The search for `string` begins from the current selection and continues in the direction specified by `forward`. The search continues across all frames.

## See Also

### Related Documentation

- [applicationNameForUserAgent](applicationnameforuseragent.md): Deprecated. The receiver’s application name that is used in the user-agent string.
- [customUserAgent](customuseragent.md): Deprecated. The receiver’s custom user-agent string.

# searchFor:direction:caseSensitive:wrap: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Searches a document view for a string and highlights it if it is found.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (BOOL) searchFor:(NSString *) string direction:(BOOL) forward caseSensitive:(BOOL) caseFlag wrap:(BOOL) wrapFlag;
```

## Parameters

- `string`: The search string.
- `forward`: If [true](https://developer.apple.com/documentation/swift/true) the direction of the search is forward; if [false](https://developer.apple.com/documentation/swift/false), the direction is backward.
- `caseFlag`: If [true](https://developer.apple.com/documentation/swift/true) if the search is case sensitive; otherwise, it is not.
- `wrapFlag`: If [true](https://developer.apple.com/documentation/swift/true) if the search wraps; otherwise, it does not.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the search is successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The search for `string` begins from the current selection and continues in the direction specified by `forward`. The search continues across all frames.

## See Also

### Related Documentation

- [applicationNameForUserAgent](applicationnameforuseragent.md): Deprecated. The receiver’s application name that is used in the user-agent string.
- [customUserAgent](customuseragent.md): Deprecated. The receiver’s custom user-agent string.
