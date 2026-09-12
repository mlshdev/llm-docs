> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonhandle/init(value:type:)](https://developer.apple.com/documentation/intents/inpersonhandle/init(value:type:))

# init(value:type:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes and returns a person handle with the specified data.

## Declaration

```swift
convenience init(value: String?, type: INPersonHandleType)
```

## Parameters

- `value`: The data to associate with the handle. Specify the data as a user-readable string.
- `type`: A constant indicating the type of information in the `value` parameter. For a list of possible values, see [INPersonHandleType](../inpersonhandletype.md).

<a id="return-value"></a>

## Return Value

An initialized person handle object.

## See Also

### Initializing a Person Handle

- [init(value:type:label:)](init%28value_type_label_%29.md): Initializes and returns a person handle with the specified data.

# initWithValue:type: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes and returns a person handle with the specified data.

## Declaration

```objectivec
- (instancetype) initWithValue:(NSString *) value type:(INPersonHandleType) type;
```

## Parameters

- `value`: The data to associate with the handle. Specify the data as a user-readable string.
- `type`: A constant indicating the type of information in the `value` parameter. For a list of possible values, see [INPersonHandleType](../inpersonhandletype.md).

<a id="return-value"></a>

## Return Value

An initialized person handle object.

## See Also

### Initializing a Person Handle

- [initWithValue:type:label:](init%28value_type_label_%29.md): Initializes and returns a person handle with the specified data.
