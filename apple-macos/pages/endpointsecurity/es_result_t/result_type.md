> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_result_t/result_type](https://developer.apple.com/documentation/endpointsecurity/es_result_t/result_type)

# result_type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of the message’s result.

## Declaration

```swift
var result_type: es_result_type_t
```

<a id="Discussion"></a>

## Discussion

Use this value to determine which member of the [result](result.md) `union` to use: `auth` or `flags`.

## See Also

### Inspecting Result Properties

- [result](result.md): The message’s result, as either an authorization result or flags.
- [es_result_type_t](../es_result_type_t.md): A type that indicates the type of a message’s result.

# result_type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of the message’s result.

## Declaration

```objectivec
es_result_type_t result_type;
```

<a id="Discussion"></a>

## Discussion

Use this value to determine which member of the [result](result.md) `union` to use: `auth` or `flags`.

## See Also

### Inspecting Result Properties

- [result](result.md): The message’s result, as either an authorization result or flags.
- [es_result_type_t](../es_result_type_t.md): A type that indicates the type of a message’s result.
