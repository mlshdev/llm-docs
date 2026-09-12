> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/morphology/custompronoun](https://developer.apple.com/documentation/foundation/morphology/custompronoun)

# Morphology.CustomPronoun

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ · watchOS 8.0+ (deprecated in 10.0)

A custom pronoun behavior for use in a specific langauge.

> Use TermOfAddress instead

## Declaration

```swift
struct CustomPronoun
```

<a id="overview"></a>

## Overview

Set a [Morphology.CustomPronoun](custompronoun.md) instance on a [Morphology](../morphology.md) instance when you want to provide a langauge-specific customization of pronoun use in that language. Different languages have different requirements for the grammatical information needed to apply a custom pronoun, so you set custom pronoun behavior on a per-language basis.

The example below shows how to create English “ze” and “hir” custom pronouns:

```swift
let ze = Morphology.CustomPronoun()
ze.subjectForm = "ze"
ze.objectForm = "hir"
ze.possessiveForm = "hir"
ze.possessiveAdjectiveForm = "hir"
ze.reflexiveForm = "hirself"
```

[Morphology.CustomPronoun](custompronoun.md) only supports third-person pronouns. Use this feature when your app needs to refer to third parties with a specific pronoun.

## Topics

### Creating a Custom Pronoun

- [init()](custompronoun/init%28%29.md): Deprecated. Creates an empty custom pronoun.

### Assessing Custom Pronoun Support

- [isSupported(forLanguage:)](custompronoun/issupported%28forlanguage_%29.md): Deprecated. Returns a Boolean value that indicates whether the given language supports setting custom pronouns.
- [requiredKeys(forLanguage:)](custompronoun/requiredkeys%28forlanguage_%29.md): Deprecated. Returns a collection of the custom pronoun keys required by this language.

### Determining Pronoun Forms

- [subjectForm](custompronoun/subjectform.md): Deprecated. The subject pronoun form to apply when using this custom pronoun behavior.
- [objectForm](custompronoun/objectform.md): Deprecated. The object pronoun form to apply when using this custom pronoun behavior.
- [possessiveForm](custompronoun/possessiveform.md): Deprecated. The posessive pronoun form to apply when using this custom pronoun behavior.
- [possessiveAdjectiveForm](custompronoun/possessiveadjectiveform.md): Deprecated. The posessive adjective pronoun form to apply when using this custom pronoun behavior.
- [reflexiveForm](custompronoun/reflexiveform.md): Deprecated. The reflexive pronoun form to apply when using this custom pronoun behavior.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Per-Language Features

- [setCustomPronoun(\_:forLanguage:)](setcustompronoun%28__forlanguage_%29.md): Deprecated. Sets a custom pronoun behavior for this morphology to apply to the given language.
- [customPronoun(forLanguage:)](custompronoun%28forlanguage_%29.md): Deprecated. Returns any custom pronoun behavior this morphology applies to the given language.
