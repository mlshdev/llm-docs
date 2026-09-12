> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(rtfd:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(rtfd:documentattributes:))

# init(RTFD:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates an attributed string by decoding the stream of RTFD commands and data in the specified data object.

## Declaration

```swift
init?(RTFD data: Data, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

```swift
init?(rtfd data: Data, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

## Parameters

- `data`: The data containing the RTFD content.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

## See Also

### Creating from RTF

- [init(RTF:documentAttributes:)](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.
- [init(RTFDFileWrapper:documentAttributes:)](init%28rtfdfilewrapper_documentattributes_%29.md): Creates an attributed string from the specified file wrapper that contains an RTFD document.

# initWithRTFD:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Creates an attributed string by decoding the stream of RTFD commands and data in the specified data object.

## Declaration

```objectivec
- (instancetype) initWithRTFD:(NSData *) data documentAttributes:(NSDictionary<NSString *,id> **) dict;
```

## Parameters

- `data`: The data containing the RTFD content.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

## See Also

### Creating from RTF

- [initWithRTF:documentAttributes:](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.
- [initWithRTFDFileWrapper:documentAttributes:](init%28rtfdfilewrapper_documentattributes_%29.md): Creates an attributed string from the specified file wrapper that contains an RTFD document.
