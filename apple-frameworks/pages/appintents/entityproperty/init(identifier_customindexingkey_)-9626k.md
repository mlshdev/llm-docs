> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:customindexingkey:)-9626k

# init(identifier:customIndexingKey:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates an app intent entity property.  Do not call this directly, use @ComputedProperty or @DeferredProperty

## Declaration

```swift
convenience init(identifier: String, customIndexingKey: CSCustomAttributeKey)
```

## Parameters

- `identifier`: The identifier of the property
- `customIndexingKey`: A custom Spotlight attribute set key for this property.
