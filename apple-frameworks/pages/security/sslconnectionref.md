> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslconnectionref](https://developer.apple.com/documentation/security/sslconnectionref)

# SSLConnectionRef (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A pointer to an opaque I/O connection object.

## Declaration

```swift
typealias SSLConnectionRef = UnsafeRawPointer
```

<a id="Discussion"></a>

## Discussion

The I/O connection object refers to data that identifies a connection. The connection data is opaque to Secure Transport; you can set it to any value that your application can use in the callback functions [SSLReadFunc](sslreadfunc.md) and [SSLWriteFunc](sslwritefunc.md) to uniquely identify the connection, such as a socket or endpoint. Use the [SSLSetConnection(\_:\_:)](sslsetconnection%28____%29.md) function to assign a value to the connection object.

# SSLConnectionRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pointer to an opaque I/O connection object.

## Declaration

```objectivec
typedef const void * SSLConnectionRef;
```

<a id="Discussion"></a>

## Discussion

The I/O connection object refers to data that identifies a connection. The connection data is opaque to Secure Transport; you can set it to any value that your application can use in the callback functions [SSLReadFunc](sslreadfunc.md) and [SSLWriteFunc](sslwritefunc.md) to uniquely identify the connection, such as a socket or endpoint. Use the [SSLSetConnection](sslsetconnection%28____%29.md) function to assign a value to the connection object.
