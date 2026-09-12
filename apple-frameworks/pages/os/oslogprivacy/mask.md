> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogprivacy/mask](https://developer.apple.com/documentation/os/oslogprivacy/mask)

# OSLogPrivacy.Mask

**Framework:** os  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A mask that establishes how the system displays a redacted value in a log message.

## Declaration

```swift
enum Mask
```

## Topics

### Privacy Mask Options

- [OSLogPrivacy.Mask.hash](mask/hash.md): An option to replace a redacted value with a string that contains a hashed version of the original value.
- [OSLogPrivacy.Mask.none](mask/none.md): An option to replace a redacted value with a generic string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Creating a Custom Privacy Mask

- [auto(mask:)](auto%28mask_%29.md): Returns a privacy structure that determines whether to redact or show values according to their type, and customizes the display of redacted values.
- [private(mask:)](private%28mask_%29.md): Returns a privacy structure that marks an interpolated value as private, and customizes the display of redacted values.
- [sensitive(mask:)](sensitive%28mask_%29.md): Returns a privacy structure that marks an interpolated value as sensitive, and customizes the display of redacted values.
