> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(url:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(url:documentattributes:))

# init(URL:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Initializes a new attributed string object from the data at the specified URL.

> Use [init(URL:options:documentAttributes:)](init%28url_options_documentattributes_%29.md) instead.

## Declaration

```swift
init?(URL url: URL, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

```swift
init?(url: URL, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

## Parameters

- `url`: An `NSURL` object specifying the document to load.
- `dict`: An in-out dictionary containing document-level attributes described in `Document Attributes`. May be `NULL`, in which case no document attributes are returned.

<a id="return-value"></a>

## Return Value

Returns an initialized object, or `nil` if the data can’t be decoded.

<a id="Discussion"></a>

## Discussion

The contents of `aURL` are examined to best load the file in whatever format it’s in. Filter services can be used to convert the file into a format recognized by Cocoa. Also returns by reference in `docAttributes` a dictionary containing document-level attributes described in `Document Attributes`. `docAttributes` may be `NULL`, in which case no document attributes are returned. Returns an initialized object, or `nil` if the file at `path` can’t be decoded.

## See Also

### Deprecated Initializers

- [init(path:documentAttributes:)](init%28path_documentattributes_%29.md): Deprecated. Initializes a new attribute string object from RTF or RTFD data in the file at the specified path.
- [init(fileURL:options:documentAttributes:)](init%28fileurl_options_documentattributes_%29.md): Deprecated. Initializes a new attributed string object from the data at the specified URL.

# initWithURL:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Initializes a new attributed string object from the data at the specified URL.

> Use [initWithURL:options:documentAttributes:error:](init%28url_options_documentattributes_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url documentAttributes:(NSDictionary **) dict;
```

## Parameters

- `url`: An `NSURL` object specifying the document to load.
- `dict`: An in-out dictionary containing document-level attributes described in `Document Attributes`. May be `NULL`, in which case no document attributes are returned.

<a id="return-value"></a>

## Return Value

Returns an initialized object, or `nil` if the data can’t be decoded.

<a id="Discussion"></a>

## Discussion

The contents of `aURL` are examined to best load the file in whatever format it’s in. Filter services can be used to convert the file into a format recognized by Cocoa. Also returns by reference in `docAttributes` a dictionary containing document-level attributes described in `Document Attributes`. `docAttributes` may be `NULL`, in which case no document attributes are returned. Returns an initialized object, or `nil` if the file at `path` can’t be decoded.

## See Also

### Deprecated Initializers

- [initWithPath:documentAttributes:](init%28path_documentattributes_%29.md): Deprecated. Initializes a new attribute string object from RTF or RTFD data in the file at the specified path.
- [initWithFileURL:options:documentAttributes:error:](init%28fileurl_options_documentattributes_%29.md): Deprecated. Initializes a new attributed string object from the data at the specified URL.
