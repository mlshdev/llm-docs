> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/typeidentifier](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/typeidentifier)

# typeIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The item’s Uniform Type Identifier (UTI).

> Use [contentType](contenttype.md) instead.

## Declaration

```swift
optional var typeIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Your extension must provide either the [typeIdentifier](typeidentifier.md) or the [contentType](contenttype.md) property. Use the [typeIdentifier](typeidentifier.md) property only in iOS 13 or earlier.

## See Also

### Providing Required Properties

- [itemIdentifier](itemidentifier.md): The item’s persistent identifier.
- [filename](filename.md): The item’s filename.
- [contentType](contenttype.md): The item’s Uniform Type Identifier (UTI).
- [capabilities](capabilities.md): The item’s capabilities.

# typeIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The item’s Uniform Type Identifier (UTI).

> Use [contentType](contenttype.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * typeIdentifier;
```

<a id="Discussion"></a>

## Discussion

Your extension must provide either the [typeIdentifier](typeidentifier.md) or the [contentType](contenttype.md) property. Use the [typeIdentifier](typeidentifier.md) property only in iOS 13 or earlier.

## See Also

### Providing Required Properties

- [itemIdentifier](itemidentifier.md): The item’s persistent identifier.
- [filename](filename.md): The item’s filename.
- [contentType](contenttype.md): The item’s Uniform Type Identifier (UTI).
- [capabilities](capabilities.md): The item’s capabilities.
