> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:indexingkey:)-8pndc

# init(identifier:indexingKey:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates an app intent entity property.  Do not call this directly, use @ComputedProperty or @DeferredProperty

## Declaration

```swift
convenience init(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)
```

## Parameters

- `identifier`: The identifier of the property
- `indexingKey`: A Spotlight attribute set key mapping for this property.
