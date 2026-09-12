> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/transientappentitydefinition/makeentity](https://developer.apple.com/documentation/appintentstesting/transientappentitydefinition/makeentity)

# makeEntity

**Framework:** App Intents Testing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a populated instance of this transient entity.

## Declaration

```swift
var makeEntity: IntentValuePropertiesCallable<AnyTransientAppEntity> { get }
```

<a id="discussion"></a>

## Discussion

```swift
let entityDefinition: TransientAppEntityDefinition = definitions.transientEntities["SomeEntityName"]

let entity = entityDefinition.makeEntity(
    sessionId: "temp-session-123",
    startTime: Date()
)
```
