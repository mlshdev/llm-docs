> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-4bw4h](https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:title:customindexingkey:getsetter:)-4bw4h)

# init(identifier:title:customIndexingKey:getSetter:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
convenience init<Entity>(identifier: String, title: LocalizedStringResource, customIndexingKey: CSCustomAttributeKey, getSetter: WritableKeyPath<Entity, Value>) where Entity : AppEntity
```
