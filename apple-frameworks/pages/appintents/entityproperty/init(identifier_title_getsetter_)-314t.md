> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:title:getsetter:)-314t

# init(identifier:title:getSetter:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an app intent entity property.  Do not call this directly, use @ComputedProperty or @DeferredProperty

## Declaration

```swift
convenience init<Entity>(identifier: String, title: LocalizedStringResource, getSetter: WritableKeyPath<Entity, Value>) where Entity : AppEntity, Value.ValueType == EntityCollection<Entity>
```

## Parameters

- `identifier`: The identifier of the property
- `title`: A word or short phrase summarizing this property.
- `getSetter`: The getter reference for the property
