> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/skilldefinition

# SkillDefinition

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A definition that identifies one of an app’s skills by the app’s bundle identifier and the skill’s name.

## Declaration

```swift
struct SkillDefinition
```

<a id="overview"></a>

## Overview

Get a skill definition from the [skills](intentdefinitions/skills.md) collection of the app’s [IntentDefinitions](intentdefinitions.md):

```swift
let definitions = IntentDefinitions(bundleIdentifier: "com.apple.example")
let planTripSkill = definitions.skills["plan-trip"]
```

## Topics

### Instance Properties

- [bundleIdentifier](skilldefinition/bundleidentifier.md): Beta. The bundle identifier of the app that includes this skill.
- [skillName](skilldefinition/skillname.md): Beta. The skill’s name.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
