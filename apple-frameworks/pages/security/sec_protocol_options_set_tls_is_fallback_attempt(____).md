> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_tls_is_fallback_attempt(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_set_tls_is_fallback_attempt(_:_:))

# sec_protocol_options_set_tls_is_fallback_attempt(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_options_set_tls_is_fallback_attempt(_ options: sec_protocol_options_t, _ is_fallback_attempt: Bool)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `is_fallback_attempt`: Set a flag indicating that this is a TLS fallback attempt.

<a id="discussion"></a>

## Discussion

Signal if this is a TLS fallback attempt.

```
 A fallback attempt is one following a previously failed TLS connection
 due to version or parameter incompatibility, e.g., when speaking to a server
 that does not support a client-offered ciphersuite.

 Clients MUST NOT enable fallback for fresh connections.
```

# sec_protocol_options_set_tls_is_fallback_attempt (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
void sec_protocol_options_set_tls_is_fallback_attempt(sec_protocol_options_t options, bool is_fallback_attempt);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `is_fallback_attempt`: Set a flag indicating that this is a TLS fallback attempt.

<a id="discussion"></a>

## Discussion

Signal if this is a TLS fallback attempt.

```
 A fallback attempt is one following a previously failed TLS connection
 due to version or parameter incompatibility, e.g., when speaking to a server
 that does not support a client-offered ciphersuite.

 Clients MUST NOT enable fallback for fresh connections.
```
