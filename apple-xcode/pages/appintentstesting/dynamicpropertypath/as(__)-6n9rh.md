> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/dynamicpropertypath/as(_:)-6n9rh](https://developer.apple.com/documentation/appintentstesting/dynamicpropertypath/as(_:)-6n9rh)

# as(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Casts the value to the given type.

## Declaration

```swift
func `as`<IntentType>(_ type: IntentType) throws -> IntentType.Instance where IntentType : AppIntentTypeDefinition
```

<a id="discussion"></a>

## Discussion

If the value’s type doesn’t match, this method throws an error.

```swift
let CoffeeEntity = definitions.entities["CoffeeEntity"]
let coffee: AnyAppEntity = try result.value.as(CoffeeEntity)
```
