> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_tcc_event_type_t](https://developer.apple.com/documentation/endpointsecurity/es_tcc_event_type_t)

# es_tcc_event_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
struct es_tcc_event_type_t
```

<a id="overview"></a>

## Overview

Represent the type of TCC modification event.

- ES_TCC_EVENT_TYPE_UNKNOWN: Unknown prior state.
- ES_TCC_EVENT_TYPE_CREATE: A new TCC authorization record was created.
- ES_TCC_EVENT_TYPE_MODIFY: An existing TCC authorization record was modified.
- ES_TCC_EVENT_TYPE_DELETE: An existing TCC authorization record was deleted.

## Topics

### Initializers

- [init(\_:)](es_tcc_event_type_t/init%28__%29.md)
- [init(rawValue:)](es_tcc_event_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_tcc_event_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# es_tcc_event_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef enum { ... } es_tcc_event_type_t;
```

<a id="overview"></a>

## Overview

Represent the type of TCC modification event.

- ES_TCC_EVENT_TYPE_UNKNOWN: Unknown prior state.
- ES_TCC_EVENT_TYPE_CREATE: A new TCC authorization record was created.
- ES_TCC_EVENT_TYPE_MODIFY: An existing TCC authorization record was modified.
- ES_TCC_EVENT_TYPE_DELETE: An existing TCC authorization record was deleted.

## Topics

### Enumeration Cases

- [ES_TCC_EVENT_TYPE_CREATE](es_tcc_event_type_create.md)
- [ES_TCC_EVENT_TYPE_DELETE](es_tcc_event_type_delete.md)
- [ES_TCC_EVENT_TYPE_MODIFY](es_tcc_event_type_modify.md)
- [ES_TCC_EVENT_TYPE_UNKNOWN](es_tcc_event_type_unknown.md)
