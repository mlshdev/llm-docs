> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/resolved(from:)-4yp5n](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/resolved(from:)-4yp5n)

# resolved(from:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Resolves an entity from a system intent value type through the entity type’s transferable conformance.

## Declaration

```swift
func resolved<T>(from value: T) async throws -> AnyAppEntity where T : _SystemIntentValue, T : IntentValueConvertible
```

## Parameters

- `value`: The system intent value (e.g., a `PlaceDescriptor` instance).

<a id="return-value"></a>

## Return Value

The resolved entity.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the entity type does not support the given value type.
