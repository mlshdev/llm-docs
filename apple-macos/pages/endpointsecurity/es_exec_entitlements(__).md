> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_exec_entitlements(_:)](https://developer.apple.com/documentation/endpointsecurity/es_exec_entitlements(_:))

# es_exec_entitlements(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 27.0+

## Declaration

```swift
func es_exec_entitlements(_ exec: UnsafePointer<es_event_exec_t>) -> xpc_object_t?
```

## Parameters

- `exec`: The es_event_exec_t being inspected

<a id="return-value"></a>

## Return Value

The XPC dictionary containing all entitlements, or NULL if there are no entitlements.

<a id="discussion"></a>

## Discussion

Get the dictionary of entitlements associated with a message containing an es_event_exec_t

> **Note**

> The caller is responsible for releasing the returned object.

# es_exec_entitlements (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 27.0+

## Declaration

```objectivec
extern xpc_object_tes_exec_entitlements(const es_event_exec_t *exec);
```

## Parameters

- `exec`: The es_event_exec_t being inspected

<a id="return-value"></a>

## Return Value

The XPC dictionary containing all entitlements, or NULL if there are no entitlements.

<a id="discussion"></a>

## Discussion

Get the dictionary of entitlements associated with a message containing an es_event_exec_t

> **Note**

> The caller is responsible for releasing the returned object.
