> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(title:indexingkey:)-2zpkf

# init(title:indexingKey:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

Creates an app intent entity property.

## Declaration

```swift
convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)
```

## Parameters

- `title`: A word or short phrase summarizing this property.
- `indexingKey`: A Spotlight attribute set key mapping for this property.
