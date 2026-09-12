> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_deadline_miss_mode_t](https://developer.apple.com/documentation/endpointsecurity/es_deadline_miss_mode_t)

# es_deadline_miss_mode_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

Deadline miss mode for ES clients

## Declaration

```swift
struct es_deadline_miss_mode_t
```

<a id="overview"></a>

## Overview

Determines how the system responds when a client fails to respond to an auth event within the deadline.

## Topics

### Initializers

- [init(\_:)](es_deadline_miss_mode_t/init%28__%29.md)
- [init(rawValue:)](es_deadline_miss_mode_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_deadline_miss_mode_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# es_deadline_miss_mode_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Deadline miss mode for ES clients

## Declaration

```objectivec
typedef enum { ... } es_deadline_miss_mode_t;
```

<a id="overview"></a>

## Overview

Determines how the system responds when a client fails to respond to an auth event within the deadline.

## Topics

### Enumeration Cases

- [ES_DEADLINE_MISS_MODE_FAIL_CLOSED](es_deadline_miss_mode_fail_closed.md): Deny the operation when client fails to respond, but don’t kill the client
- [ES_DEADLINE_MISS_MODE_FAIL_OPEN](es_deadline_miss_mode_fail_open.md): Allow the operation when client fails to respond, but don’t kill the client
- [ES_DEADLINE_MISS_MODE_KILL](es_deadline_miss_mode_kill.md): Kill the client when it fails to respond to an auth event (default behavior)
