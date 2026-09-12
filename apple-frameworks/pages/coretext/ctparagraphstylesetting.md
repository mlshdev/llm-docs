> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctparagraphstylesetting](https://developer.apple.com/documentation/coretext/ctparagraphstylesetting)

# CTParagraphStyleSetting (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This structure is used to alter the paragraph style.

## Declaration

```swift
struct CTParagraphStyleSetting
```

## Topics

### Initializers

- [init(spec:valueSize:value:)](ctparagraphstylesetting/init%28spec_valuesize_value_%29.md)

### Instance Properties

- [spec](ctparagraphstylesetting/spec.md): The specifier of the setting. See [CTParagraphStyleSpecifier](ctparagraphstylespecifier.md) for possible values.
- [value](ctparagraphstylesetting/value.md): A reference to the value of the setting specified by the `spec` field. The value must be in the proper range for the `spec` value and at least as large as the size specified in `valueSize`.
- [valueSize](ctparagraphstylesetting/valuesize.md): The size of the value pointed to by the `value` field. This value must match the size of the value required by the `CTParagraphStyleSpecifier` set in the `spec` field.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# CTParagraphStyleSetting (Objective-C)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This structure is used to alter the paragraph style.

## Declaration

```objectivec
typedef struct CTParagraphStyleSetting { ... } CTParagraphStyleSetting;
```

## Topics

### Instance Properties

- [spec](ctparagraphstylesetting/spec.md): The specifier of the setting. See [CTParagraphStyleSpecifier](ctparagraphstylespecifier.md) for possible values.
- [value](ctparagraphstylesetting/value.md): A reference to the value of the setting specified by the `spec` field. The value must be in the proper range for the `spec` value and at least as large as the size specified in `valueSize`.
- [valueSize](ctparagraphstylesetting/valuesize.md): The size of the value pointed to by the `value` field. This value must match the size of the value required by the `CTParagraphStyleSpecifier` set in the `spec` field.
