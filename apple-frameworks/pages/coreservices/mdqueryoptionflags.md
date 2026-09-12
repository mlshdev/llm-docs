> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mdqueryoptionflags](https://developer.apple.com/documentation/coreservices/mdqueryoptionflags)

# MDQueryOptionFlags (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Specify the execution mode for a query.

## Declaration

```swift
struct MDQueryOptionFlags
```

## Topics

### Constants

- [kMDQuerySynchronous](kmdquerysynchronous.md): Specifies that a query should block during the initial gather phase. The query’s run loop will run in the default mode. If this option is not specified the query function returns immediately after starting the query asynchronously.
- [kMDQueryWantsUpdates](kmdquerywantsupdates.md)
- [kMDQueryAllowFSTranslation](kmdqueryallowfstranslation.md)

### Initializers

- [init(\_:)](mdqueryoptionflags/1443626-init.md)
- [init(rawValue:)](mdqueryoptionflags/1444315-init.md)

### Instance Properties

- [rawValue](mdqueryoptionflags/1448284-rawvalue.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

# MDQueryOptionFlags (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Specify the execution mode for a query.

## Declaration

```objectivec
typedef enum MDQueryOptionFlags : unsigned int {
    ...
} MDQueryOptionFlags;
```

## Topics

### Constants

- [kMDQuerySynchronous](mdqueryoptionflags/kmdquerysynchronous.md): Specifies that a query should block during the initial gather phase. The query’s run loop will run in the default mode. If this option is not specified the query function returns immediately after starting the query asynchronously.
- [kMDQueryWantsUpdates](mdqueryoptionflags/kmdquerywantsupdates.md)
- [kMDQueryAllowFSTranslation](mdqueryoptionflags/kmdqueryallowfstranslation.md)
