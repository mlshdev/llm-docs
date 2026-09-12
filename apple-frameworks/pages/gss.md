> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss](https://developer.apple.com/documentation/gss)

# GSS (Swift)

**Framework:** GSS  
**Kind:** Framework  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

Conduct secure, authenticated network transactions.

<a id="overview"></a>

## Overview

The open source Generic Security Service Application Programming Interface (GSS-API) defines a standardized interface through which the operating system vends secure data transport operations. The GSS framework provides an implementation of the interface and the underlying libraries.

Using GSS-API, you can:

- Create a security context in which data can be passed between applications. A *context* represents a “state of trust” between two applications. Applications that share a context recognize each other and permit data transfers as long as the context lasts.
- Apply one or more types of protection, known as *security services*, to the data to be transmitted. For more on security services, see [Security](security.md).
- Perform data conversion, error-checking, delegation of user privileges, information display, and identity comparison.

See [RFC 2743](https://tools.ietf.org/html/rfc2743) for the definitive description of the GSS-API 2, and [RFC 2744](https://tools.ietf.org/html/rfc2744) for a description of the related C bindings.

## Topics

### Memory and Context

- [Allocating and Releasing Objects](gss/allocating-and-releasing-objects.md): Manage memory and object lifetimes.
- [Function Status](gss/function-status.md): Evaluate return values that most GSS-API functions use to indicate the outcome of an operation.
- [Buffer Management](gss/buffer-management.md): Allocate and deallocate buffers with structures that hold a variety of data.
- [Context Services](gss/context-services.md): Use context services to manage secure operations between endpoints.

### Credentials

- [Credential Management](gss/credential-management.md): Securely establish connections between endpoints.
- [Security Mechanisms](gss/security-mechanisms.md): Provide a security mechanism for your implementation.

### Names and Object Identifiers

- [Name Handling](gss/name-handling.md): Manage names for GSS-API principals such as a person, a machine, or an application.
- [Object Identifiers](gss/object-identifiers.md): Store security mechanisms, QOPs (Quality of Protection values), and name types.

### Messages

- [Token Management](gss/token-management.md): Establish secure communication with tokens.
- [Message Protection](gss/message-protection.md): Provide cryptographic protection to secure message integrity.
- [Kerberos Implementation](gss/kerberos-implementation.md): Establish secure connections using the Kerberos implementation of GSS-API.

# GSS (Objective-C)

**Framework:** GSS  
**Kind:** Framework  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

Conduct secure, authenticated network transactions.

<a id="overview"></a>

## Overview

The open source Generic Security Service Application Programming Interface (GSS-API) defines a standardized interface through which the operating system vends secure data transport operations. The GSS framework provides an implementation of the interface and the underlying libraries.

Using GSS-API, you can:

- Create a security context in which data can be passed between applications. A *context* represents a “state of trust” between two applications. Applications that share a context recognize each other and permit data transfers as long as the context lasts.
- Apply one or more types of protection, known as *security services*, to the data to be transmitted. For more on security services, see [Security](security.md).
- Perform data conversion, error-checking, delegation of user privileges, information display, and identity comparison.

See [RFC 2743](https://tools.ietf.org/html/rfc2743) for the definitive description of the GSS-API 2, and [RFC 2744](https://tools.ietf.org/html/rfc2744) for a description of the related C bindings.

## Topics

### Memory and Context

- [Allocating and Releasing Objects](gss/allocating-and-releasing-objects.md): Manage memory and object lifetimes.
- [Function Status](gss/function-status.md): Evaluate return values that most GSS-API functions use to indicate the outcome of an operation.
- [Buffer Management](gss/buffer-management.md): Allocate and deallocate buffers with structures that hold a variety of data.
- [Context Services](gss/context-services.md): Use context services to manage secure operations between endpoints.

### Credentials

- [Credential Management](gss/credential-management.md): Securely establish connections between endpoints.
- [Security Mechanisms](gss/security-mechanisms.md): Provide a security mechanism for your implementation.

### Names and Object Identifiers

- [Name Handling](gss/name-handling.md): Manage names for GSS-API principals such as a person, a machine, or an application.
- [Object Identifiers](gss/object-identifiers.md): Store security mechanisms, QOPs (Quality of Protection values), and name types.

### Messages

- [Token Management](gss/token-management.md): Establish secure communication with tokens.
- [Message Protection](gss/message-protection.md): Provide cryptographic protection to secure message integrity.
- [Kerberos Implementation](gss/kerberos-implementation.md): Establish secure connections using the Kerberos implementation of GSS-API.

### Structure and macros

- [Structures and macros](gss/structures-and-macros.md)

### Macros

- [GSSAPI_CALLCONV](gss/gssapi_callconv.md)
- [GSSAPI_CPP_END](gss/gssapi_cpp_end.md)
- [GSSAPI_CPP_START](gss/gssapi_cpp_start.md)
- [GSSAPI_LIB_CALL](gss/gssapi_lib_call.md)
- [GSSAPI_LIB_FUNCTION](gss/gssapi_lib_function.md)
- [GSSAPI_LIB_VARIABLE](gss/gssapi_lib_variable.md)
- [GSS_LIB_CALL](gss/gss_lib_call.md)
- [GSS_LIB_FUNCTION](gss/gss_lib_function.md)
- [GSS_LIB_VARIABLE](gss/gss_lib_variable.md)
