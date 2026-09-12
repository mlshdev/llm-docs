> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(rtf:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(rtf:documentattributes:))

# init(RTF:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.

## Declaration

```swift
init?(RTF data: Data, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

```swift
init?(rtf data: Data, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

## Parameters

- `data`: The data containing RTF content.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

<a id="Discussion"></a>

## Discussion

Also returns by reference in `dict` a dictionary containing document-level attributes described in [NSAttributedString.DocumentAttributeKey](documentattributekey.md). `dict` may be `NULL`, in which case no document attributes are returned. Returns an initialized object, or `nil` if `data` can’t be decoded.

## See Also

### Creating from RTF

- [init(RTFD:documentAttributes:)](init%28rtfd_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTFD commands and data in the specified data object.
- [init(RTFDFileWrapper:documentAttributes:)](init%28rtfdfilewrapper_documentattributes_%29.md): Creates an attributed string from the specified file wrapper that contains an RTFD document.

# initWithRTF:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.

## Declaration

```objectivec
- (instancetype) initWithRTF:(NSData *) data documentAttributes:(NSDictionary<NSString *,id> **) dict;
```

## Parameters

- `data`: The data containing RTF content.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

<a id="Discussion"></a>

## Discussion

Also returns by reference in `dict` a dictionary containing document-level attributes described in [NSAttributedString.DocumentAttributeKey](documentattributekey.md). `dict` may be `NULL`, in which case no document attributes are returned. Returns an initialized object, or `nil` if `data` can’t be decoded.

## See Also

### Creating from RTF

- [initWithRTFD:documentAttributes:](init%28rtfd_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTFD commands and data in the specified data object.
- [initWithRTFDFileWrapper:documentAttributes:](init%28rtfdfilewrapper_documentattributes_%29.md): Creates an attributed string from the specified file wrapper that contains an RTFD document.
