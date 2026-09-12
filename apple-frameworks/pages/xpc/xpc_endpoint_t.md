> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_endpoint_t](https://developer.apple.com/documentation/xpc/xpc_endpoint_t)

# xpc_endpoint_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that represents a connection in serialized form.

## Declaration

```swift
typealias xpc_endpoint_t = xpc_object_t
```

<a id="Discussion"></a>

## Discussion

Unlike a connection, an endpoint is an inert object that doesn’t have any associated runtime activity. So, it is safe to pass an endpoint in a message. Upon receiving an endpoint, the recipient can use [xpc_connection_create_from_endpoint(\_:)](xpc_connection_create_from_endpoint%28__%29.md) to create as many distinct connections as necessary.

## See Also

### Endpoints

- [xpc_endpoint_create(\_:)](xpc_endpoint_create%28__%29.md): Creates a new endpoint from a connection that is suitable for embedding into messages.

# xpc_endpoint_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that represents a connection in serialized form.

## Declaration

```objectivec
typedef xpc_object_t xpc_endpoint_t;
```

<a id="Discussion"></a>

## Discussion

Unlike a connection, an endpoint is an inert object that doesn’t have any associated runtime activity. So, it is safe to pass an endpoint in a message. Upon receiving an endpoint, the recipient can use [xpc_connection_create_from_endpoint](xpc_connection_create_from_endpoint%28__%29.md) to create as many distinct connections as necessary.

## See Also

### Endpoints

- [xpc_endpoint_create](xpc_endpoint_create%28__%29.md): Creates a new endpoint from a connection that is suitable for embedding into messages.
