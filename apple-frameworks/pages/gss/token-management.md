> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/token-management](https://developer.apple.com/documentation/gss/token-management)

# Token Management (Swift)

**Framework:** GSS  
**Kind:** API Collection

Establish secure communication with tokens.

<a id="overview"></a>

## Overview

The basic unit of currency in the GSS-API is the token. Applications using the GSS-API communicate with each other by using tokens, both for exchanging data and for making security arrangements. Tokens are declared as [gss_buffer_t](gss_buffer_t.md) data types and are opaque to applications.

## Topics

### Buffer Flags

- [GSS_IOV_BUFFER_FLAG_ALLOCATE](gss_iov_buffer_flag_allocate.md): GSS should perform the allocation.
- [GSS_IOV_BUFFER_FLAG_ALLOCATED](gss_iov_buffer_flag_allocated.md): The caller should free the buffer.
- [GSS_IOV_BUFFER_TYPE_DATA](gss_iov_buffer_type_data.md): The buffer type is packet data.
- [GSS_IOV_BUFFER_TYPE_EMPTY](gss_iov_buffer_type_empty.md): The buffer type is empty.
- [GSS_IOV_BUFFER_TYPE_FLAG_ALLOCATE](gss_iov_buffer_type_flag_allocate.md): GSS should perform the allocation.
- [GSS_IOV_BUFFER_TYPE_FLAG_ALLOCATED](gss_iov_buffer_type_flag_allocated.md): The caller should free the buffer.
- [GSS_IOV_BUFFER_TYPE_FLAG_MASK](gss_iov_buffer_type_flag_mask.md): The buffer type is a flag mask.
- [GSS_IOV_BUFFER_TYPE_HEADER](gss_iov_buffer_type_header.md): The buffer type is a mechanism header.
- [GSS_IOV_BUFFER_TYPE_MECH_PARAMS](gss_iov_buffer_type_mech_params.md): The buffer contains mechanism-specific parameters.
- [GSS_IOV_BUFFER_TYPE_PADDING](gss_iov_buffer_type_padding.md): The buffer contains padding.
- [GSS_IOV_BUFFER_TYPE_SIGN_ONLY](gss_iov_buffer_type_sign_only.md): The buffer contains sign-only packet data.
- [GSS_IOV_BUFFER_TYPE_STREAM](gss_iov_buffer_type_stream.md): The buffer contains a complete wrap token.
- [GSS_IOV_BUFFER_TYPE_TRAILER](gss_iov_buffer_type_trailer.md): The buffer contains a mechanism trailer.

### Encapsulation and Decapsulation

Transfer tokens between peers by encapsulating and decapsulating them.

- [gss_encapsulate_token(\_:\_:\_:)](gss_encapsulate_token%28______%29.md): Returns a buffer encapsulating the given token.
- [gss_decapsulate_token(\_:\_:\_:)](gss_decapsulate_token%28______%29.md): Returns a token encapsulated in a buffer.

## See Also

### Messages

- [Message Protection](message-protection.md): Provide cryptographic protection to secure message integrity.
- [Kerberos Implementation](kerberos-implementation.md): Establish secure connections using the Kerberos implementation of GSS-API.

# Token Management (Objective-C)

**Framework:** GSS  
**Kind:** API Collection

Establish secure communication with tokens.

<a id="overview"></a>

## Overview

The basic unit of currency in the GSS-API is the token. Applications using the GSS-API communicate with each other by using tokens, both for exchanging data and for making security arrangements. Tokens are declared as [gss_buffer_t](gss_buffer_t.md) data types and are opaque to applications.

## Topics

### Buffer Flags

- [GSS_IOV_BUFFER_FLAG_ALLOCATE](gss_iov_buffer_flag_allocate.md): GSS should perform the allocation.
- [GSS_IOV_BUFFER_FLAG_ALLOCATED](gss_iov_buffer_flag_allocated.md): The caller should free the buffer.
- [GSS_IOV_BUFFER_TYPE_DATA](gss_iov_buffer_type_data.md): The buffer type is packet data.
- [GSS_IOV_BUFFER_TYPE_EMPTY](gss_iov_buffer_type_empty.md): The buffer type is empty.
- [GSS_IOV_BUFFER_TYPE_FLAG_ALLOCATE](gss_iov_buffer_type_flag_allocate.md): GSS should perform the allocation.
- [GSS_IOV_BUFFER_TYPE_FLAG_ALLOCATED](gss_iov_buffer_type_flag_allocated.md): The caller should free the buffer.
- [GSS_IOV_BUFFER_TYPE_FLAG_MASK](gss_iov_buffer_type_flag_mask.md): The buffer type is a flag mask.
- [GSS_IOV_BUFFER_TYPE_HEADER](gss_iov_buffer_type_header.md): The buffer type is a mechanism header.
- [GSS_IOV_BUFFER_TYPE_MECH_PARAMS](gss_iov_buffer_type_mech_params.md): The buffer contains mechanism-specific parameters.
- [GSS_IOV_BUFFER_TYPE_PADDING](gss_iov_buffer_type_padding.md): The buffer contains padding.
- [GSS_IOV_BUFFER_TYPE_SIGN_ONLY](gss_iov_buffer_type_sign_only.md): The buffer contains sign-only packet data.
- [GSS_IOV_BUFFER_TYPE_STREAM](gss_iov_buffer_type_stream.md): The buffer contains a complete wrap token.
- [GSS_IOV_BUFFER_TYPE_TRAILER](gss_iov_buffer_type_trailer.md): The buffer contains a mechanism trailer.

### Encapsulation and Decapsulation

Transfer tokens between peers by encapsulating and decapsulating them.

- [gss_encapsulate_token](gss_encapsulate_token%28______%29.md): Returns a buffer encapsulating the given token.
- [gss_decapsulate_token](gss_decapsulate_token%28______%29.md): Returns a token encapsulated in a buffer.

## See Also

### Messages

- [Message Protection](message-protection.md): Provide cryptographic protection to secure message integrity.
- [Kerberos Implementation](kerberos-implementation.md): Establish secure connections using the Kerberos implementation of GSS-API.
