> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_tcc_identity_type_t](https://developer.apple.com/documentation/endpointsecurity/es_tcc_identity_type_t)

# es_tcc_identity_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

es_tcc_identity_type_t

## Declaration

```swift
struct es_tcc_identity_type_t
```

<a id="overview"></a>

## Overview

Represent the identity type of an application which has access to a TCC service.

## Topics

### Initializers

- [init(\_:)](es_tcc_identity_type_t/init%28__%29.md)
- [init(rawValue:)](es_tcc_identity_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_tcc_identity_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# es_tcc_identity_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

es_tcc_identity_type_t

## Declaration

```objectivec
typedef enum { ... } es_tcc_identity_type_t;
```

<a id="overview"></a>

## Overview

Represent the identity type of an application which has access to a TCC service.

## Topics

### Enumeration Cases

- [ES_TCC_IDENTITY_TYPE_BUNDLE_ID](es_tcc_identity_type_bundle_id.md)
- [ES_TCC_IDENTITY_TYPE_EXECUTABLE_PATH](es_tcc_identity_type_executable_path.md)
- [ES_TCC_IDENTITY_TYPE_FILE_PROVIDER_DOMAIN_ID](es_tcc_identity_type_file_provider_domain_id.md)
- [ES_TCC_IDENTITY_TYPE_POLICY_ID](es_tcc_identity_type_policy_id.md)
