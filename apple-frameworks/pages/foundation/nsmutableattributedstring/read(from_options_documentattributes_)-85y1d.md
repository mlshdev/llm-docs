> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/read(from:options:documentattributes:)-85y1d](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/read(from:options:documentattributes:)-85y1d)

# read(from:options:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Sets the contents of receiver from the file at the specified URL.

> Use [read(from:options:documentAttributes:)](read%28from_options_documentattributes_%29-54wth.md) instead.

## Declaration

```swift
func read(from url: URL, options: [AnyHashable : Any] = [:], documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) -> Bool
```

## Parameters

- `url`: The URL of the document to open.
- `options`: The option keys for importing the document. For a list of possible values, see “Option keys for importing documents” in [NSAttributedString](../nsattributedstring.md).
- `dict`: On return, contains the document attributes. For a list of possible values, see “Document Attributes” in [NSAttributedString](../nsattributedstring.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attributed string is created successfully or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

Filter services can be used to convert the contents of the URL into a format recognized by Cocoa.

## See Also

### Deprecated

- [read(from:options:documentAttributes:)](read%28from_options_documentattributes_%29-967j7.md): Deprecated. Sets the contents of the receiver from the specified data object`.`
- [read(fromFileURL:options:documentAttributes:)](read%28fromfileurl_options_documentattributes_%29.md): Deprecated. Sets the contents of the receiver from the file at the given URL.

# readFromURL:options:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Sets the contents of receiver from the file at the specified URL.

> Use [readFromURL:options:documentAttributes:error:](read%28from_options_documentattributes_%29-54wth.md) instead.

## Declaration

```objectivec
- (BOOL) readFromURL:(NSURL *) url options:(NSDictionary *) options documentAttributes:(NSDictionary **) dict;
```

## Parameters

- `url`: The URL of the document to open.
- `options`: The option keys for importing the document. For a list of possible values, see “Option keys for importing documents” in [NSAttributedString](../nsattributedstring.md).
- `dict`: On return, contains the document attributes. For a list of possible values, see “Document Attributes” in [NSAttributedString](../nsattributedstring.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attributed string is created successfully or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

Filter services can be used to convert the contents of the URL into a format recognized by Cocoa.

## See Also

### Deprecated

- [readFromData:options:documentAttributes:](read%28from_options_documentattributes_%29-967j7.md): Deprecated. Sets the contents of the receiver from the specified data object`.`
- [readFromFileURL:options:documentAttributes:error:](read%28fromfileurl_options_documentattributes_%29.md): Deprecated. Sets the contents of the receiver from the file at the given URL.
