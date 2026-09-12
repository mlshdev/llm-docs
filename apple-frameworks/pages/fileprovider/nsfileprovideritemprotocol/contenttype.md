> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/contenttype](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/contenttype)

# contentType (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The item’s Uniform Type Identifier (UTI).

## Declaration

```swift
@NSCopying optional var contentType: UTType { get }
```

<a id="Discussion"></a>

## Discussion

Your extension must provide either the [typeIdentifier](typeidentifier.md) or the [contentType](contenttype.md) property. Where possible, use the [contentType](contenttype.md) property. Use the [typeIdentifier](typeidentifier.md) property only in iOS 13 or earlier.

## See Also

### Providing Required Properties

- [itemIdentifier](itemidentifier.md): The item’s persistent identifier.
- [filename](filename.md): The item’s filename.
- [typeIdentifier](typeidentifier.md): Deprecated. The item’s Uniform Type Identifier (UTI).
- [capabilities](capabilities.md): The item’s capabilities.

# contentType (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+ · visionOS 1.0+

The item’s Uniform Type Identifier (UTI).

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UTType * contentType;
```

<a id="Discussion"></a>

## Discussion

Your extension must provide either the [typeIdentifier](typeidentifier.md) or the [contentType](contenttype.md) property. Where possible, use the [contentType](contenttype.md) property. Use the [typeIdentifier](typeidentifier.md) property only in iOS 13 or earlier.

## See Also

### Providing Required Properties

- [itemIdentifier](itemidentifier.md): The item’s persistent identifier.
- [filename](filename.md): The item’s filename.
- [typeIdentifier](typeidentifier.md): Deprecated. The item’s Uniform Type Identifier (UTI).
- [capabilities](capabilities.md): The item’s capabilities.
