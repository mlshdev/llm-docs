> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/equalto(_:extensionkeystoignore:sampledescriptionextensionatomkeystoignore:)](https://developer.apple.com/documentation/coremedia/cmformatdescription/equalto(_:extensionkeystoignore:sampledescriptionextensionatomkeystoignore:))

# equalTo(\_:extensionKeysToIgnore:sampleDescriptionExtensionAtomKeysToIgnore:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Evaluates equality for the parts of two audio format descriptions, ignoring the extensions you specify.

## Declaration

```swift
func equalTo(_ otherFormatDescription: CMFormatDescription, extensionKeysToIgnore: [CMFormatDescription.Extensions.Key] = [], sampleDescriptionExtensionAtomKeysToIgnore: [String] = []) -> Bool
```

## Parameters

- `otherFormatDescription`: A format description to compare to.
- `extensionKeysToIgnore`: A list of format description extension keys.
- `sampleDescriptionExtensionAtomKeysToIgnore`: A list of sample description extension atom keys.

## See Also

### Comparing Format Descriptions

- [==(\_:\_:)](==%28____%29.md): Equality is derived from
- [equalTo(\_:equalityMask:)](equalto%28__equalitymask_%29.md): Evaluates equality for the parts of two audio format descriptions.
