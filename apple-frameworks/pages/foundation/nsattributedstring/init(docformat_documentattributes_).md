> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(docformat:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(docformat:documentattributes:))

# init(docFormat:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates an attributed string from Microsoft Word format data in the specified data object.

## Declaration

```swift
init?(docFormat data: Data, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

## Parameters

- `data`: The data from which to create the string.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

## See Also

### Creating from a data file

- [init(data:options:documentAttributes:)](init%28data_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified data object.
- [init(URL:options:documentAttributes:)](init%28url_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified URL.

# initWithDocFormat:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Creates an attributed string from Microsoft Word format data in the specified data object.

## Declaration

```objectivec
- (instancetype) initWithDocFormat:(NSData *) data documentAttributes:(NSDictionary<NSString *,id> **) dict;
```

## Parameters

- `data`: The data from which to create the string.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

## See Also

### Creating from a data file

- [initWithData:options:documentAttributes:error:](init%28data_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified data object.
- [initWithURL:options:documentAttributes:error:](init%28url_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified URL.
