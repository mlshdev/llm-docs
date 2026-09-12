> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction/parametervalue(for:)](https://developer.apple.com/documentation/intents/ininteraction/parametervalue(for:))

# parameterValue(for:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the value of the specified parameter of this interaction object.

## Declaration

```swift
func parameterValue(for parameter: INParameter) -> Any?
```

## Parameters

- `parameter`: The [INParameter](../inparameter.md) object that specifies the key path to a property of this interaction object.

<a id="return-value"></a>

## Return Value

The value associated with the property at the specified key path.

<a id="Discussion"></a>

## Discussion

Use this method to fetch the value of a property that was specified using an [INParameter](../inparameter.md) object. A parameter object contains a key path that identifies the location of the property inside this interaction object.

# parameterValueForParameter: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the value of the specified parameter of this interaction object.

## Declaration

```objectivec
- (id) parameterValueForParameter:(INParameter *) parameter;
```

## Parameters

- `parameter`: The [INParameter](../inparameter.md) object that specifies the key path to a property of this interaction object.

<a id="return-value"></a>

## Return Value

The value associated with the property at the specified key path.

<a id="Discussion"></a>

## Discussion

Use this method to fetch the value of a property that was specified using an [INParameter](../inparameter.md) object. A parameter object contains a key path that identifies the location of the property inside this interaction object.
