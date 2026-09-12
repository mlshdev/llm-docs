> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_muted_processes(_:_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_muted_processes(_:_:_:))

# es_muted_processes(\_:\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 12.0)

Generates a list of muted processes.

> Use [es_muted_processes_events(\_:\_:)](es_muted_processes_events%28____%29.md) instead.

## Declaration

```swift
func es_muted_processes(_ client: OpaquePointer, _ count: UnsafeMutablePointer<Int>, _ audit_tokens: UnsafeMutablePointer<UnsafeMutablePointer<audit_token_t>>?) -> es_return_t
```

## Parameters

- `client`: The client for which to generate a list of muted proceses.
- `count`: On return, the number of audit tokens generated.
- `audit_tokens`: On return, an array of audit tokens, each of which represents a muted process.

<a id="return-value"></a>

## Return Value

A value that indicates whether the request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

The caller handles freeing the memory pointed to by `audit_token`.

## See Also

### Deprecated Functions

- [es_mute_path_literal(\_:\_:)](es_mute_path_literal%28____%29.md): Deprecated. Suppresses events from executables matching a path literal.
- [es_mute_path_prefix(\_:\_:)](es_mute_path_prefix%28____%29.md): Deprecated. Suppresses events from executables matching a path prefix.

# es_muted_processes (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 12.0)

Generates a list of muted processes.

> Use [es_muted_processes_events](es_muted_processes_events%28____%29.md) instead.

## Declaration

```objectivec
extern es_return_t es_muted_processes(es_client_t *client, size_t *count, audit_token_t **audit_tokens);
```

## Parameters

- `client`: The client for which to generate a list of muted proceses.
- `count`: On return, the number of audit tokens generated.
- `audit_tokens`: On return, an array of audit tokens, each of which represents a muted process.

<a id="return-value"></a>

## Return Value

A value that indicates whether the request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

The caller handles freeing the memory pointed to by `audit_token`.

## See Also

### Deprecated Functions

- [es_mute_path_literal](es_mute_path_literal%28____%29.md): Deprecated. Suppresses events from executables matching a path literal.
- [es_mute_path_prefix](es_mute_path_prefix%28____%29.md): Deprecated. Suppresses events from executables matching a path prefix.
