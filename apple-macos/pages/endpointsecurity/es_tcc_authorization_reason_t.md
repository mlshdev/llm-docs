> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_tcc_authorization_reason_t](https://developer.apple.com/documentation/endpointsecurity/es_tcc_authorization_reason_t)

# es_tcc_authorization_reason_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

ess_tcc_authorization_reason_t

## Declaration

```swift
struct es_tcc_authorization_reason_t
```

<a id="overview"></a>

## Overview

Represents the reason a TCC permission was updated.

## Topics

### Initializers

- [init(\_:)](es_tcc_authorization_reason_t/init%28__%29.md)
- [init(rawValue:)](es_tcc_authorization_reason_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_tcc_authorization_reason_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# es_tcc_authorization_reason_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

ess_tcc_authorization_reason_t

## Declaration

```objectivec
typedef enum { ... } es_tcc_authorization_reason_t;
```

<a id="overview"></a>

## Overview

Represents the reason a TCC permission was updated.

## Topics

### Enumeration Cases

- [ES_TCC_AUTHORIZATION_REASON_APP_TYPE_POLICY](es_tcc_authorization_reason_app_type_policy.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_ENTITLED](es_tcc_authorization_reason_entitled.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_ERROR](es_tcc_authorization_reason_error.md)
- [ES_TCC_AUTHORIZATION_REASON_MDM_POLICY](es_tcc_authorization_reason_mdm_policy.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_MISSING_USAGE_STRING](es_tcc_authorization_reason_missing_usage_string.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_NONE](es_tcc_authorization_reason_none.md)
- [ES_TCC_AUTHORIZATION_REASON_PREFLIGHT_UNKNOWN](es_tcc_authorization_reason_preflight_unknown.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_PROMPT_CANCEL](es_tcc_authorization_reason_prompt_cancel.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_PROMPT_TIMEOUT](es_tcc_authorization_reason_prompt_timeout.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_SERVICE_OVERRIDE_POLICY](es_tcc_authorization_reason_service_override_policy.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_SERVICE_POLICY](es_tcc_authorization_reason_service_policy.md): A system process changed the authorization right
- [ES_TCC_AUTHORIZATION_REASON_SYSTEM_SET](es_tcc_authorization_reason_system_set.md): User changed the authorization right via Preferences
- [ES_TCC_AUTHORIZATION_REASON_USER_CONSENT](es_tcc_authorization_reason_user_consent.md)
- [ES_TCC_AUTHORIZATION_REASON_USER_SET](es_tcc_authorization_reason_user_set.md): User answered a prompt
