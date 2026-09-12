> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anytransientappentity/exported(as:)-8zhnu](https://developer.apple.com/documentation/appintentstesting/anytransientappentity/exported(as:)-8zhnu)

# exported(as:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Exports this transient entity as a system intent value type.

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

> **Throws**

> If the entity does not support the requested value conversion.
