> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inparameter/init(for:keypath:)](https://developer.apple.com/documentation/intents/inparameter/init(for:keypath:))

# init(for:keyPath:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new parameter object using the specified key path and class information.

## Declaration

```swift
convenience init(for aClass: AnyClass, keyPath: String)
```

## Parameters

- `aClass`: The intent or intent response class that contains the specified key path. For example, when specifying properties of a ride request intent, you would specify the [INRequestRideIntent](../inrequestrideintent.md) class.
- `keyPath`: The path to a property of the specified class. For example, to specify the key path for the [pickupLocation](../inrequestrideintent/pickuplocation.md) property of a ride request, specify the string `pickupLocation`.

<a id="return-value"></a>

## Return Value

An initialized parameter object.

<a id="Discussion"></a>

## Discussion

If any properties in the key path contain an array or ordered set, use the [setIndex(\_:forSubKeyPath:)](setindex%28__forsubkeypath_%29.md) method to specify which object in those properties to use.

## See Also

### Creating a Parameter Object

- [init(keyPath:)](init%28keypath_%29.md): Creates a new parameter object using the specified key path and class information.

# parameterForClass:keyPath: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new parameter object using the specified key path and class information.

## Declaration

```objectivec
+ (instancetype) parameterForClass:(Class) aClass keyPath:(NSString *) keyPath;
```

## Parameters

- `aClass`: The intent or intent response class that contains the specified key path. For example, when specifying properties of a ride request intent, you would specify the [INRequestRideIntent](../inrequestrideintent.md) class.
- `keyPath`: The path to a property of the specified class. For example, to specify the key path for the [pickupLocation](../inrequestrideintent/pickuplocation.md) property of a ride request, specify the string `pickupLocation`.

<a id="return-value"></a>

## Return Value

An initialized parameter object.

<a id="Discussion"></a>

## Discussion

If any properties in the key path contain an array or ordered set, use the [setIndex:forSubKeyPath:](setindex%28__forsubkeypath_%29.md) method to specify which object in those properties to use.
