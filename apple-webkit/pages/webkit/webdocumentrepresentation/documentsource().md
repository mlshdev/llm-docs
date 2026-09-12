> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentrepresentation/documentsource()](https://developer.apple.com/documentation/webkit/webdocumentrepresentation/documentsource())

# documentSource() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the receiver’s source as text.

## Declaration

```swift
func documentSource() -> String!
```

<a id="return-value"></a>

## Return Value

Returns the document source associated with the receiver or `nil` if the source cannot be provided.

<a id="Discussion"></a>

## Discussion

For example, for HTML documents, the receiver should return the HTML source.

## See Also

### Getting document source

- [canProvideDocumentSource()](canprovidedocumentsource%28%29.md): Deprecated. Returns whether the receiver can provide content source.

# documentSource (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the receiver’s source as text.

## Declaration

```objectivec
- (NSString *) documentSource;
```

<a id="return-value"></a>

## Return Value

Returns the document source associated with the receiver or `nil` if the source cannot be provided.

<a id="Discussion"></a>

## Discussion

For example, for HTML documents, the receiver should return the HTML source.

## See Also

### Getting document source

- [canProvideDocumentSource](canprovidedocumentsource%28%29.md): Deprecated. Returns whether the receiver can provide content source.
