> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:getsetter:)-5jta5

# init(identifier:getSetter:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates an app intent entity property.  Do not call this directly, use @ComputedProperty or @DeferredProperty

## Declaration

```swift
convenience init<Entity>(identifier: String, getSetter: WritableKeyPath<Entity, Value>) where Entity : AppEntity
```

## Parameters

- `identifier`: The identifier of the property
- `getSetter`: The getter reference for the property
