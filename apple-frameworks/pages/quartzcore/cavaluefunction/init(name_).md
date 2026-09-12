> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cavaluefunction/init(name:)](https://developer.apple.com/documentation/quartzcore/cavaluefunction/init(name:))

# init(name:) (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns the value function object identified by the name.

## Declaration

```swift
convenience init?(name: CAValueFunctionName)
```

## Parameters

- `name`: The name of the value function.

<a id="return-value"></a>

## Return Value

A new `CAValueFunction` instance with the value function specified by the name.

<a id="Discussion"></a>

## Discussion

The possible values for `name` are specified in [Rotate Value Functions](../rotate-value-functions.md), [Scale Value Functions](../scale-value-functions.md), and [Translate Functions](../translate-functions.md).

# functionWithName: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns the value function object identified by the name.

## Declaration

```objectivec
+ (instancetype) functionWithName:(CAValueFunctionName) name;
```

## Parameters

- `name`: The name of the value function.

<a id="return-value"></a>

## Return Value

A new `CAValueFunction` instance with the value function specified by the name.

<a id="Discussion"></a>

## Discussion

The possible values for `name` are specified in [Rotate Value Functions](../rotate-value-functions.md), [Scale Value Functions](../scale-value-functions.md), and [Translate Functions](../translate-functions.md).
