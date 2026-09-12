> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_tcc_modify_t](https://developer.apple.com/documentation/endpointsecurity/es_event_tcc_modify_t)

# es_event_tcc_modify_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
struct es_event_tcc_modify_t
```

<a id="overview"></a>

## Overview

TCC Modification Event. Occurs when a TCC permission is granted or revoked.

> **Note**

> This event type does not support caching.

## Topics

### Initializers

- [init()](es_event_tcc_modify_t/init%28%29.md)
- [init(service:identity:identity_type:update_type:instigator_token:instigator:responsible_token:responsible:right:reason:)](es_event_tcc_modify_t/init%28service_identity_identity_type_update_type_instigator_token_instigator_responsible_token_responsible_right_reason_%29.md)

### Instance Properties

- [identity](es_event_tcc_modify_t/identity.md)
- [identity_type](es_event_tcc_modify_t/identity_type.md): es_tcc_identity_type_t
- [instigator](es_event_tcc_modify_t/instigator.md)
- [instigator_token](es_event_tcc_modify_t/instigator_token.md)
- [reason](es_event_tcc_modify_t/reason.md): ess_tcc_authorization_reason_t
- [responsible](es_event_tcc_modify_t/responsible.md)
- [responsible_token](es_event_tcc_modify_t/responsible_token.md)
- [right](es_event_tcc_modify_t/right.md): ess_tcc_authorization_right_t
- [service](es_event_tcc_modify_t/service.md)
- [update_type](es_event_tcc_modify_t/update_type.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# es_event_tcc_modify_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef struct { ... } es_event_tcc_modify_t;
```

<a id="overview"></a>

## Overview

TCC Modification Event. Occurs when a TCC permission is granted or revoked.

> **Note**

> This event type does not support caching.

## Topics

### Instance Properties

- [identity](es_event_tcc_modify_t/identity.md)
- [identity_type](es_event_tcc_modify_t/identity_type.md): es_tcc_identity_type_t
- [instigator](es_event_tcc_modify_t/instigator.md)
- [instigator_token](es_event_tcc_modify_t/instigator_token.md)
- [reason](es_event_tcc_modify_t/reason.md): ess_tcc_authorization_reason_t
- [responsible](es_event_tcc_modify_t/responsible.md)
- [responsible_token](es_event_tcc_modify_t/responsible_token.md)
- [right](es_event_tcc_modify_t/right.md): ess_tcc_authorization_right_t
- [service](es_event_tcc_modify_t/service.md)
- [update_type](es_event_tcc_modify_t/update_type.md)
