> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappentity/exported(as:)-54w7m](https://developer.apple.com/documentation/appintentstesting/anyappentity/exported(as:)-54w7m)

# exported(as:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Exports this entity as a system intent value type.

## Declaration

```swift
func exported<T>(as type: T.Type) async throws -> T where T : _SystemIntentValue, T : IntentValueConvertible
```

## Parameters

- `type`: The target system intent value type.

<a id="return-value"></a>

## Return Value

An instance of the requested type.

<a id="discussion"></a>

## Discussion

Use this for system-provided currency types that conform to `_SystemIntentValue`, such as `PlaceDescriptor`. The entity must declare a `ValueRepresentation` for the requested type.

> **Throws**

> If the entity does not support the requested value conversion.
