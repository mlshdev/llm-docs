> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(title:indexingkey:)-28z6k

# init(title:indexingKey:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Creates an app intent entity property.

## Declaration

```swift
convenience init(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)
```

## Parameters

- `title`: A word or short phrase summarizing this property.
- `indexingKey`: A Spotlight attribute set key mapping for this property.
