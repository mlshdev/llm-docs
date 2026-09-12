> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/context-services](https://developer.apple.com/documentation/gss/context-services)

# Context Services (Swift)

**Framework:** GSS  
**Kind:** API Collection

Use context services to manage secure operations between endpoints.

<a id="overview"></a>

## Overview

You use these flags as input to [gss_init_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_init_sec_context%28__________________________%29.md) to request certain context services. You also receive them as output from both that function and [gss_accept_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_accept_sec_context%28______________________%29.md), indicating which services are actually engaged. Requesting a service does not guarantee its availability.

Because these flags represent the bits of an integer, you combine them with a bitwise `OR` and pull them apart using bitwise `AND`, as shown below.

```objc
OM_uint32 req_flags = GSS_C_DELEG_FLAG | GSS_C_MUTUAL_FLAG;
OM_uint32 ret_flags = 0;
//
// Call gss_init_sec_context() with req_flags; get ret_flags back
//
BOOL deleg  = (ret_flags & GSS_C_DELEG_FLAG)  ? YES : NO;
BOOL mutual = (ret_flags & GSS_C_MUTUAL_FLAG) ? YES : NO;
```

## Topics

### Flags

- [GSS_C_DELEG_FLAG](gss_c_deleg_flag.md): A flag that permits delegation of the initiator’s credentials by the acceptor.
- [GSS_C_MUTUAL_FLAG](gss_c_mutual_flag.md): A flag that authenticates the credentials of both initiator and acceptor.
- [GSS_C_REPLAY_FLAG](gss_c_replay_flag.md): A flag that detects repeated messages.
- [GSS_C_SEQUENCE_FLAG](gss_c_sequence_flag.md): A flag that detects out of sequence messages.
- [GSS_C_CONF_FLAG](gss_c_conf_flag.md): A flag that makes confidentiality services (that is, encryption) available for transferred messages.
- [GSS_C_INTEG_FLAG](gss_c_integ_flag.md): A flag that makes integrity services (that is, cryptographic signatures) available for transferred messages.
- [GSS_C_ANON_FLAG](gss_c_anon_flag.md): A flag that ensures the initiator remains anonymous to the acceptor.
- [GSS_C_PROT_READY_FLAG](gss_c_prot_ready_flag.md): A flag that provides an early indication of the availability of confidentiality and integrity services.
- [GSS_C_TRANS_FLAG](gss_c_trans_flag.md): A flag that indicates that a context can is exportable, for example to transfer it to another process on the same machine.
- [GSS_C_DCE_STYLE](gss_c_dce_style.md): A flag that causes an extra AP reply to be sent from the client back to the server after receiving the server’s AP reply.
- [GSS_C_IDENTIFY_FLAG](gss_c_identify_flag.md): A flag that indicates identification of the client by name and ID only.
- [GSS_C_EXTENDED_ERROR_FLAG](gss_c_extended_error_flag.md): A flag that indicates that the client wants to be informed of extended error information.
- [GSS_C_DELEG_POLICY_FLAG](gss_c_deleg_policy_flag.md): A flag that indicates delegation is permissible if the mechanism policy allows it.

### Address Families

The constant definitions for channel-binding address families.

- [GSS_C_AF_NS](gss_c_af_ns.md): The Xerox NS address type.
- [GSS_C_AF_BSC](gss_c_af_bsc.md): The BISYNC 2780/3780 address type.
- [GSS_C_AF_DLI](gss_c_af_dli.md): The direct data link interface address type.
- [GSS_C_AF_DSS](gss_c_af_dss.md): The distributed system services address type.
- [GSS_C_AF_LAT](gss_c_af_lat.md): The LAT address type.
- [GSS_C_AF_NBS](gss_c_af_nbs.md): The nbs address type.
- [GSS_C_AF_OSI](gss_c_af_osi.md): The OSI TP4 address type.
- [GSS_C_AF_PUP](gss_c_af_pup.md): The PUP protocols (for example, BSP) address type.
- [GSS_C_AF_SNA](gss_c_af_sna.md): The IBM SNA address type.
- [GSS_C_AF_X25](gss_c_af_x25.md): The X.25 address type.
- [GSS_C_AF_ECMA](gss_c_af_ecma.md): The ECMA address type.
- [GSS_C_AF_INET](gss_c_af_inet.md): The Internet (for example, IP) address type.
- [GSS_C_AF_CCITT](gss_c_af_ccitt.md): The CCITT protocols address type.
- [GSS_C_AF_CHAOS](gss_c_af_chaos.md): The MIT CHAOS protocol address type.
- [GSS_C_AF_INET6](gss_c_af_inet6.md): The IPv6 address type.
- [GSS_C_AF_LOCAL](gss_c_af_local.md): The host-local address type.
- [GSS_C_AF_DECnet](gss_c_af_decnet.md): The DECnet address type.
- [GSS_C_AF_HYLINK](gss_c_af_hylink.md): The NSC Hyperchannel address type.
- [GSS_C_AF_UNSPEC](gss_c_af_unspec.md): The unspecified address type.
- [GSS_C_AF_DATAKIT](gss_c_af_datakit.md): The datakit protocols address type.
- [GSS_C_AF_IMPLINK](gss_c_af_implink.md): ARPAnet IMP address type.
- [GSS_C_AF_NULLADDR](gss_c_af_nulladdr.md): No address specified.
- [GSS_C_AF_APPLETALK](gss_c_af_appletalk.md): The AppleTalk address type.

### Apple Source App Keys

The keys used in the dictionary specified by the [kGSSICAppleSourceApp](kgssicapplesourceapp.md) key.

- [kGSSICAppleSourceAppPID](kgssicapplesourceapppid.md): A number that indicates the process ID of the app.
- [kGSSICAppleSourceAppAuditToken](kgssicapplesourceappaudittoken.md): The audit token of the app’s process.
- [kGSSICAppleSourceAppSigningIdentity](kgssicapplesourceappsigningidentity.md): The bundle signing identity of the app.

### Channel Bindings

- [gss_ctx_id_t](gss_ctx_id_t.md): A pointer to an opaque type that you use to communicate context pointers with GSS-API functions.
- [gss_channel_bindings_struct](gss_channel_bindings_struct.md): The structure defining a channel bindings descriptor that specifies the communications channel used to carry a context.
- [gss_channel_bindings_t](gss_channel_bindings_t.md): A pointer to a channel bindings descriptor that specifies the communications channel used to carry a context.
- [gss_const_channel_bindings_t](gss_const_channel_bindings_t.md): A pointer to an immutable channel bindings descriptor that you use to specify the communications channel used to carry a context.

### Creation and Deletion

- [gss_init_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_delete_sec_context(\_:\_:\_:)](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_process_context_token(\_:\_:\_:)](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.
- [gss_set_sec_context_option(\_:\_:\_:\_:)](gss_set_sec_context_option%28________%29.md): Sets an option on a context.

### Inquiry and Limits

- [gss_context_time(\_:\_:\_:)](gss_context_time%28______%29.md): Returns the amount of time remaining before a context expires.
- [gss_inquire_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_inquire_context%28__________________%29.md): Returns information about a security context.
- [gss_inquire_sec_context_by_oid(\_:\_:\_:\_:)](gss_inquire_sec_context_by_oid%28________%29.md): Returns information about a particular part of a context.
- [gss_wrap_size_limit(\_:\_:\_:\_:\_:\_:)](gss_wrap_size_limit%28____________%29.md): Returns the largest allowable wrap size for a given set of constraints.

### Import and Export

- [gss_export_sec_context(\_:\_:\_:)](gss_export_sec_context%28______%29.md): Transfers a security context to another process.
- [gss_import_sec_context(\_:\_:\_:)](gss_import_sec_context%28______%29.md): Imports a security context from another process.

## See Also

### Memory and Context

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md): Manage memory and object lifetimes.
- [Function Status](function-status.md): Evaluate return values that most GSS-API functions use to indicate the outcome of an operation.
- [Buffer Management](buffer-management.md): Allocate and deallocate buffers with structures that hold a variety of data.

# Context Services (Objective-C)

**Framework:** GSS  
**Kind:** API Collection

Use context services to manage secure operations between endpoints.

<a id="overview"></a>

## Overview

You use these flags as input to [gss_init_sec_context](gss_init_sec_context%28__________________________%29.md) to request certain context services. You also receive them as output from both that function and [gss_accept_sec_context](gss_accept_sec_context%28______________________%29.md), indicating which services are actually engaged. Requesting a service does not guarantee its availability.

Because these flags represent the bits of an integer, you combine them with a bitwise `OR` and pull them apart using bitwise `AND`, as shown below.

```objc
OM_uint32 req_flags = GSS_C_DELEG_FLAG | GSS_C_MUTUAL_FLAG;
OM_uint32 ret_flags = 0;
//
// Call gss_init_sec_context() with req_flags; get ret_flags back
//
BOOL deleg  = (ret_flags & GSS_C_DELEG_FLAG)  ? YES : NO;
BOOL mutual = (ret_flags & GSS_C_MUTUAL_FLAG) ? YES : NO;
```

## Topics

### Flags

- [GSS_C_DELEG_FLAG](gss_c_deleg_flag.md): A flag that permits delegation of the initiator’s credentials by the acceptor.
- [GSS_C_MUTUAL_FLAG](gss_c_mutual_flag.md): A flag that authenticates the credentials of both initiator and acceptor.
- [GSS_C_REPLAY_FLAG](gss_c_replay_flag.md): A flag that detects repeated messages.
- [GSS_C_SEQUENCE_FLAG](gss_c_sequence_flag.md): A flag that detects out of sequence messages.
- [GSS_C_CONF_FLAG](gss_c_conf_flag.md): A flag that makes confidentiality services (that is, encryption) available for transferred messages.
- [GSS_C_INTEG_FLAG](gss_c_integ_flag.md): A flag that makes integrity services (that is, cryptographic signatures) available for transferred messages.
- [GSS_C_ANON_FLAG](gss_c_anon_flag.md): A flag that ensures the initiator remains anonymous to the acceptor.
- [GSS_C_PROT_READY_FLAG](gss_c_prot_ready_flag.md): A flag that provides an early indication of the availability of confidentiality and integrity services.
- [GSS_C_TRANS_FLAG](gss_c_trans_flag.md): A flag that indicates that a context can is exportable, for example to transfer it to another process on the same machine.
- [GSS_C_DCE_STYLE](gss_c_dce_style.md): A flag that causes an extra AP reply to be sent from the client back to the server after receiving the server’s AP reply.
- [GSS_C_IDENTIFY_FLAG](gss_c_identify_flag.md): A flag that indicates identification of the client by name and ID only.
- [GSS_C_EXTENDED_ERROR_FLAG](gss_c_extended_error_flag.md): A flag that indicates that the client wants to be informed of extended error information.
- [GSS_C_DELEG_POLICY_FLAG](gss_c_deleg_policy_flag.md): A flag that indicates delegation is permissible if the mechanism policy allows it.

### Address Families

The constant definitions for channel-binding address families.

- [GSS_C_AF_NS](gss_c_af_ns.md): The Xerox NS address type.
- [GSS_C_AF_BSC](gss_c_af_bsc.md): The BISYNC 2780/3780 address type.
- [GSS_C_AF_DLI](gss_c_af_dli.md): The direct data link interface address type.
- [GSS_C_AF_DSS](gss_c_af_dss.md): The distributed system services address type.
- [GSS_C_AF_LAT](gss_c_af_lat.md): The LAT address type.
- [GSS_C_AF_NBS](gss_c_af_nbs.md): The nbs address type.
- [GSS_C_AF_OSI](gss_c_af_osi.md): The OSI TP4 address type.
- [GSS_C_AF_PUP](gss_c_af_pup.md): The PUP protocols (for example, BSP) address type.
- [GSS_C_AF_SNA](gss_c_af_sna.md): The IBM SNA address type.
- [GSS_C_AF_X25](gss_c_af_x25.md): The X.25 address type.
- [GSS_C_AF_ECMA](gss_c_af_ecma.md): The ECMA address type.
- [GSS_C_AF_INET](gss_c_af_inet.md): The Internet (for example, IP) address type.
- [GSS_C_AF_CCITT](gss_c_af_ccitt.md): The CCITT protocols address type.
- [GSS_C_AF_CHAOS](gss_c_af_chaos.md): The MIT CHAOS protocol address type.
- [GSS_C_AF_INET6](gss_c_af_inet6.md): The IPv6 address type.
- [GSS_C_AF_LOCAL](gss_c_af_local.md): The host-local address type.
- [GSS_C_AF_DECnet](gss_c_af_decnet.md): The DECnet address type.
- [GSS_C_AF_HYLINK](gss_c_af_hylink.md): The NSC Hyperchannel address type.
- [GSS_C_AF_UNSPEC](gss_c_af_unspec.md): The unspecified address type.
- [GSS_C_AF_DATAKIT](gss_c_af_datakit.md): The datakit protocols address type.
- [GSS_C_AF_IMPLINK](gss_c_af_implink.md): ARPAnet IMP address type.
- [GSS_C_AF_NULLADDR](gss_c_af_nulladdr.md): No address specified.
- [GSS_C_AF_APPLETALK](gss_c_af_appletalk.md): The AppleTalk address type.

### Apple Source App Keys

The keys used in the dictionary specified by the [kGSSICAppleSourceApp](kgssicapplesourceapp.md) key.

- [kGSSICAppleSourceAppPID](kgssicapplesourceapppid.md): A number that indicates the process ID of the app.
- [kGSSICAppleSourceAppAuditToken](kgssicapplesourceappaudittoken.md): The audit token of the app’s process.
- [kGSSICAppleSourceAppSigningIdentity](kgssicapplesourceappsigningidentity.md): The bundle signing identity of the app.

### Channel Bindings

- [GSS_C_NO_CHANNEL_BINDINGS](gss_c_no_channel_bindings.md): Indicates a `NULL` [gss_channel_bindings_t](gss_channel_bindings_t.md) object.
- [GSS_C_NO_CONTEXT](gss_c_no_context.md): A macro that indicates an empty context id object.
- [gss_const_ctx_id_t](gss_const_ctx_id_t.md): A pointer to an immutable opaque type that you use to communicate context pointers with GSS-API functions.
- [gss_ctx_id_t](gss_ctx_id_t.md): A pointer to an opaque type that you use to communicate context pointers with GSS-API functions.
- [gss_channel_bindings_struct](gss_channel_bindings_struct.md): The structure defining a channel bindings descriptor that specifies the communications channel used to carry a context.
- [gss_channel_bindings_t](gss_channel_bindings_t.md): A pointer to a channel bindings descriptor that specifies the communications channel used to carry a context.
- [gss_const_channel_bindings_t](gss_const_channel_bindings_t.md): A pointer to an immutable channel bindings descriptor that you use to specify the communications channel used to carry a context.

### Creation and Deletion

- [gss_init_sec_context](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_delete_sec_context](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_release_cred](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_process_context_token](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.
- [gss_set_sec_context_option](gss_set_sec_context_option%28________%29.md): Sets an option on a context.

### Inquiry and Limits

- [gss_context_time](gss_context_time%28______%29.md): Returns the amount of time remaining before a context expires.
- [gss_inquire_context](gss_inquire_context%28__________________%29.md): Returns information about a security context.
- [gss_inquire_sec_context_by_oid](gss_inquire_sec_context_by_oid%28________%29.md): Returns information about a particular part of a context.
- [gss_wrap_size_limit](gss_wrap_size_limit%28____________%29.md): Returns the largest allowable wrap size for a given set of constraints.

### Import and Export

- [gss_export_sec_context](gss_export_sec_context%28______%29.md): Transfers a security context to another process.
- [gss_import_sec_context](gss_import_sec_context%28______%29.md): Imports a security context from another process.

## See Also

### Memory and Context

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md): Manage memory and object lifetimes.
- [Function Status](function-status.md): Evaluate return values that most GSS-API functions use to indicate the outcome of an operation.
- [Buffer Management](buffer-management.md): Allocate and deallocate buffers with structures that hold a variety of data.
