> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity](https://developer.apple.com/documentation/endpointsecurity)

# Endpoint Security (Swift)

**Framework:** Endpoint Security  
**Kind:** Library  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

Develop system extensions that enhance user security.

<a id="overview"></a>

## Overview

Endpoint Security is a C API for monitoring system events for potentially malicious activity. You can write your client in any language that supports native calls. Your client registers with Endpoint Security to authorize pending events, or receive notifications of events that already occurred. These events include process executions, mounting file systems, forking processes, and raising signals.

Develop your system extension with Endpoint Security and package it in an app that uses the [System Extensions](systemextensions.md) framework to install and upgrade the extension on the user’s Mac.

## Topics

### Event Monitoring

- [Client](endpointsecurity/client.md): An opaque type that maintains Endpoint Security client state, and functions related to this type.
- [Message](endpointsecurity/message.md): A type used by Endpoint Security to notify your client when a monitored action occurs.
- [Event Types](endpointsecurity/event-types.md): Types used by messages to deliver details specific to different kinds of Endpoint Security events.

### Entitlements

- [com.apple.developer.endpoint-security.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.endpoint-security.client): The entitlement required to monitor system events for potentially malicious activity.

### Reference

- [EndpointSecurity Constants](endpointsecurity/endpointsecurity-constants.md)
- [EndpointSecurity Data Types](endpointsecurity/endpointsecurity-data-types.md)
- [EndpointSecurity Functions](endpointsecurity/endpointsecurity-functions.md)
- [EndpointSecurity Structures](endpointsecurity/endpointsecurity-structures.md)
- [EndpointSecurity Enumerations](endpointsecurity/endpointsecurity-enumerations.md)

### Structures

- [es_bootstrap_target_type_t](endpointsecurity/es_bootstrap_target_type_t.md)
- [es_cs_validation_category_t](endpointsecurity/es_cs_validation_category_t.md): es_cs_validation_category
- [es_deadline_miss_mode_t](endpointsecurity/es_deadline_miss_mode_t.md): Deadline miss mode for ES clients
- [es_event_bootstrap_check_in_t](endpointsecurity/es_event_bootstrap_check_in_t.md)
- [es_event_bootstrap_look_up_t](endpointsecurity/es_event_bootstrap_look_up_t.md)
- [es_event_tcc_modify_t](endpointsecurity/es_event_tcc_modify_t.md)
- [es_lightweight_code_requirement_t](endpointsecurity/es_lightweight_code_requirement_t.md)
- [es_tcc_authorization_reason_t](endpointsecurity/es_tcc_authorization_reason_t.md): ess_tcc_authorization_reason_t
- [es_tcc_authorization_right_t](endpointsecurity/es_tcc_authorization_right_t.md): ess_tcc_authorization_right_t
- [es_tcc_event_type_t](endpointsecurity/es_tcc_event_type_t.md)
- [es_tcc_identity_type_t](endpointsecurity/es_tcc_identity_type_t.md): es_tcc_identity_type_t

### Variables

- [ES_BOOTSTRAP_TARGET_TYPE_JOB](endpointsecurity/es_bootstrap_target_type_job.md)
- [ES_BOOTSTRAP_TARGET_TYPE_PROCESS](endpointsecurity/es_bootstrap_target_type_process.md)
- [ES_CS_VALIDATION_CATEGORY_APP_STORE](endpointsecurity/es_cs_validation_category_app_store.md)
- [ES_CS_VALIDATION_CATEGORY_DEVELOPER_ID](endpointsecurity/es_cs_validation_category_developer_id.md)
- [ES_CS_VALIDATION_CATEGORY_DEVELOPMENT](endpointsecurity/es_cs_validation_category_development.md)
- [ES_CS_VALIDATION_CATEGORY_ENTERPRISE](endpointsecurity/es_cs_validation_category_enterprise.md)
- [ES_CS_VALIDATION_CATEGORY_INVALID](endpointsecurity/es_cs_validation_category_invalid.md)
- [ES_CS_VALIDATION_CATEGORY_LOCAL_SIGNING](endpointsecurity/es_cs_validation_category_local_signing.md)
- [ES_CS_VALIDATION_CATEGORY_NONE](endpointsecurity/es_cs_validation_category_none.md)
- [ES_CS_VALIDATION_CATEGORY_OOPJIT](endpointsecurity/es_cs_validation_category_oopjit.md)
- [ES_CS_VALIDATION_CATEGORY_PLATFORM](endpointsecurity/es_cs_validation_category_platform.md)
- [ES_CS_VALIDATION_CATEGORY_ROSETTA](endpointsecurity/es_cs_validation_category_rosetta.md)
- [ES_CS_VALIDATION_CATEGORY_TESTFLIGHT](endpointsecurity/es_cs_validation_category_testflight.md)
- [ES_DEADLINE_MISS_MODE_FAIL_CLOSED](endpointsecurity/es_deadline_miss_mode_fail_closed.md): Deny the operation when client fails to respond, but don’t kill the client
- [ES_DEADLINE_MISS_MODE_FAIL_OPEN](endpointsecurity/es_deadline_miss_mode_fail_open.md): Allow the operation when client fails to respond, but don’t kill the client
- [ES_DEADLINE_MISS_MODE_KILL](endpointsecurity/es_deadline_miss_mode_kill.md): Kill the client when it fails to respond to an auth event (default behavior)
- [ES_EVENT_TYPE_AUTH_BOOTSTRAP_CHECK_IN](endpointsecurity/es_event_type_auth_bootstrap_check_in.md)
- [ES_EVENT_TYPE_AUTH_BOOTSTRAP_LOOK_UP](endpointsecurity/es_event_type_auth_bootstrap_look_up.md)
- [ES_EVENT_TYPE_AUTH_XPC_CONNECT](endpointsecurity/es_event_type_auth_xpc_connect.md)
- [ES_EVENT_TYPE_NOTIFY_BOOTSTRAP_CHECK_IN](endpointsecurity/es_event_type_notify_bootstrap_check_in.md)
- [ES_EVENT_TYPE_NOTIFY_BOOTSTRAP_LOOK_UP](endpointsecurity/es_event_type_notify_bootstrap_look_up.md)
- [ES_EVENT_TYPE_NOTIFY_TCC_MODIFY](endpointsecurity/es_event_type_notify_tcc_modify.md)
- [ES_EVENT_TYPE_RESERVED_0](endpointsecurity/es_event_type_reserved_0.md)
- [ES_EVENT_TYPE_RESERVED_1](endpointsecurity/es_event_type_reserved_1.md)
- [ES_EVENT_TYPE_RESERVED_2](endpointsecurity/es_event_type_reserved_2.md)
- [ES_EVENT_TYPE_RESERVED_3](endpointsecurity/es_event_type_reserved_3.md)
- [ES_EVENT_TYPE_RESERVED_4](endpointsecurity/es_event_type_reserved_4.md)
- [ES_EVENT_TYPE_RESERVED_5](endpointsecurity/es_event_type_reserved_5.md)
- [ES_EVENT_TYPE_RESERVED_6](endpointsecurity/es_event_type_reserved_6.md)
- [ES_EVENT_TYPE_RESERVED_7](endpointsecurity/es_event_type_reserved_7.md)
- [ES_EVENT_TYPE_RESERVED_8](endpointsecurity/es_event_type_reserved_8.md)
- [ES_TCC_AUTHORIZATION_REASON_APP_TYPE_POLICY](endpointsecurity/es_tcc_authorization_reason_app_type_policy.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_ENTITLED](endpointsecurity/es_tcc_authorization_reason_entitled.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_ERROR](endpointsecurity/es_tcc_authorization_reason_error.md)
- [ES_TCC_AUTHORIZATION_REASON_MDM_POLICY](endpointsecurity/es_tcc_authorization_reason_mdm_policy.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_MISSING_USAGE_STRING](endpointsecurity/es_tcc_authorization_reason_missing_usage_string.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_NONE](endpointsecurity/es_tcc_authorization_reason_none.md)
- [ES_TCC_AUTHORIZATION_REASON_PREFLIGHT_UNKNOWN](endpointsecurity/es_tcc_authorization_reason_preflight_unknown.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_PROMPT_CANCEL](endpointsecurity/es_tcc_authorization_reason_prompt_cancel.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_PROMPT_TIMEOUT](endpointsecurity/es_tcc_authorization_reason_prompt_timeout.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_SERVICE_OVERRIDE_POLICY](endpointsecurity/es_tcc_authorization_reason_service_override_policy.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_SERVICE_POLICY](endpointsecurity/es_tcc_authorization_reason_service_policy.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_SYSTEM_SET](endpointsecurity/es_tcc_authorization_reason_system_set.md): User changed the authorization right via Preferences
- [ES_TCC_AUTHORIZATION_REASON_USER_CONSENT](endpointsecurity/es_tcc_authorization_reason_user_consent.md)
- [ES_TCC_AUTHORIZATION_REASON_USER_SET](endpointsecurity/es_tcc_authorization_reason_user_set.md): User answered a prompt
- [ES_TCC_AUTHORIZATION_RIGHT_ADD_MODIFY_ADDED](endpointsecurity/es_tcc_authorization_right_add_modify_added.md)
- [ES_TCC_AUTHORIZATION_RIGHT_ALLOWED](endpointsecurity/es_tcc_authorization_right_allowed.md)
- [ES_TCC_AUTHORIZATION_RIGHT_DENIED](endpointsecurity/es_tcc_authorization_right_denied.md)
- [ES_TCC_AUTHORIZATION_RIGHT_LEARN_MORE](endpointsecurity/es_tcc_authorization_right_learn_more.md)
- [ES_TCC_AUTHORIZATION_RIGHT_LIMITED](endpointsecurity/es_tcc_authorization_right_limited.md)
- [ES_TCC_AUTHORIZATION_RIGHT_SESSION_PID](endpointsecurity/es_tcc_authorization_right_session_pid.md)
- [ES_TCC_AUTHORIZATION_RIGHT_UNKNOWN](endpointsecurity/es_tcc_authorization_right_unknown.md)
- [ES_TCC_EVENT_TYPE_CREATE](endpointsecurity/es_tcc_event_type_create.md)
- [ES_TCC_EVENT_TYPE_DELETE](endpointsecurity/es_tcc_event_type_delete.md)
- [ES_TCC_EVENT_TYPE_MODIFY](endpointsecurity/es_tcc_event_type_modify.md)
- [ES_TCC_EVENT_TYPE_UNKNOWN](endpointsecurity/es_tcc_event_type_unknown.md)
- [ES_TCC_IDENTITY_TYPE_BUNDLE_ID](endpointsecurity/es_tcc_identity_type_bundle_id.md)
- [ES_TCC_IDENTITY_TYPE_EXECUTABLE_PATH](endpointsecurity/es_tcc_identity_type_executable_path.md)
- [ES_TCC_IDENTITY_TYPE_FILE_PROVIDER_DOMAIN_ID](endpointsecurity/es_tcc_identity_type_file_provider_domain_id.md)
- [ES_TCC_IDENTITY_TYPE_POLICY_ID](endpointsecurity/es_tcc_identity_type_policy_id.md)

### Functions

- [es_exec_entitlements(\_:)](endpointsecurity/es_exec_entitlements%28__%29.md)
- [es_get_deadline_max_milliseconds(\_:\_:\_:)](endpointsecurity/es_get_deadline_max_milliseconds%28______%29.md): Get the current maximum deadline in milliseconds for a specific event type
- [es_get_deadline_min_milliseconds(\_:\_:\_:)](endpointsecurity/es_get_deadline_min_milliseconds%28______%29.md): Get the current minimum deadline in milliseconds for a specific event type
- [es_get_deadline_miss_mode(\_:\_:)](endpointsecurity/es_get_deadline_miss_mode%28____%29.md): Get the current deadline miss mode for the specified client
- [es_new_descendants_client(\_:\_:)](endpointsecurity/es_new_descendants_client%28____%29.md): Create a new ES client scoped to descendant processes only.
- [es_set_deadline_max_milliseconds(\_:\_:\_:\_:)](endpointsecurity/es_set_deadline_max_milliseconds%28________%29.md): Set the maximum deadline in milliseconds for specified auth event types for this client
- [es_set_deadline_min_milliseconds(\_:\_:\_:\_:)](endpointsecurity/es_set_deadline_min_milliseconds%28________%29.md): Set the minimum deadline in milliseconds for specified auth event types for this client
- [es_set_deadline_miss_mode(\_:\_:)](endpointsecurity/es_set_deadline_miss_mode%28____%29.md): Set the deadline miss mode for the specified client
- [es_sync_client(\_:\_:)](endpointsecurity/es_sync_client%28____%29.md)

# Endpoint Security (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Library  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

Develop system extensions that enhance user security.

<a id="overview"></a>

## Overview

Endpoint Security is a C API for monitoring system events for potentially malicious activity. You can write your client in any language that supports native calls. Your client registers with Endpoint Security to authorize pending events, or receive notifications of events that already occurred. These events include process executions, mounting file systems, forking processes, and raising signals.

Develop your system extension with Endpoint Security and package it in an app that uses the [System Extensions](systemextensions.md) framework to install and upgrade the extension on the user’s Mac.

## Topics

### Event Monitoring

- [Client](endpointsecurity/client.md): An opaque type that maintains Endpoint Security client state, and functions related to this type.
- [Message](endpointsecurity/message.md): A type used by Endpoint Security to notify your client when a monitored action occurs.
- [Event Types](endpointsecurity/event-types.md): Types used by messages to deliver details specific to different kinds of Endpoint Security events.
- [Monitoring System Events with Endpoint Security](endpointsecurity/monitoring-system-events-with-endpoint-security.md): Receive notifications and authorization requests for sensitive operations by creating an Endpoint Security client for your app.

### Entitlements

- [com.apple.developer.endpoint-security.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.endpoint-security.client): The entitlement required to monitor system events for potentially malicious activity.

### Reference

- [EndpointSecurity Constants](endpointsecurity/endpointsecurity-constants.md)
- [EndpointSecurity Data Types](endpointsecurity/endpointsecurity-data-types.md)
- [EndpointSecurity Functions](endpointsecurity/endpointsecurity-functions.md)
- [EndpointSecurity Structures](endpointsecurity/endpointsecurity-structures.md)
- [EndpointSecurity Enumerations](endpointsecurity/endpointsecurity-enumerations.md)

### Structures

- [es_event_bootstrap_check_in_t](endpointsecurity/es_event_bootstrap_check_in_t.md)
- [es_event_bootstrap_look_up_t](endpointsecurity/es_event_bootstrap_look_up_t.md)
- [es_event_tcc_modify_t](endpointsecurity/es_event_tcc_modify_t.md)
- [es_lightweight_code_requirement_t](endpointsecurity/es_lightweight_code_requirement_t.md)

### Functions

- [es_exec_entitlements](endpointsecurity/es_exec_entitlements%28__%29.md)
- [es_get_deadline_max_milliseconds](endpointsecurity/es_get_deadline_max_milliseconds%28______%29.md): Get the current maximum deadline in milliseconds for a specific event type
- [es_get_deadline_min_milliseconds](endpointsecurity/es_get_deadline_min_milliseconds%28______%29.md): Get the current minimum deadline in milliseconds for a specific event type
- [es_get_deadline_miss_mode](endpointsecurity/es_get_deadline_miss_mode%28____%29.md): Get the current deadline miss mode for the specified client
- [es_new_descendants_client](endpointsecurity/es_new_descendants_client%28____%29.md): Create a new ES client scoped to descendant processes only.
- [es_set_deadline_max_milliseconds](endpointsecurity/es_set_deadline_max_milliseconds%28________%29.md): Set the maximum deadline in milliseconds for specified auth event types for this client
- [es_set_deadline_min_milliseconds](endpointsecurity/es_set_deadline_min_milliseconds%28________%29.md): Set the minimum deadline in milliseconds for specified auth event types for this client
- [es_set_deadline_miss_mode](endpointsecurity/es_set_deadline_miss_mode%28____%29.md): Set the deadline miss mode for the specified client
- [es_sync_client](endpointsecurity/es_sync_client%28____%29.md)

### Enumerations

- [es_bootstrap_target_type_t](endpointsecurity/es_bootstrap_target_type_t.md)
- [es_cs_validation_category_t](endpointsecurity/es_cs_validation_category_t.md): es_cs_validation_category
- [es_deadline_miss_mode_t](endpointsecurity/es_deadline_miss_mode_t.md): Deadline miss mode for ES clients
- [es_tcc_authorization_reason_t](endpointsecurity/es_tcc_authorization_reason_t.md): ess_tcc_authorization_reason_t
- [es_tcc_authorization_right_t](endpointsecurity/es_tcc_authorization_right_t.md): ess_tcc_authorization_right_t
- [es_tcc_event_type_t](endpointsecurity/es_tcc_event_type_t.md)
- [es_tcc_identity_type_t](endpointsecurity/es_tcc_identity_type_t.md): es_tcc_identity_type_t
