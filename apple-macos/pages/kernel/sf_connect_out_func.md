> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_connect_out_func](https://developer.apple.com/documentation/kernel/sf_connect_out_func)

# sf_connect_out_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*sf_connect_out_func)(void *cookie, socket_t so, const struct sockaddr *to);
```

## Parameters

- `cookie`: Cookie value specified when the filter attach was called.
- `so`: The socket the filter is attached to.
- `to`: The remote address of the outbound connection.

<a id="return_value"></a>

## Return Value

Return: 0 - The caller will continue with normal processing of the connection. EJUSTRETURN - The caller will return with a value of 0 (no error) from that point without further processing the connect command. The protocol layer will not see the call. Anything Else - The caller will rejecting the outbound connection.

<a id="discussion"></a>

## Discussion

sf_connect_out_func is called to filter outbound connections. A protocol will call this before initiating an outbound connection.
