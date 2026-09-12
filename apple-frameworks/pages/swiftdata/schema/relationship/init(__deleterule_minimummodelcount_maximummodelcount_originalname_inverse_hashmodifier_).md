> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/relationship/init(_:deleterule:minimummodelcount:maximummodelcount:originalname:inverse:hashmodifier:)](https://developer.apple.com/documentation/swiftdata/schema/relationship/init(_:deleterule:minimummodelcount:maximummodelcount:originalname:inverse:hashmodifier:))

# init(\_:deleteRule:minimumModelCount:maximumModelCount:originalName:inverse:hashModifier:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
init(_ options: Schema.Relationship.Option..., deleteRule: Schema.Relationship.DeleteRule = .nullify, minimumModelCount: Int? = 0, maximumModelCount: Int? = 0, originalName: String? = nil, inverse: AnyKeyPath? = nil, hashModifier: String? = nil)
```
