> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/one](https://developer.apple.com/documentation/regexbuilder/one)

# One

**Framework:** RegexBuilder  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A regex component that matches exactly one occurrence of its underlying component.

## Declaration

```swift
struct One<Output>
```

## Topics

### Initializers

- [init(\_:)](one/init%28__%29.md): Creates a regex component that matches the given component exactly once.

## Relationships

### Conforms To

- [RegexComponent](../swift/regexcomponent.md)

## See Also

### Quantifiers

- [Optionally](optionally.md): A regex component that matches zero or one occurrences of its underlying component.
- [ZeroOrMore](zeroormore.md): A regex component that matches zero or more occurrences of its underlying component.
- [OneOrMore](oneormore.md): A regex component that matches one or more occurrences of its underlying component.
- [Repeat](repeat.md): A regex component that matches a selectable number of occurrences of its underlying component.
- [Local](local.md): A regex component that represents an atomic group.
