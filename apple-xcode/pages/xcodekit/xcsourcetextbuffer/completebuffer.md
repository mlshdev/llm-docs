> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourcetextbuffer/completebuffer](https://developer.apple.com/documentation/xcodekit/xcsourcetextbuffer/completebuffer)

# completeBuffer (Swift)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The complete buffer’s string representation.

## Declaration

```swift
var completeBuffer: String { get set }
```

<a id="Discussion"></a>

## Discussion

Changes to the `lines` property are immediately reflected in this property, and vice versa.

## See Also

### Accessing Source Text

- [contentUTI](contentuti.md): The Uniform Type Identifier (UTI) of the content in the buffer.

# completeBuffer (Objective-C)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The complete buffer’s string representation.

## Declaration

```objectivec
@property (copy) NSString * completeBuffer;
```

<a id="Discussion"></a>

## Discussion

Changes to the `lines` property are immediately reflected in this property, and vice versa.

## See Also

### Accessing Source Text

- [contentUTI](contentuti.md): The Uniform Type Identifier (UTI) of the content in the buffer.
