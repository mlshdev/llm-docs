> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinib/optionskey](https://developer.apple.com/documentation/uikit/uinib/optionskey)

# UINib.OptionsKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Options that specify how to unarchive and instantiate the nib.

## Declaration

```swift
struct OptionsKey
```

## Topics

### Keys

- [externalObjects](optionskey/externalobjects.md): The replacements for any proxy objects in the nib file.

### Initializers

- [init(rawValue:)](optionskey/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving objects from the nib file

- [instantiate(withOwner:options:)](instantiate%28withowner_options_%29.md): Deprecated. Unarchives and instantiates the in-memory contents of the nib object’s nib file, creating a distinct object tree and set of top-level objects.

# UINibOptionsKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Options that specify how to unarchive and instantiate the nib.

## Declaration

```objectivec
typedef NSString * UINibOptionsKey;
```

## Topics

### Keys

- [UINibExternalObjects](optionskey/externalobjects.md): The replacements for any proxy objects in the nib file.

## See Also

### Retrieving objects from the nib file

- [instantiateWithOwner:options:](instantiate%28withowner_options_%29.md): Deprecated. Unarchives and instantiates the in-memory contents of the nib object’s nib file, creating a distinct object tree and set of top-level objects.
