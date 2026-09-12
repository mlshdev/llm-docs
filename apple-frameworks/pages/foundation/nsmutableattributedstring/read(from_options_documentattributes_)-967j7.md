> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/read(from:options:documentattributes:)-967j7](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/read(from:options:documentattributes:)-967j7)

# read(from:options:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Sets the contents of the receiver from the specified data object`.`

> Use [read(from:options:documentAttributes:)](read%28from_options_documentattributes_%29-5mbcx.md) instead.

## Declaration

```swift
func read(from data: Data, options: [AnyHashable : Any] = [:], documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) -> Bool
```

## Parameters

- `data`: The data to read.
- `options`: The option keys for importing the document. For a list of possible values, see “Option keys for importing documents” in [NSAttributedString](../nsattributedstring.md).
- `dict`: On return, contains the document attributes. For a list of possible values, see “Document Attributes” in [NSAttributedString](../nsattributedstring.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attributed string is created successfully or [false](https://developer.apple.com/documentation/swift/false) if it was not.

## See Also

### Deprecated

- [read(from:options:documentAttributes:)](read%28from_options_documentattributes_%29-85y1d.md): Deprecated. Sets the contents of receiver from the file at the specified URL.
- [read(fromFileURL:options:documentAttributes:)](read%28fromfileurl_options_documentattributes_%29.md): Deprecated. Sets the contents of the receiver from the file at the given URL.

# readFromData:options:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Sets the contents of the receiver from the specified data object`.`

> Use [readFromData:options:documentAttributes:error:](read%28from_options_documentattributes_%29-5mbcx.md) instead.

## Declaration

```objectivec
- (BOOL) readFromData:(NSData *) data options:(NSDictionary *) options documentAttributes:(NSDictionary **) dict;
```

## Parameters

- `data`: The data to read.
- `options`: The option keys for importing the document. For a list of possible values, see “Option keys for importing documents” in [NSAttributedString](../nsattributedstring.md).
- `dict`: On return, contains the document attributes. For a list of possible values, see “Document Attributes” in [NSAttributedString](../nsattributedstring.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attributed string is created successfully or [false](https://developer.apple.com/documentation/swift/false) if it was not.

## See Also

### Deprecated

- [readFromURL:options:documentAttributes:](read%28from_options_documentattributes_%29-85y1d.md): Deprecated. Sets the contents of receiver from the file at the specified URL.
- [readFromFileURL:options:documentAttributes:error:](read%28fromfileurl_options_documentattributes_%29.md): Deprecated. Sets the contents of the receiver from the file at the given URL.
