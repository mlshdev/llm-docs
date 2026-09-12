> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/security-options](https://developer.apple.com/documentation/network/security-options)

# Security Options (Swift)

**Framework:** Network

Configure security options for TLS handshakes.

## Topics

### Configuring TLS Handshake Options

- [sec_protocol_options_t](../security/sec_protocol_options_t.md): A `sec_protocol_options` instance is a container of options for security protocol instances, such as TLS. Protocol options are used to configure security protocols in the network stack. For example, clients may set the maximum and minimum allowed TLS versions through protocol options.
- [OS_sec_protocol_options](../security/os_sec_protocol_options.md): A `sec_protocol_options` instance is a container of options for security protocol instances, such as TLS. Protocol options are used to configure security protocols in the network stack. For example, clients may set the maximum and minimum allowed TLS versions through protocol options.
- [sec_protocol_options_set_tls_server_name(\_:\_:)](../security/sec_protocol_options_set_tls_server_name%28____%29.md)
- [sec_protocol_options_add_pre_shared_key(\_:\_:\_:)](../security/sec_protocol_options_add_pre_shared_key%28______%29.md)
- [sec_protocol_options_add_tls_application_protocol(\_:\_:)](../security/sec_protocol_options_add_tls_application_protocol%28____%29.md)
- [sec_protocol_options_append_tls_ciphersuite(\_:\_:)](../security/sec_protocol_options_append_tls_ciphersuite%28____%29.md)
- [sec_protocol_options_append_tls_ciphersuite_group(\_:\_:)](../security/sec_protocol_options_append_tls_ciphersuite_group%28____%29.md)
- [sec_protocol_options_add_tls_ciphersuite(\_:\_:)](../security/sec_protocol_options_add_tls_ciphersuite%28____%29.md): Deprecated.
- [sec_protocol_options_add_tls_ciphersuite_group(\_:\_:)](../security/sec_protocol_options_add_tls_ciphersuite_group%28____%29.md): Deprecated.
- [sec_protocol_options_set_tls_diffie_hellman_parameters(\_:\_:)](../security/sec_protocol_options_set_tls_diffie_hellman_parameters%28____%29.md): Deprecated.
- [sec_protocol_options_are_equal(\_:\_:)](../security/sec_protocol_options_are_equal%28____%29.md)

### Configuring TLS Versions

- [sec_protocol_options_set_min_tls_protocol_version(\_:\_:)](../security/sec_protocol_options_set_min_tls_protocol_version%28____%29.md)
- [sec_protocol_options_set_max_tls_protocol_version(\_:\_:)](../security/sec_protocol_options_set_max_tls_protocol_version%28____%29.md)
- [sec_protocol_options_get_default_min_tls_protocol_version()](../security/sec_protocol_options_get_default_min_tls_protocol_version%28%29.md)
- [sec_protocol_options_get_default_max_tls_protocol_version()](../security/sec_protocol_options_get_default_max_tls_protocol_version%28%29.md)
- [sec_protocol_options_get_default_min_dtls_protocol_version()](../security/sec_protocol_options_get_default_min_dtls_protocol_version%28%29.md)
- [sec_protocol_options_get_default_max_dtls_protocol_version()](../security/sec_protocol_options_get_default_max_dtls_protocol_version%28%29.md)
- [sec_protocol_options_set_tls_min_version(\_:\_:)](../security/sec_protocol_options_set_tls_min_version%28____%29.md): Deprecated.
- [sec_protocol_options_set_tls_max_version(\_:\_:)](../security/sec_protocol_options_set_tls_max_version%28____%29.md): Deprecated.

### Configuring TLS Behavior

- [sec_protocol_options_set_tls_resumption_enabled(\_:\_:)](../security/sec_protocol_options_set_tls_resumption_enabled%28____%29.md)
- [sec_protocol_options_set_tls_tickets_enabled(\_:\_:)](../security/sec_protocol_options_set_tls_tickets_enabled%28____%29.md)
- [sec_protocol_options_set_tls_false_start_enabled(\_:\_:)](../security/sec_protocol_options_set_tls_false_start_enabled%28____%29.md)
- [sec_protocol_options_set_tls_sct_enabled(\_:\_:)](../security/sec_protocol_options_set_tls_sct_enabled%28____%29.md)
- [sec_protocol_options_set_tls_ocsp_enabled(\_:\_:)](../security/sec_protocol_options_set_tls_ocsp_enabled%28____%29.md)
- [sec_protocol_options_set_tls_renegotiation_enabled(\_:\_:)](../security/sec_protocol_options_set_tls_renegotiation_enabled%28____%29.md)
- [sec_protocol_options_set_peer_authentication_required(\_:\_:)](../security/sec_protocol_options_set_peer_authentication_required%28____%29.md)
- [sec_protocol_options_set_tls_is_fallback_attempt(\_:\_:)](../security/sec_protocol_options_set_tls_is_fallback_attempt%28____%29.md)
- [sec_protocol_options_set_tls_pre_shared_key_identity_hint(\_:\_:)](../security/sec_protocol_options_set_tls_pre_shared_key_identity_hint%28____%29.md)

### Handling TLS Events

- [sec_protocol_options_set_verify_block(\_:\_:\_:)](../security/sec_protocol_options_set_verify_block%28______%29.md)
- [sec_protocol_verify_t](../security/sec_protocol_verify_t.md)
- [sec_protocol_verify_complete_t](../security/sec_protocol_verify_complete_t.md)
- [sec_protocol_options_set_challenge_block(\_:\_:\_:)](../security/sec_protocol_options_set_challenge_block%28______%29.md)
- [sec_protocol_challenge_t](../security/sec_protocol_challenge_t.md)
- [sec_protocol_challenge_complete_t](../security/sec_protocol_challenge_complete_t.md)
- [sec_protocol_options_set_key_update_block(\_:\_:\_:)](../security/sec_protocol_options_set_key_update_block%28______%29.md)
- [sec_protocol_key_update_t](../security/sec_protocol_key_update_t.md)
- [sec_protocol_key_update_complete_t](../security/sec_protocol_key_update_complete_t.md)
- [sec_protocol_options_set_pre_shared_key_selection_block(\_:\_:\_:)](../security/sec_protocol_options_set_pre_shared_key_selection_block%28______%29.md)
- [sec_protocol_pre_shared_key_selection_t](../security/sec_protocol_pre_shared_key_selection_t.md)
- [sec_protocol_pre_shared_key_selection_complete_t](../security/sec_protocol_pre_shared_key_selection_complete_t.md)

### Inspecting TLS State

- [sec_protocol_metadata_t](../security/sec_protocol_metadata_t.md): A `sec_protocol_metadata` instance conatins read-only properties of a connected and configured security protocol. Clients use this object to read information about a protocol instance. Properties include, for example, the negotiated TLS version, ciphersuite, and peer certificates.
- [OS_sec_protocol_metadata](../security/os_sec_protocol_metadata.md): A `sec_protocol_metadata` instance conatins read-only properties of a connected and configured security protocol. Clients use this object to read information about a protocol instance. Properties include, for example, the negotiated TLS version, ciphersuite, and peer certificates.
- [sec_protocol_metadata_get_negotiated_protocol(\_:)](../security/sec_protocol_metadata_get_negotiated_protocol%28__%29.md): Deprecated.
- [sec_protocol_metadata_get_server_name(\_:)](../security/sec_protocol_metadata_get_server_name%28__%29.md): Deprecated.
- [sec_protocol_metadata_get_negotiated_tls_protocol_version(\_:)](../security/sec_protocol_metadata_get_negotiated_tls_protocol_version%28__%29.md)
- [sec_protocol_metadata_get_negotiated_tls_ciphersuite(\_:)](../security/sec_protocol_metadata_get_negotiated_tls_ciphersuite%28__%29.md)
- [sec_protocol_metadata_get_negotiated_protocol_version(\_:)](../security/sec_protocol_metadata_get_negotiated_protocol_version%28__%29.md): Deprecated.
- [sec_protocol_metadata_get_negotiated_ciphersuite(\_:)](../security/sec_protocol_metadata_get_negotiated_ciphersuite%28__%29.md): Deprecated.
- [sec_protocol_metadata_get_early_data_accepted(\_:)](../security/sec_protocol_metadata_get_early_data_accepted%28__%29.md)
- [sec_protocol_metadata_copy_peer_public_key(\_:)](../security/sec_protocol_metadata_copy_peer_public_key%28__%29.md)

### Handling TLS Challenges

- [sec_protocol_metadata_access_distinguished_names(\_:\_:)](../security/sec_protocol_metadata_access_distinguished_names%28____%29.md)
- [sec_protocol_metadata_access_ocsp_response(\_:\_:)](../security/sec_protocol_metadata_access_ocsp_response%28____%29.md)
- [sec_protocol_metadata_access_peer_certificate_chain(\_:\_:)](../security/sec_protocol_metadata_access_peer_certificate_chain%28____%29.md)
- [sec_protocol_metadata_access_supported_signature_algorithms(\_:\_:)](../security/sec_protocol_metadata_access_supported_signature_algorithms%28____%29.md)
- [sec_protocol_metadata_access_pre_shared_keys(\_:\_:)](../security/sec_protocol_metadata_access_pre_shared_keys%28____%29.md)
- [sec_protocol_metadata_create_secret(\_:\_:\_:\_:)](../security/sec_protocol_metadata_create_secret%28________%29.md)
- [sec_protocol_metadata_create_secret_with_context(\_:\_:\_:\_:\_:\_:)](../security/sec_protocol_metadata_create_secret_with_context%28____________%29.md)
- [sec_protocol_metadata_peers_are_equal(\_:\_:)](../security/sec_protocol_metadata_peers_are_equal%28____%29.md)
- [sec_protocol_metadata_challenge_parameters_are_equal(\_:\_:)](../security/sec_protocol_metadata_challenge_parameters_are_equal%28____%29.md)

### Handling Certificates

- [sec_certificate_t](../security/sec_certificate_t.md)
- [OS_sec_certificate](../security/os_sec_certificate.md)
- [sec_certificate_create(\_:)](../security/sec_certificate_create%28__%29.md)
- [sec_certificate_copy_ref(\_:)](../security/sec_certificate_copy_ref%28__%29.md)

### Handling Identities

- [sec_protocol_options_set_local_identity(\_:\_:)](../security/sec_protocol_options_set_local_identity%28____%29.md)
- [sec_identity_t](../security/sec_identity_t.md)
- [OS_sec_identity](../security/os_sec_identity.md)
- [sec_identity_create(\_:)](../security/sec_identity_create%28__%29.md)
- [sec_identity_create_with_certificates(\_:\_:)](../security/sec_identity_create_with_certificates%28____%29.md)
- [sec_identity_copy_ref(\_:)](../security/sec_identity_copy_ref%28__%29.md)
- [sec_identity_access_certificates(\_:\_:)](../security/sec_identity_access_certificates%28____%29.md)
- [sec_identity_copy_certificates_ref(\_:)](../security/sec_identity_copy_certificates_ref%28__%29.md)

### Handling Trust

- [sec_trust_t](../security/sec_trust_t.md): These are os_object compatible and ARC-able wrappers around existing CoreFoundation Security types, including: SecTrustRef, SecIdentityRef, and SecCertificateRef. They allow clients to use these types in os_object-type APIs and data structures. The underlying CoreFoundation types may be extracted and used by clients as needed.
- [OS_sec_trust](../security/os_sec_trust.md): These are os_object compatible and ARC-able wrappers around existing CoreFoundation Security types, including: SecTrustRef, SecIdentityRef, and SecCertificateRef. They allow clients to use these types in os_object-type APIs and data structures. The underlying CoreFoundation types may be extracted and used by clients as needed.
- [sec_trust_create(\_:)](../security/sec_trust_create%28__%29.md)
- [sec_trust_copy_ref(\_:)](../security/sec_trust_copy_ref%28__%29.md)

### Managing Security Objects

- [sec_release(\_:)](../security/sec_release%28__%29.md)
- [sec_retain(\_:)](../security/sec_retain%28__%29.md)
- [sec_object_t](../security/sec_object_t.md): A `sec_object` is a generic, ARC-able type wrapper for common CoreFoundation Security types.
- [OS_sec_object](../security/os_sec_object.md): A `sec_object` is a generic, ARC-able type wrapper for common CoreFoundation Security types.

## See Also

### Network Security and Privacy

- [Privacy Management](privacy-management.md): Configure parameters related to user privacy.
- [Creating an Identity for Local Network TLS](creating-an-identity-for-local-network-tls.md): Learn how to create and use a digital identity in your application for local network TLS.

# Security Options (Objective-C)

**Framework:** Network

Configure security options for TLS handshakes.

## Topics

### Configuring TLS Handshake Options

- [sec_protocol_options_t](../security/sec_protocol_options_t.md): A `sec_protocol_options` instance is a container of options for security protocol instances, such as TLS. Protocol options are used to configure security protocols in the network stack. For example, clients may set the maximum and minimum allowed TLS versions through protocol options.
- [OS_sec_protocol_options](../security/os_sec_protocol_options.md): A `sec_protocol_options` instance is a container of options for security protocol instances, such as TLS. Protocol options are used to configure security protocols in the network stack. For example, clients may set the maximum and minimum allowed TLS versions through protocol options.
- [sec_protocol_options_set_tls_server_name](../security/sec_protocol_options_set_tls_server_name%28____%29.md)
- [sec_protocol_options_add_pre_shared_key](../security/sec_protocol_options_add_pre_shared_key%28______%29.md)
- [sec_protocol_options_add_tls_application_protocol](../security/sec_protocol_options_add_tls_application_protocol%28____%29.md)
- [sec_protocol_options_append_tls_ciphersuite](../security/sec_protocol_options_append_tls_ciphersuite%28____%29.md)
- [sec_protocol_options_append_tls_ciphersuite_group](../security/sec_protocol_options_append_tls_ciphersuite_group%28____%29.md)
- [sec_protocol_options_add_tls_ciphersuite](../security/sec_protocol_options_add_tls_ciphersuite%28____%29.md): Deprecated.
- [sec_protocol_options_add_tls_ciphersuite_group](../security/sec_protocol_options_add_tls_ciphersuite_group%28____%29.md): Deprecated.
- [sec_protocol_options_set_tls_diffie_hellman_parameters](../security/sec_protocol_options_set_tls_diffie_hellman_parameters%28____%29.md): Deprecated.
- [sec_protocol_options_are_equal](../security/sec_protocol_options_are_equal%28____%29.md)

### Configuring TLS Versions

- [sec_protocol_options_set_min_tls_protocol_version](../security/sec_protocol_options_set_min_tls_protocol_version%28____%29.md)
- [sec_protocol_options_set_max_tls_protocol_version](../security/sec_protocol_options_set_max_tls_protocol_version%28____%29.md)
- [sec_protocol_options_get_default_min_tls_protocol_version](../security/sec_protocol_options_get_default_min_tls_protocol_version%28%29.md)
- [sec_protocol_options_get_default_max_tls_protocol_version](../security/sec_protocol_options_get_default_max_tls_protocol_version%28%29.md)
- [sec_protocol_options_get_default_min_dtls_protocol_version](../security/sec_protocol_options_get_default_min_dtls_protocol_version%28%29.md)
- [sec_protocol_options_get_default_max_dtls_protocol_version](../security/sec_protocol_options_get_default_max_dtls_protocol_version%28%29.md)
- [sec_protocol_options_set_tls_min_version](../security/sec_protocol_options_set_tls_min_version%28____%29.md): Deprecated.
- [sec_protocol_options_set_tls_max_version](../security/sec_protocol_options_set_tls_max_version%28____%29.md): Deprecated.

### Configuring TLS Behavior

- [sec_protocol_options_set_tls_resumption_enabled](../security/sec_protocol_options_set_tls_resumption_enabled%28____%29.md)
- [sec_protocol_options_set_tls_tickets_enabled](../security/sec_protocol_options_set_tls_tickets_enabled%28____%29.md)
- [sec_protocol_options_set_tls_false_start_enabled](../security/sec_protocol_options_set_tls_false_start_enabled%28____%29.md)
- [sec_protocol_options_set_tls_sct_enabled](../security/sec_protocol_options_set_tls_sct_enabled%28____%29.md)
- [sec_protocol_options_set_tls_ocsp_enabled](../security/sec_protocol_options_set_tls_ocsp_enabled%28____%29.md)
- [sec_protocol_options_set_tls_renegotiation_enabled](../security/sec_protocol_options_set_tls_renegotiation_enabled%28____%29.md)
- [sec_protocol_options_set_peer_authentication_required](../security/sec_protocol_options_set_peer_authentication_required%28____%29.md)
- [sec_protocol_options_set_tls_is_fallback_attempt](../security/sec_protocol_options_set_tls_is_fallback_attempt%28____%29.md)
- [sec_protocol_options_set_tls_pre_shared_key_identity_hint](../security/sec_protocol_options_set_tls_pre_shared_key_identity_hint%28____%29.md)

### Handling TLS Events

- [sec_protocol_options_set_verify_block](../security/sec_protocol_options_set_verify_block%28______%29.md)
- [sec_protocol_verify_t](../security/sec_protocol_verify_t.md)
- [sec_protocol_verify_complete_t](../security/sec_protocol_verify_complete_t.md)
- [sec_protocol_options_set_challenge_block](../security/sec_protocol_options_set_challenge_block%28______%29.md)
- [sec_protocol_challenge_t](../security/sec_protocol_challenge_t.md)
- [sec_protocol_challenge_complete_t](../security/sec_protocol_challenge_complete_t.md)
- [sec_protocol_options_set_key_update_block](../security/sec_protocol_options_set_key_update_block%28______%29.md)
- [sec_protocol_key_update_t](../security/sec_protocol_key_update_t.md)
- [sec_protocol_key_update_complete_t](../security/sec_protocol_key_update_complete_t.md)
- [sec_protocol_options_set_pre_shared_key_selection_block](../security/sec_protocol_options_set_pre_shared_key_selection_block%28______%29.md)
- [sec_protocol_pre_shared_key_selection_t](../security/sec_protocol_pre_shared_key_selection_t.md)
- [sec_protocol_pre_shared_key_selection_complete_t](../security/sec_protocol_pre_shared_key_selection_complete_t.md)

### Inspecting TLS State

- [sec_protocol_metadata_t](../security/sec_protocol_metadata_t.md): A `sec_protocol_metadata` instance conatins read-only properties of a connected and configured security protocol. Clients use this object to read information about a protocol instance. Properties include, for example, the negotiated TLS version, ciphersuite, and peer certificates.
- [OS_sec_protocol_metadata](../security/os_sec_protocol_metadata.md): A `sec_protocol_metadata` instance conatins read-only properties of a connected and configured security protocol. Clients use this object to read information about a protocol instance. Properties include, for example, the negotiated TLS version, ciphersuite, and peer certificates.
- [sec_protocol_metadata_get_negotiated_protocol](../security/sec_protocol_metadata_get_negotiated_protocol%28__%29.md): Deprecated.
- [sec_protocol_metadata_get_server_name](../security/sec_protocol_metadata_get_server_name%28__%29.md): Deprecated.
- [sec_protocol_metadata_get_negotiated_tls_protocol_version](../security/sec_protocol_metadata_get_negotiated_tls_protocol_version%28__%29.md)
- [sec_protocol_metadata_get_negotiated_tls_ciphersuite](../security/sec_protocol_metadata_get_negotiated_tls_ciphersuite%28__%29.md)
- [sec_protocol_metadata_get_negotiated_protocol_version](../security/sec_protocol_metadata_get_negotiated_protocol_version%28__%29.md): Deprecated.
- [sec_protocol_metadata_get_negotiated_ciphersuite](../security/sec_protocol_metadata_get_negotiated_ciphersuite%28__%29.md): Deprecated.
- [sec_protocol_metadata_get_early_data_accepted](../security/sec_protocol_metadata_get_early_data_accepted%28__%29.md)
- [sec_protocol_metadata_copy_peer_public_key](../security/sec_protocol_metadata_copy_peer_public_key%28__%29.md)

### Handling TLS Challenges

- [sec_protocol_metadata_access_distinguished_names](../security/sec_protocol_metadata_access_distinguished_names%28____%29.md)
- [sec_protocol_metadata_access_ocsp_response](../security/sec_protocol_metadata_access_ocsp_response%28____%29.md)
- [sec_protocol_metadata_access_peer_certificate_chain](../security/sec_protocol_metadata_access_peer_certificate_chain%28____%29.md)
- [sec_protocol_metadata_access_supported_signature_algorithms](../security/sec_protocol_metadata_access_supported_signature_algorithms%28____%29.md)
- [sec_protocol_metadata_access_pre_shared_keys](../security/sec_protocol_metadata_access_pre_shared_keys%28____%29.md)
- [sec_protocol_metadata_create_secret](../security/sec_protocol_metadata_create_secret%28________%29.md)
- [sec_protocol_metadata_create_secret_with_context](../security/sec_protocol_metadata_create_secret_with_context%28____________%29.md)
- [sec_protocol_metadata_peers_are_equal](../security/sec_protocol_metadata_peers_are_equal%28____%29.md)
- [sec_protocol_metadata_challenge_parameters_are_equal](../security/sec_protocol_metadata_challenge_parameters_are_equal%28____%29.md)

### Handling Certificates

- [sec_certificate_t](../security/sec_certificate_t.md)
- [OS_sec_certificate](../security/os_sec_certificate.md)
- [sec_certificate_create](../security/sec_certificate_create%28__%29.md)
- [sec_certificate_copy_ref](../security/sec_certificate_copy_ref%28__%29.md)

### Handling Identities

- [sec_protocol_options_set_local_identity](../security/sec_protocol_options_set_local_identity%28____%29.md)
- [sec_identity_t](../security/sec_identity_t.md)
- [OS_sec_identity](../security/os_sec_identity.md)
- [sec_identity_create](../security/sec_identity_create%28__%29.md)
- [sec_identity_create_with_certificates](../security/sec_identity_create_with_certificates%28____%29.md)
- [sec_identity_copy_ref](../security/sec_identity_copy_ref%28__%29.md)
- [sec_identity_access_certificates](../security/sec_identity_access_certificates%28____%29.md)
- [sec_identity_copy_certificates_ref](../security/sec_identity_copy_certificates_ref%28__%29.md)

### Handling Trust

- [sec_trust_t](../security/sec_trust_t.md): These are os_object compatible and ARC-able wrappers around existing CoreFoundation Security types, including: SecTrustRef, SecIdentityRef, and SecCertificateRef. They allow clients to use these types in os_object-type APIs and data structures. The underlying CoreFoundation types may be extracted and used by clients as needed.
- [OS_sec_trust](../security/os_sec_trust.md): These are os_object compatible and ARC-able wrappers around existing CoreFoundation Security types, including: SecTrustRef, SecIdentityRef, and SecCertificateRef. They allow clients to use these types in os_object-type APIs and data structures. The underlying CoreFoundation types may be extracted and used by clients as needed.
- [sec_trust_create](../security/sec_trust_create%28__%29.md)
- [sec_trust_copy_ref](../security/sec_trust_copy_ref%28__%29.md)

### Managing Security Objects

- [sec_release](../security/sec_release%28__%29.md)
- [sec_retain](../security/sec_retain%28__%29.md)
- [sec_object_t](../security/sec_object_t.md): A `sec_object` is a generic, ARC-able type wrapper for common CoreFoundation Security types.
- [OS_sec_object](../security/os_sec_object.md): A `sec_object` is a generic, ARC-able type wrapper for common CoreFoundation Security types.

## See Also

### Network Security and Privacy

- [Privacy Management](privacy-management.md): Configure parameters related to user privacy.
- [Creating an Identity for Local Network TLS](creating-an-identity-for-local-network-tls.md): Learn how to create and use a digital identity in your application for local network TLS.
