> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/equalto(_:equalitymask:)](https://developer.apple.com/documentation/coremedia/cmformatdescription/equalto(_:equalitymask:))

# equalTo(\_:equalityMask:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Evaluates equality for the parts of two audio format descriptions.

## Declaration

```swift
func equalTo(_ otherFormatDescription: CMAudioFormatDescription, equalityMask: CMFormatDescription.EqualityMask = .all) -> (Bool, equalityMask: CMFormatDescription.EqualityMask)
```

## Parameters

- `otherFormatDescription`: A format description to compare.
- `equalityMask`: A mask that specifies which parts of the descriptions to compare.

## See Also

### Comparing Format Descriptions

- [==(\_:\_:)](==%28____%29.md): Equality is derived from
- [equalTo(\_:extensionKeysToIgnore:sampleDescriptionExtensionAtomKeysToIgnore:)](equalto%28__extensionkeystoignore_sampledescriptionextensionatomkeystoignore_%29.md): Evaluates equality for the parts of two audio format descriptions, ignoring the extensions you specify.
