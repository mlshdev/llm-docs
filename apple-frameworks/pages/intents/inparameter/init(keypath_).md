> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inparameter/init(keypath:)](https://developer.apple.com/documentation/intents/inparameter/init(keypath:))

# init(keyPath:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+

Creates a new parameter object using the specified key path and class information.

## Declaration

```swift
@nonobjc convenience init?<Root, Value>(keyPath: KeyPath<Root, Value>)
```

## Parameters

- `keyPath`: Specifies a path to a value within a type.The intent or intent response class that acts as the root of the specified key path. For example, when specifying properties of a ride request intent, you would specify the [INRequestRideIntent](../inrequestrideintent.md) class. The path to a property of the specified class. For example, to specify the key path for the [pickupLocation](../inrequestrideintent/pickuplocation.md) property of a ride request, specify the string pickupLocation.

<a id="return-value"></a>

## Return Value

An initialized parameter object.

## See Also

### Creating a Parameter Object

- [init(for:keyPath:)](init%28for_keypath_%29.md): Creates a new parameter object using the specified key path and class information.
