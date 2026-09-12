> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_connect_in_func](https://developer.apple.com/documentation/kernel/sf_connect_in_func)

# sf_connect_in_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*sf_connect_in_func)(void *cookie, socket_t so, const struct sockaddr *from);
```

## Parameters

- `cookie`: Cookie value specified when the filter attach was called.
- `so`: The socket the filter is attached to.
- `from`: The address the incoming connection is from.

<a id="return_value"></a>

## Return Value

Return: 0 - The caller will continue with normal processing of the connection. Anything Else - The caller will rejecting the incoming connection.

<a id="discussion"></a>

## Discussion

sf_connect_in_func is called to filter inbound connections. A protocol will call this before accepting an incoming connection and placing it on the queue of completed connections. Warning: This filter is on the data path. Do not spend excesive time. Do not wait for data on another socket.
