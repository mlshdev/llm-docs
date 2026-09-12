> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_unmute_process(_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_unmute_process(_:_:))

# es_unmute_process(\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Restores event delivery from a previously-muted process.

## Declaration

```swift
func es_unmute_process(_ client: OpaquePointer, _ audit_token: UnsafePointer<audit_token_t>) -> es_return_t
```

## Parameters

- `client`: A previously-muted client. If the call succeeds, this client begins to receive events from the process indicated by `audit_token`.
- `audit_token`: The audit token indicating the process to unmute.

<a id="return-value"></a>

## Return Value

A value that indicates whether the unmute request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

To unmute a subset of events from a process, use [es_unmute_process_events(\_:\_:\_:\_:)](es_unmute_process_events%28________%29.md).

## See Also

### Unmuting Events

- [es_unmute_process_events(\_:\_:\_:\_:)](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path(\_:\_:\_:)](es_unmute_path%28______%29.md): Restores event delivery from a previously-muted path.
- [es_unmute_path_events(\_:\_:\_:\_:\_:)](es_unmute_path_events%28__________%29.md): Restores event delivery of a subset of events from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_unmute_all_paths(\_:)](es_unmute_all_paths%28__%29.md): Restores event delivery from previously-muted paths.

# es_unmute_process (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Restores event delivery from a previously-muted process.

## Declaration

```objectivec
extern es_return_t es_unmute_process(es_client_t *client, const audit_token_t *audit_token);
```

## Parameters

- `client`: A previously-muted client. If the call succeeds, this client begins to receive events from the process indicated by `audit_token`.
- `audit_token`: The audit token indicating the process to unmute.

<a id="return-value"></a>

## Return Value

A value that indicates whether the unmute request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

To unmute a subset of events from a process, use [es_unmute_process_events](es_unmute_process_events%28________%29.md).

## See Also

### Unmuting Events

- [es_unmute_process_events](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path](es_unmute_path%28______%29.md): Restores event delivery from a previously-muted path.
- [es_unmute_path_events](es_unmute_path_events%28__________%29.md): Restores event delivery of a subset of events from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_unmute_all_paths](es_unmute_all_paths%28__%29.md): Restores event delivery from previously-muted paths.
