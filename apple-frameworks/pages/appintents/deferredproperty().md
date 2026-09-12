> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/deferredproperty()](https://developer.apple.com/documentation/appintents/deferredproperty())

# DeferredProperty()

**Framework:** App Intents  
**Kind:** Macro  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A macro that adds an asynchronous app entity property with an asynchronous get accessor.

## Declaration

```swift
@attached(peer, names: prefixed(`$`), prefixed(`_`)) @attached(accessor, names: named(get), named(set)) macro DeferredProperty()
```

<a id="Example"></a>

## Example

```swift
struct Restaurant: AppEntity {
    var model: Menu

    @DeferredProperty
    var popularItems: [MenuItem] {
        get async {
            await model.server.popularMenuItems()
        }
    }
}
```

> **Note**

> A deferred property isn’t included when the system indexes an [IndexedEntity](indexedentity.md).

## See Also

### Property declarations

- [ComputedProperty()](computedproperty%28%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:)](computedproperty%28title_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(indexingKey:)](computedproperty%28indexingkey_%29.md): A macro that adds a computed app entity property with get and set accessors.
- [ComputedProperty(customIndexingKey:)](computedproperty%28customindexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:customIndexingKey:)](computedproperty%28title_customindexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:indexingKey:)](computedproperty%28title_indexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [DeferredProperty(title:)](deferredproperty%28title_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(indexingKey:)](deferredproperty%28indexingkey_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(title:indexingKey:)](deferredproperty%28title_indexingkey_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [EntityProperty](entityproperty.md): A property wrapper that exposes the associated property to the system.
- [EntityPropertyModifiers](entitypropertymodifiers.md)
- [Property comparators](property-comparators.md): Specify the type of comparison to perform during a property-matched query.
