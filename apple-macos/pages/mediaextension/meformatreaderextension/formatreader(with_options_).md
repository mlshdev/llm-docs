> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meformatreaderextension/formatreader(with:options:)](https://developer.apple.com/documentation/mediaextension/meformatreaderextension/formatreader(with:options:))

# formatReader(with:options:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new format reader with the byte source and options that you specify.

## Declaration

```swift
func formatReader(with primaryByteSource: MEByteSource, options: MEFormatReaderInstantiationOptions?) throws -> any MEFormatReader
```

## Parameters

- `primaryByteSource`: The primary byte source for the format reader.
- `options`: The reader instantiation options.

<a id="return-value"></a>

## Return Value

A new format reader.

## See Also

### Creating a format reader

- [init()](init%28%29.md): Creates a new format reader factory.

# formatReaderWithByteSource:options:error: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new format reader with the byte source and options that you specify.

## Declaration

```objectivec
- (id<MEFormatReader>) formatReaderWithByteSource:(MEByteSource *) primaryByteSource options:(MEFormatReaderInstantiationOptions *) options error:(NSError **) error;
```

## Parameters

- `primaryByteSource`: The primary byte source for the format reader.
- `options`: The reader instantiation options.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A new format reader. On failure, this method returns `nil`.

## See Also

### Creating a format reader

- [init](init%28%29.md): Creates a new format reader factory.
