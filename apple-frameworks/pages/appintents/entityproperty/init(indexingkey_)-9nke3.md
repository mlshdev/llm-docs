> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(indexingkey:)-9nke3

# init(indexingKey:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates an app intent entity property.

## Declaration

```swift
convenience init<Entity>(indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>) where Entity : AppEntity, Value.ValueType == EntityCollection<Entity>
```

## Parameters

- `indexingKey`: A Spotlight attribute set key mapping for this property.
