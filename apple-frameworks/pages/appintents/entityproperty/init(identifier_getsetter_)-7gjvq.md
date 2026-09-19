> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:getsetter:)-7gjvq

# init(identifier:getSetter:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an app intent entity property.  Do not call this directly, use @ComputedProperty or @DeferredProperty

## Declaration

```swift
convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>) where Entity : AppEntity
```

## Parameters

- `identifier`: The identifier of the property
- `getSetter`: The getter reference for the property
