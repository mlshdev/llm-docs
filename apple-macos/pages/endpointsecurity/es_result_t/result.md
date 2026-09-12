> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_result_t/result](https://developer.apple.com/documentation/endpointsecurity/es_result_t/result)

# result (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The message’s result, as either an authorization result or flags.

## Declaration

```swift
var result: es_result_t.__Unnamed_union_result
```

<a id="Discussion"></a>

## Discussion

This type is a `union` of an [es_auth_result_t](../es_auth_result_t.md) named `auth` and a [uint32_t](../../kernel/uint32_t.md) named `flags`. Use the [result_type](result_type.md) field to determine which type this result represents.

## See Also

### Inspecting Result Properties

- [result_type](result_type.md): The type of the message’s result.
- [es_result_type_t](../es_result_type_t.md): A type that indicates the type of a message’s result.

# result (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The message’s result, as either an authorization result or flags.

## Declaration

```objectivec
union { ... } result;
```

<a id="Discussion"></a>

## Discussion

This type is a `union` of an [es_auth_result_t](../es_auth_result_t.md) named `auth` and a [uint32_t](../../kernel/uint32_t.md) named `flags`. Use the [result_type](result_type.md) field to determine which type this result represents.

## Topics

### Instance Properties

- [auth](result/auth.md)
- [flags](result/flags.md)
- [reserved](result/reserved.md)

## See Also

### Inspecting Result Properties

- [result_type](result_type.md): The type of the message’s result.
- [es_result_type_t](../es_result_type_t.md): A type that indicates the type of a message’s result.
