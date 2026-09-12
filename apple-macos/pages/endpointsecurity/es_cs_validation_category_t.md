> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_cs_validation_category_t](https://developer.apple.com/documentation/endpointsecurity/es_cs_validation_category_t)

# es_cs_validation_category_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

es_cs_validation_category

## Declaration

```swift
struct es_cs_validation_category_t
```

<a id="overview"></a>

## Overview

Indicates the code signature validation policy that was applied to a binary

## Topics

### Initializers

- [init(\_:)](es_cs_validation_category_t/init%28__%29.md)
- [init(rawValue:)](es_cs_validation_category_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_cs_validation_category_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# es_cs_validation_category_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

es_cs_validation_category

## Declaration

```objectivec
typedef enum { ... } es_cs_validation_category_t;
```

<a id="overview"></a>

## Overview

Indicates the code signature validation policy that was applied to a binary

## Topics

### Enumeration Cases

- [ES_CS_VALIDATION_CATEGORY_APP_STORE](es_cs_validation_category_app_store.md)
- [ES_CS_VALIDATION_CATEGORY_DEVELOPER_ID](es_cs_validation_category_developer_id.md)
- [ES_CS_VALIDATION_CATEGORY_DEVELOPMENT](es_cs_validation_category_development.md)
- [ES_CS_VALIDATION_CATEGORY_ENTERPRISE](es_cs_validation_category_enterprise.md)
- [ES_CS_VALIDATION_CATEGORY_INVALID](es_cs_validation_category_invalid.md)
- [ES_CS_VALIDATION_CATEGORY_LOCAL_SIGNING](es_cs_validation_category_local_signing.md)
- [ES_CS_VALIDATION_CATEGORY_NONE](es_cs_validation_category_none.md)
- [ES_CS_VALIDATION_CATEGORY_OOPJIT](es_cs_validation_category_oopjit.md)
- [ES_CS_VALIDATION_CATEGORY_PLATFORM](es_cs_validation_category_platform.md)
- [ES_CS_VALIDATION_CATEGORY_ROSETTA](es_cs_validation_category_rosetta.md)
- [ES_CS_VALIDATION_CATEGORY_TESTFLIGHT](es_cs_validation_category_testflight.md)
