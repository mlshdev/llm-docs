> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychainattribute

# SecKeychainAttribute (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

A structure that holds a single keychain attribute.

## Declaration

```swift
struct SecKeychainAttribute
```

## Topics

### Instance Properties

- [data](seckeychainattribute/data.md): A pointer to the attribute data.
- [length](seckeychainattribute/length.md): The length of the buffer pointed to by data.
- [tag](seckeychainattribute/tag.md): A 4-byte attribute tag.

### Initializers

- [init()](seckeychainattribute/init%28%29.md)
- [init(tag:length:data:)](seckeychainattribute/init%28tag_length_data_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# SecKeychainAttribute (Objective-C)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

A structure that holds a single keychain attribute.

## Declaration

```objectivec
struct SecKeychainAttribute;
```

## Topics

### Instance Properties

- [data](seckeychainattribute/data.md): A pointer to the attribute data.
- [length](seckeychainattribute/length.md): The length of the buffer pointed to by data.
- [tag](seckeychainattribute/tag.md): A 4-byte attribute tag.
