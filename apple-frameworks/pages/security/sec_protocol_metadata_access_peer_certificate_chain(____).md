> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_access_peer_certificate_chain(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_access_peer_certificate_chain(_:_:))

# sec_protocol_metadata_access_peer_certificate_chain(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_metadata_access_peer_certificate_chain(_ metadata: sec_protocol_metadata_t, _ handler: @escaping (sec_certificate_t) -> Void) -> Bool
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `handler`: A block to invoke one or more times with sec_certificate_t objects

<a id="return-value"></a>

## Return Value

Returns true if the peer certificates were accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Get the certificate chain of the protocol instance peer.

# sec_protocol_metadata_access_peer_certificate_chain (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
bool sec_protocol_metadata_access_peer_certificate_chain(sec_protocol_metadata_t metadata, void (^handler)(sec_certificate_t certificate));
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `handler`: A block to invoke one or more times with sec_certificate_t objects

<a id="return-value"></a>

## Return Value

Returns true if the peer certificates were accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Get the certificate chain of the protocol instance peer.
