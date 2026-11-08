> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentdefinitions/skills

# skills

**Framework:** App Intents Testing  
**Kind:** Instance Property  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

The definitions of the app’s skills, keyed by skill name.

## Declaration

```swift
var skills: IntentDefinitions.DefinitionCollection<SkillDefinition> { get }
```

<a id="discussion"></a>

## Discussion

```swift
let definitions = IntentDefinitions(bundleIdentifier: "com.apple.example")
let planTripSkill = definitions.skills["plan-trip"]
```
