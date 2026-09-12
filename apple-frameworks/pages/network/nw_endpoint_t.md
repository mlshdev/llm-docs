> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_endpoint_t](https://developer.apple.com/documentation/network/nw_endpoint_t)

# nw_endpoint_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A local or remote endpoint in a network connection.

## Declaration

```swift
typealias nw_endpoint_t = any OS_nw_endpoint
```

## Topics

### Endpoint Types

- [nw_endpoint_type_t](nw_endpoint_type_t.md): The type of a network endpoint, such as a host or a service.
- [nw_endpoint_get_type(\_:)](nw_endpoint_get_type%28__%29.md): Accesses the type of a endpoint.

### Host Endpoints

- [nw_endpoint_create_host(\_:\_:)](nw_endpoint_create_host%28____%29.md): Creates a network endpoint with a hostname and port, where the hostname may be interpreted as an IP address.
- [nw_endpoint_get_hostname(\_:)](nw_endpoint_get_hostname%28__%29.md): Accesses the hostname stored in an endpoint.
- [nw_endpoint_get_port(\_:)](nw_endpoint_get_port%28__%29.md): Accesses the port stored in an endpoint, in host-byte order.
- [nw_endpoint_copy_port_string(\_:)](nw_endpoint_copy_port_string%28__%29.md): Copies the port of an endpoint as a string.

### Address Endpoints

- [nw_endpoint_create_address(\_:)](nw_endpoint_create_address%28__%29.md): Creates a network endpoint with an address structure.
- [nw_endpoint_get_address(\_:)](nw_endpoint_get_address%28__%29.md): Accesses the address structure stored in an address endpoint.
- [nw_endpoint_copy_address_string(\_:)](nw_endpoint_copy_address_string%28__%29.md): Copies the address of an endpoint as a string.
- [nw_endpoint_copy_port_string(\_:)](nw_endpoint_copy_port_string%28__%29.md): Copies the port of an endpoint as a string.

### Bonjour Service Endpoints

- [nw_endpoint_create_bonjour_service(\_:\_:\_:)](nw_endpoint_create_bonjour_service%28______%29.md): Creates a network endpoint with a Bonjour service name, type, and domain.
- [nw_endpoint_get_bonjour_service_name(\_:)](nw_endpoint_get_bonjour_service_name%28__%29.md): Accesses the Bonjour service name stored in an endpoint.
- [nw_endpoint_get_bonjour_service_type(\_:)](nw_endpoint_get_bonjour_service_type%28__%29.md): Accesses the Bonjour service type stored in an endpoint.
- [nw_endpoint_get_bonjour_service_domain(\_:)](nw_endpoint_get_bonjour_service_domain%28__%29.md): Accesses the Bonjour service domain stored in an endpoint.

### URL Endpoints

- [nw_endpoint_create_url(\_:)](nw_endpoint_create_url%28__%29.md): Creates a network endpoint with a URL string.
- [nw_endpoint_get_url(\_:)](nw_endpoint_get_url%28__%29.md): Accesses the URL string stored in an endpoint.

# nw_endpoint_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A local or remote endpoint in a network connection.

## Declaration

```objectivec
typedef NSObject<OS_nw_endpoint> * nw_endpoint_t;
```

## Topics

### Endpoint Types

- [nw_endpoint_type_t](nw_endpoint_type_t.md): The type of a network endpoint, such as a host or a service.
- [nw_endpoint_get_type](nw_endpoint_get_type%28__%29.md): Accesses the type of a endpoint.

### Host Endpoints

- [nw_endpoint_create_host](nw_endpoint_create_host%28____%29.md): Creates a network endpoint with a hostname and port, where the hostname may be interpreted as an IP address.
- [nw_endpoint_get_hostname](nw_endpoint_get_hostname%28__%29.md): Accesses the hostname stored in an endpoint.
- [nw_endpoint_get_port](nw_endpoint_get_port%28__%29.md): Accesses the port stored in an endpoint, in host-byte order.
- [nw_endpoint_copy_port_string](nw_endpoint_copy_port_string%28__%29.md): Copies the port of an endpoint as a string.

### Address Endpoints

- [nw_endpoint_create_address](nw_endpoint_create_address%28__%29.md): Creates a network endpoint with an address structure.
- [nw_endpoint_get_address](nw_endpoint_get_address%28__%29.md): Accesses the address structure stored in an address endpoint.
- [nw_endpoint_copy_address_string](nw_endpoint_copy_address_string%28__%29.md): Copies the address of an endpoint as a string.
- [nw_endpoint_copy_port_string](nw_endpoint_copy_port_string%28__%29.md): Copies the port of an endpoint as a string.

### Bonjour Service Endpoints

- [nw_endpoint_create_bonjour_service](nw_endpoint_create_bonjour_service%28______%29.md): Creates a network endpoint with a Bonjour service name, type, and domain.
- [nw_endpoint_get_bonjour_service_name](nw_endpoint_get_bonjour_service_name%28__%29.md): Accesses the Bonjour service name stored in an endpoint.
- [nw_endpoint_get_bonjour_service_type](nw_endpoint_get_bonjour_service_type%28__%29.md): Accesses the Bonjour service type stored in an endpoint.
- [nw_endpoint_get_bonjour_service_domain](nw_endpoint_get_bonjour_service_domain%28__%29.md): Accesses the Bonjour service domain stored in an endpoint.

### URL Endpoints

- [nw_endpoint_create_url](nw_endpoint_create_url%28__%29.md): Creates a network endpoint with a URL string.
- [nw_endpoint_get_url](nw_endpoint_get_url%28__%29.md): Accesses the URL string stored in an endpoint.

## See Also

### Essentials

- [nw_parameters_t](nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
