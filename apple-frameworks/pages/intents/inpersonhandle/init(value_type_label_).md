> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonhandle/init(value:type:label:)](https://developer.apple.com/documentation/intents/inpersonhandle/init(value:type:label:))

# init(value:type:label:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.1+

Initializes and returns a person handle with the specified data.

## Declaration

```swift
init(value: String?, type: INPersonHandleType, label: INPersonHandleLabel?)
```

## Parameters

- `value`: The data to associate with the handle. Specify the data as a user-readable string.
- `type`: A constant indicating the type of information in the *value* parameter. For a list of possible values, see [INPersonHandleType](../inpersonhandletype.md).
- `label`: The label to apply to the information. Use this information to help differentiate labels of similar types but with different meanings. For example, use this parameter to specify whether a phone number is the user’s home or work phone.

<a id="return-value"></a>

## Return Value

An initialized person handle object.

## See Also

### Initializing a Person Handle

- [init(value:type:)](init%28value_type_%29.md): Initializes and returns a person handle with the specified data.

# initWithValue:type:label: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes and returns a person handle with the specified data.

## Declaration

```objectivec
- (instancetype) initWithValue:(NSString *) value type:(INPersonHandleType) type label:(INPersonHandleLabel) label;
```

## Parameters

- `value`: The data to associate with the handle. Specify the data as a user-readable string.
- `type`: A constant indicating the type of information in the *value* parameter. For a list of possible values, see [INPersonHandleType](../inpersonhandletype.md).
- `label`: The label to apply to the information. Use this information to help differentiate labels of similar types but with different meanings. For example, use this parameter to specify whether a phone number is the user’s home or work phone.

<a id="return-value"></a>

## Return Value

An initialized person handle object.

## See Also

### Initializing a Person Handle

- [initWithValue:type:](init%28value_type_%29.md): Initializes and returns a person handle with the specified data.
