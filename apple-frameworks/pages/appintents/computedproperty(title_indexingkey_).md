> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/computedproperty(title:indexingkey:)](https://developer.apple.com/documentation/appintents/computedproperty(title:indexingkey:))

# ComputedProperty(title:indexingKey:)

**Framework:** App Intents  
**Kind:** Macro  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A macro that adds a computed app entity property with a get accessor and an optional set accessor.

## Declaration

```swift
@attached(peer, names: prefixed(`$`), prefixed(`_`)) @attached(accessor, names: named(get), named(set)) macro ComputedProperty(title: LocalizedStringResource, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>)
```

## Parameters

- `title`: A localized string resource describing the property for display in the user interface.
- `indexingKey`: A Spotlight attribute set key mapping for this property.

<a id="Example"></a>

## Example

```swift
struct Restaurant: AppEntity {
    var model: Menu

    @ComputedProperty(title: "Menu Items", indexingKey: \.displayName)
    var menuItems: [MenuItem] {
        model.menuItems
    }
}
```

## See Also

### Property declarations

- [ComputedProperty()](computedproperty%28%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:)](computedproperty%28title_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(indexingKey:)](computedproperty%28indexingkey_%29.md): A macro that adds a computed app entity property with get and set accessors.
- [ComputedProperty(customIndexingKey:)](computedproperty%28customindexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:customIndexingKey:)](computedproperty%28title_customindexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [DeferredProperty()](deferredproperty%28%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(title:)](deferredproperty%28title_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(indexingKey:)](deferredproperty%28indexingkey_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(title:indexingKey:)](deferredproperty%28title_indexingkey_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [EntityProperty](entityproperty.md): A property wrapper that exposes the associated property to the system.
- [EntityPropertyModifiers](entitypropertymodifiers.md)
- [Property comparators](property-comparators.md): Specify the type of comparison to perform during a property-matched query.
