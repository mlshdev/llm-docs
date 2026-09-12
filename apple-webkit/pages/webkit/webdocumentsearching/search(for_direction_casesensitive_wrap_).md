> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentsearching/search(for:direction:casesensitive:wrap:)](https://developer.apple.com/documentation/webkit/webdocumentsearching/search(for:direction:casesensitive:wrap:))

# search(for:direction:caseSensitive:wrap:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Searches for a string in a given direction from the current position.

## Declaration

```swift
func search(for string: String!, direction forward: Bool, caseSensitive caseFlag: Bool, wrap wrapFlag: Bool) -> Bool
```

## Parameters

- `string`: The string to search for.
- `forward`: If [true](https://developer.apple.com/documentation/swift/true), the search is in the forward direction from the current location; otherwise, the search is in the backward direction.
- `caseFlag`: If [true](https://developer.apple.com/documentation/swift/true) then the search is case sensitive; otherwise, it is not.
- `wrapFlag`: If [true](https://developer.apple.com/documentation/swift/true), the search continues from the end of the document to the current location; otherwise, it stops at the end of the document.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains `string` in the specified direction; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The receiver should select the string if it is found.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

# searchFor:direction:caseSensitive:wrap: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Searches for a string in a given direction from the current position.

## Declaration

```objectivec
- (BOOL) searchFor:(NSString *) string direction:(BOOL) forward caseSensitive:(BOOL) caseFlag wrap:(BOOL) wrapFlag;
```

## Parameters

- `string`: The string to search for.
- `forward`: If [true](https://developer.apple.com/documentation/swift/true), the search is in the forward direction from the current location; otherwise, the search is in the backward direction.
- `caseFlag`: If [true](https://developer.apple.com/documentation/swift/true) then the search is case sensitive; otherwise, it is not.
- `wrapFlag`: If [true](https://developer.apple.com/documentation/swift/true), the search continues from the end of the document to the current location; otherwise, it stops at the end of the document.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains `string` in the specified direction; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The receiver should select the string if it is found.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
