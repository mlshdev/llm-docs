> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/function-status](https://developer.apple.com/documentation/gss/function-status)

# Function Status (Swift)

**Framework:** GSS  
**Kind:** API Collection

Evaluate return values that most GSS-API functions use to indicate the outcome of an operation.

<a id="overview"></a>

## Overview

The functions of the GSS-API return two status codes. The major status code, delivered as the function’s return value, provides a mechanism-independent status output. A value of [GSS_S_COMPLETE](gss_s_complete.md) typically indicates success, but the code is actually composed of several fields that enable communicating a more nuanced result.  Always check the major status code to determine if an operation succeeds.

The minor status code provides additional information, often mechanism-specific, when an operation fails. This result returns using the [OM_uint32](om_uint32.md) pointer given as the function’s first argument. Examine this value to further debug a problem. For example, many functions allocate memory as a side effect of their main task. If memory allocation fails, the entire operation fails. But while the major status indicates a generic problem, a minor status of `ENOMEM` indicates that failed memory allocation is the exact culprit.

Three bitfields bundled together make up major status codes in a single [OM_uint32](om_uint32.md) value. These fields are:

- **The calling error**: A generic GSS-API error in the most significant 8 bits.
- **The routine error**: An error specific to the routine in the next 8 bits.
- **Supplementary Information**: Additional information about the error in the lower 16 bits.

When a function successfully runs to completion, it returns zero for all of these fields. As a convenience, you can compare the result directly with the status code [GSS_S_COMPLETE](gss_s_complete.md) to test for this condition.

![Diagram of the three bitfields that make up the status codes in a value: the 8 bit calling error, the 8 bit routine error, and the 16 bit supplementary information.](https://developer.apple.com/images/com.apple.gss/media-3402053@2x.png)

For any other result, use one of the available extraction macros (such as [GSS_CALLING_ERROR](gss_calling_error.md)) to obtain a value that you compare against one of the known error codes. For example, you can test for a failure to read one of the function inputs as follows:

```objc
OM_uint32 major = <# Some GSS call #>
if (GSS_CALLING_ERROR(major) == GSS_S_CALL_INACCESSIBLE_READ) {
    // Handle the error
}
```

Use the [gss_display_status(\_:\_:\_:\_:\_:\_:)](gss_display_status%28____________%29.md) function to retrieve a human readable string corresponding to a given status result.

## Topics

### Status and Error Creation

- [OM_uint32](om_uint32.md): A 32-bit unsigned integer.
- [OM_uint64](om_uint64.md): A 64-bit unsigned integer.
- [gss_uint32](gss_uint32.md): A 32-bit unsigned integer.
- [gss_status_id_t](gss_status_id_t.md): A pointer to a status result.
- [GSS_C_MECH_CODE](gss_c_mech_code.md): A flag that indicates the status code comes from a call to an underlying mechanism, such as Kerberos.
- [GSS_C_GSS_CODE](gss_c_gss_code.md): A flag that indicates the named status code comes from a GSS-API call.
- [GSS_S_COMPLETE](gss_s_complete.md): The operation completed without error.
- [gss_display_status(\_:\_:\_:\_:\_:\_:)](gss_display_status%28____________%29.md): Returns a human readable string for a status code.
- [GSSCreateError(\_:\_:\_:)](gsscreateerror%28______%29.md): Returns an error object based on GSS-API major and minor status codes.

### Calling Errors

- [GSS_S_CALL_BAD_STRUCTURE](gss_s_call_bad_structure.md): Improperly formatted parameter.
- [GSS_S_CALL_INACCESSIBLE_READ](gss_s_call_inaccessible_read.md): A required input parameter could not be read.
- [GSS_S_CALL_INACCESSIBLE_WRITE](gss_s_call_inaccessible_write.md): A required output parameter failed to write.

### Routine Errors

- [GSS_S_BAD_MECH](gss_s_bad_mech.md): Unsupported mechanism.
- [GSS_S_BAD_NAME](gss_s_bad_name.md): Invalid name.
- [GSS_S_BAD_NAMETYPE](gss_s_bad_nametype.md): Unsupported name type.
- [GSS_S_BAD_MIC](gss_s_bad_mic.md): Failed token integrity check.
- [GSS_S_BAD_SIG](gss_s_bad_sig.md): Failed token integrity check.
- [GSS_S_BAD_STATUS](gss_s_bad_status.md): Invalid status selector.
- [GSS_S_BAD_BINDINGS](gss_s_bad_bindings.md): Channel bindings mismatch.
- [GSS_S_NO_CRED](gss_s_no_cred.md): No valid credentials.
- [GSS_S_NO_CONTEXT](gss_s_no_context.md): No valid security context.
- [GSS_S_DEFECTIVE_TOKEN](gss_s_defective_token.md): Defective token.
- [GSS_S_DEFECTIVE_CREDENTIAL](gss_s_defective_credential.md): Defective credential.
- [GSS_S_CREDENTIALS_EXPIRED](gss_s_credentials_expired.md): Expired credential.
- [GSS_S_CONTEXT_EXPIRED](gss_s_context_expired.md): Expired context.
- [GSS_S_FAILURE](gss_s_failure.md): An unspecified error.
- [GSS_S_BAD_QOP](gss_s_bad_qop.md): Unsupported QOP value.
- [GSS_S_UNAUTHORIZED](gss_s_unauthorized.md): Unauthorized operation.
- [GSS_S_UNAVAILABLE](gss_s_unavailable.md): Unavailable operation.
- [GSS_S_DUPLICATE_ELEMENT](gss_s_duplicate_element.md): A duplicate credential element requested.
- [GSS_S_NAME_NOT_MN](gss_s_name_not_mn.md): The name contains multimechanism elements.
- [GSS_S_BAD_MECH_ATTR](gss_s_bad_mech_attr.md): Unknown mechanism attribute.
- [GSS_S_CRED_UNAVAIL](gss_s_cred_unavail.md): Unavailable credential.

### Masks and Offsets

- [GSS_C_CALLING_ERROR_MASK](gss_c_calling_error_mask.md): A mask with a width that matches the calling error field.
- [GSS_C_CALLING_ERROR_OFFSET](gss_c_calling_error_offset.md): The offset of the calling error field within the major status code.
- [GSS_C_ROUTINE_ERROR_MASK](gss_c_routine_error_mask.md): A mask with a width that matches the routine error field.
- [GSS_C_ROUTINE_ERROR_OFFSET](gss_c_routine_error_offset.md): The offset of the routine error field within the major status code.
- [GSS_C_SUPPLEMENTARY_MASK](gss_c_supplementary_mask.md): A mask with a width that matches the supplementary information field.
- [GSS_C_SUPPLEMENTARY_OFFSET](gss_c_supplementary_offset.md): The offset of the supplementary information field within the major status code.

## See Also

### Memory and Context

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md): Manage memory and object lifetimes.
- [Buffer Management](buffer-management.md): Allocate and deallocate buffers with structures that hold a variety of data.
- [Context Services](context-services.md): Use context services to manage secure operations between endpoints.

# Function Status (Objective-C)

**Framework:** GSS  
**Kind:** API Collection

Evaluate return values that most GSS-API functions use to indicate the outcome of an operation.

<a id="overview"></a>

## Overview

The functions of the GSS-API return two status codes. The major status code, delivered as the function’s return value, provides a mechanism-independent status output. A value of [GSS_S_COMPLETE](gss_s_complete.md) typically indicates success, but the code is actually composed of several fields that enable communicating a more nuanced result.  Always check the major status code to determine if an operation succeeds.

The minor status code provides additional information, often mechanism-specific, when an operation fails. This result returns using the [OM_uint32](om_uint32.md) pointer given as the function’s first argument. Examine this value to further debug a problem. For example, many functions allocate memory as a side effect of their main task. If memory allocation fails, the entire operation fails. But while the major status indicates a generic problem, a minor status of `ENOMEM` indicates that failed memory allocation is the exact culprit.

Three bitfields bundled together make up major status codes in a single [OM_uint32](om_uint32.md) value. These fields are:

- **The calling error**: A generic GSS-API error in the most significant 8 bits.
- **The routine error**: An error specific to the routine in the next 8 bits.
- **Supplementary Information**: Additional information about the error in the lower 16 bits.

When a function successfully runs to completion, it returns zero for all of these fields. As a convenience, you can compare the result directly with the status code [GSS_S_COMPLETE](gss_s_complete.md) to test for this condition.

![Diagram of the three bitfields that make up the status codes in a value: the 8 bit calling error, the 8 bit routine error, and the 16 bit supplementary information.](https://developer.apple.com/images/com.apple.gss/media-3402053@2x.png)

For any other result, use one of the available extraction macros (such as [GSS_CALLING_ERROR](gss_calling_error.md)) to obtain a value that you compare against one of the known error codes. For example, you can test for a failure to read one of the function inputs as follows:

```objc
OM_uint32 major = <# Some GSS call #>
if (GSS_CALLING_ERROR(major) == GSS_S_CALL_INACCESSIBLE_READ) {
    // Handle the error
}
```

Use the [gss_display_status](gss_display_status%28____________%29.md) function to retrieve a human readable string corresponding to a given status result.

## Topics

### Status and Error Creation

- [OM_uint32](om_uint32.md): A 32-bit unsigned integer.
- [OM_uint64](om_uint64.md): A 64-bit unsigned integer.
- [gss_uint32](gss_uint32.md): A 32-bit unsigned integer.
- [gss_status_id_t](gss_status_id_t.md): A pointer to a status result.
- [GSS_C_MECH_CODE](gss_c_mech_code.md): A flag that indicates the status code comes from a call to an underlying mechanism, such as Kerberos.
- [GSS_C_GSS_CODE](gss_c_gss_code.md): A flag that indicates the named status code comes from a GSS-API call.
- [GSS_S_COMPLETE](gss_s_complete.md): The operation completed without error.
- [gss_display_status](gss_display_status%28____________%29.md): Returns a human readable string for a status code.
- [GSSCreateError](gsscreateerror%28______%29.md): Returns an error object based on GSS-API major and minor status codes.

### Calling Errors

- [GSS_S_CALL_BAD_STRUCTURE](gss_s_call_bad_structure.md): Improperly formatted parameter.
- [GSS_S_CALL_INACCESSIBLE_READ](gss_s_call_inaccessible_read.md): A required input parameter could not be read.
- [GSS_S_CALL_INACCESSIBLE_WRITE](gss_s_call_inaccessible_write.md): A required output parameter failed to write.

### Routine Errors

- [GSS_S_BAD_MECH](gss_s_bad_mech.md): Unsupported mechanism.
- [GSS_S_BAD_NAME](gss_s_bad_name.md): Invalid name.
- [GSS_S_BAD_NAMETYPE](gss_s_bad_nametype.md): Unsupported name type.
- [GSS_S_BAD_MIC](gss_s_bad_mic.md): Failed token integrity check.
- [GSS_S_BAD_SIG](gss_s_bad_sig.md): Failed token integrity check.
- [GSS_S_BAD_STATUS](gss_s_bad_status.md): Invalid status selector.
- [GSS_S_BAD_BINDINGS](gss_s_bad_bindings.md): Channel bindings mismatch.
- [GSS_S_NO_CRED](gss_s_no_cred.md): No valid credentials.
- [GSS_S_NO_CONTEXT](gss_s_no_context.md): No valid security context.
- [GSS_S_DEFECTIVE_TOKEN](gss_s_defective_token.md): Defective token.
- [GSS_S_DEFECTIVE_CREDENTIAL](gss_s_defective_credential.md): Defective credential.
- [GSS_S_CREDENTIALS_EXPIRED](gss_s_credentials_expired.md): Expired credential.
- [GSS_S_CONTEXT_EXPIRED](gss_s_context_expired.md): Expired context.
- [GSS_S_FAILURE](gss_s_failure.md): An unspecified error.
- [GSS_S_BAD_QOP](gss_s_bad_qop.md): Unsupported QOP value.
- [GSS_S_UNAUTHORIZED](gss_s_unauthorized.md): Unauthorized operation.
- [GSS_S_UNAVAILABLE](gss_s_unavailable.md): Unavailable operation.
- [GSS_S_DUPLICATE_ELEMENT](gss_s_duplicate_element.md): A duplicate credential element requested.
- [GSS_S_NAME_NOT_MN](gss_s_name_not_mn.md): The name contains multimechanism elements.
- [GSS_S_BAD_MECH_ATTR](gss_s_bad_mech_attr.md): Unknown mechanism attribute.
- [GSS_S_CRED_UNAVAIL](gss_s_cred_unavail.md): Unavailable credential.

### Token Macros

- [GSS_S_CONTINUE_NEEDED](gss_s_continue_needed.md): A request for continuation during context establishment.
- [GSS_S_DUPLICATE_TOKEN](gss_s_duplicate_token.md): The detection of a duplicate per-message token.
- [GSS_S_OLD_TOKEN](gss_s_old_token.md): The detection of a timed-out per-message token.
- [GSS_S_UNSEQ_TOKEN](gss_s_unseq_token.md): The detection of a reordered (early) per-message token.
- [GSS_S_GAP_TOKEN](gss_s_gap_token.md): The detection of a skipped predecessor token.

### Extraction Macros

- [GSS_ERROR](gss_error.md): A macro that masks the supplementary info out of a major status code, leaving both calling and routine error fields.
- [GSS_CALLING_ERROR](gss_calling_error.md): A macro that masks out all but the calling error field from a major status code.
- [GSS_ROUTINE_ERROR](gss_routine_error.md): A macro that masks out all but the routine error field from a major status code.
- [GSS_SUPPLEMENTARY_INFO](gss_supplementary_info.md): A macro that masks out all but the supplementary information field from a major status code.

### Masks and Offsets

- [GSS_C_CALLING_ERROR_MASK](gss_c_calling_error_mask.md): A mask with a width that matches the calling error field.
- [GSS_C_CALLING_ERROR_OFFSET](gss_c_calling_error_offset.md): The offset of the calling error field within the major status code.
- [GSS_C_ROUTINE_ERROR_MASK](gss_c_routine_error_mask.md): A mask with a width that matches the routine error field.
- [GSS_C_ROUTINE_ERROR_OFFSET](gss_c_routine_error_offset.md): The offset of the routine error field within the major status code.
- [GSS_C_SUPPLEMENTARY_MASK](gss_c_supplementary_mask.md): A mask with a width that matches the supplementary information field.
- [GSS_C_SUPPLEMENTARY_OFFSET](gss_c_supplementary_offset.md): The offset of the supplementary information field within the major status code.

## See Also

### Memory and Context

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md): Manage memory and object lifetimes.
- [Buffer Management](buffer-management.md): Allocate and deallocate buffers with structures that hold a variety of data.
- [Context Services](context-services.md): Use context services to manage secure operations between endpoints.
