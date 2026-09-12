> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentrepresentation/canprovidedocumentsource()](https://developer.apple.com/documentation/webkit/webdocumentrepresentation/canprovidedocumentsource())

# canProvideDocumentSource() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the receiver can provide content source.

## Declaration

```swift
func canProvideDocumentSource() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver can provide source for the document content (for example, HTML source), [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The receiver should return [true](https://developer.apple.com/documentation/swift/true) only if it makes sense for someone to view the source of the document in question. For example, a web view returns [false](https://developer.apple.com/documentation/swift/false) if the content is an image, was produced by a plug-in, or contains text content already.

## See Also

### Getting document source

- [documentSource()](documentsource%28%29.md): Deprecated. Returns the receiver’s source as text.

# canProvideDocumentSource (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the receiver can provide content source.

## Declaration

```objectivec
- (BOOL) canProvideDocumentSource;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver can provide source for the document content (for example, HTML source), [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The receiver should return [true](https://developer.apple.com/documentation/swift/true) only if it makes sense for someone to view the source of the document in question. For example, a web view returns [false](https://developer.apple.com/documentation/swift/false) if the content is an image, was produced by a plug-in, or contains text content already.

## See Also

### Getting document source

- [documentSource](documentsource%28%29.md): Deprecated. Returns the receiver’s source as text.
