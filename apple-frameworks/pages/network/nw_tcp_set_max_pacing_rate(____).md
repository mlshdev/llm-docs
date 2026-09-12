> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_tcp_set_max_pacing_rate(_:_:)](https://developer.apple.com/documentation/network/nw_tcp_set_max_pacing_rate(_:_:))

# nw_tcp_set_max_pacing_rate(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func nw_tcp_set_max_pacing_rate(_ metadata: nw_protocol_metadata_t, _ max_pacing_rate: UInt64) -> Int32
```

## Parameters

- `metadata`: A TCP protocol metadata object from an established connection (e.g. obtained via nw_connection_access_established_protocol_metadata).
- `max_pacing_rate`: Maximum pacing rate in bytes per second. 0 or UINT64_MAX disables pacing on this connection.

<a id="return-value"></a>

## Return Value

Returns 0 on success, or a POSIX errno value on failure (e.g. EINVAL if metadata is not a TCP metadata object, or the underlying socket error).

<a id="discussion"></a>

## Discussion

Set a maximum pacing rate for a TCP connection, in bytes per second.

TCP pacing spreads outgoing packet transmission across time to avoid bursts and reduce queueing in the network. With a cap in place, the on-wire rate is the minimum of (a) this cap, and (b) the rate computed from the congestion window divided by smoothed RTT. The cap therefore never raises throughput above what congestion control would otherwise allow.

```
A value of 0 or UINT64_MAX disables pacing on this connection — the
connection sends without pacing (subject only to congestion control).

Rates in the open interval (0, 12500) are silently clamped up to
12500 bytes/second (100 Kbps). Callers needing genuinely sub-100-Kbps
pacing must shape at the application layer.

The cap may be updated at any time during the lifetime of an
established connection. Each call replaces the prior value.
```

# nw_tcp_set_max_pacing_rate (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
int nw_tcp_set_max_pacing_rate(nw_protocol_metadata_t metadata, uint64_t max_pacing_rate);
```

## Parameters

- `metadata`: A TCP protocol metadata object from an established connection (e.g. obtained via nw_connection_access_established_protocol_metadata).
- `max_pacing_rate`: Maximum pacing rate in bytes per second. 0 or UINT64_MAX disables pacing on this connection.

<a id="return-value"></a>

## Return Value

Returns 0 on success, or a POSIX errno value on failure (e.g. EINVAL if metadata is not a TCP metadata object, or the underlying socket error).

<a id="discussion"></a>

## Discussion

Set a maximum pacing rate for a TCP connection, in bytes per second.

TCP pacing spreads outgoing packet transmission across time to avoid bursts and reduce queueing in the network. With a cap in place, the on-wire rate is the minimum of (a) this cap, and (b) the rate computed from the congestion window divided by smoothed RTT. The cap therefore never raises throughput above what congestion control would otherwise allow.

```
A value of 0 or UINT64_MAX disables pacing on this connection — the
connection sends without pacing (subject only to congestion control).

Rates in the open interval (0, 12500) are silently clamped up to
12500 bytes/second (100 Kbps). Callers needing genuinely sub-100-Kbps
pacing must shape at the application layer.

The cap may be updated at any time during the lifetime of an
established connection. Each call replaces the prior value.
```
