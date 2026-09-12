> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(rtfdfilewrapper:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(rtfdfilewrapper:documentattributes:))

# init(RTFDFileWrapper:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates an attributed string from the specified file wrapper that contains an RTFD document.

## Declaration

```swift
init?(RTFDFileWrapper wrapper: FileWrapper, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

```swift
init?(rtfdFileWrapper wrapper: FileWrapper, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

## Parameters

- `wrapper`: The [FileWrapper](../filewrapper.md) containing the RTFD document.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

<a id="Discussion"></a>

## Discussion

Also returns by reference in `dict` a dictionary containing document-level attributes described in [NSAttributedString.DocumentAttributeKey](documentattributekey.md). `dict` may be `NULL`, in which case no document attributes are returned. Returns an initialized object, or `nil` if `wrapper` can’t be interpreted as an RTFD document.

## See Also

### Creating from RTF

- [init(RTF:documentAttributes:)](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.
- [init(RTFD:documentAttributes:)](init%28rtfd_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTFD commands and data in the specified data object.

# initWithRTFDFileWrapper:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Creates an attributed string from the specified file wrapper that contains an RTFD document.

## Declaration

```objectivec
- (instancetype) initWithRTFDFileWrapper:(NSFileWrapper *) wrapper documentAttributes:(NSDictionary<NSString *,id> **) dict;
```

## Parameters

- `wrapper`: The [NSFileWrapper](../filewrapper.md) containing the RTFD document.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

<a id="Discussion"></a>

## Discussion

Also returns by reference in `dict` a dictionary containing document-level attributes described in [NSAttributedString.DocumentAttributeKey](documentattributekey.md). `dict` may be `NULL`, in which case no document attributes are returned. Returns an initialized object, or `nil` if `wrapper` can’t be interpreted as an RTFD document.

## See Also

### Creating from RTF

- [initWithRTF:documentAttributes:](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.
- [initWithRTFD:documentAttributes:](init%28rtfd_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTFD commands and data in the specified data object.
