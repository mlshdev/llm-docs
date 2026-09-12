> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogstore](https://developer.apple.com/documentation/oslog/oslogstore)

# OSLogStore (Swift)

**Framework:** OSLog  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A set of entries from the unified logging system.

## Declaration

```swift
class OSLogStore
```

<a id="overview"></a>

## Overview

Instances of this class represent a fixed range of entries and may be backed by a `logarchive` or your Mac’s local store.

In Swift, Use the [getEntries(with:at:matching:)](oslogstore/getentries%28with_at_matching_%29.md) function to retrieve a filtered array of log entries.

In Objective-C, use instances of this class to create [OSLogEnumerator](oslogenumerator.md) objects. One store can support multiple `OSLogEnumerator` instances concurrently.

## Topics

### Creating Log Stores

- [init(url:)](oslogstore/init%28url_%29-5v3w7.md): Creates a log store based on a log archive.
- [local()](oslogstore/local%28%29.md): Creates a log store representing the Mac’s local store.

### Accessing Position

- [position(date:)](oslogstore/position%28date_%29.md): Returns a position representing the time specified.
- [position(timeIntervalSinceEnd:)](oslogstore/position%28timeintervalsinceend_%29.md): Returns a position representing time since the end of the time range that the entries span.
- [position(timeIntervalSinceLatestBoot:)](oslogstore/position%28timeintervalsincelatestboot_%29.md): Returns a position representing time since the last boot in the series of entries.

### Accessing Entries

- [getEntries(with:at:matching:)](oslogstore/getentries%28with_at_matching_%29.md): Returns a sequence of log entries filtered by the parameters passed in.

### Initializers

- [init()](oslogstore/init%28%29.md): Deprecated.
- [init(scope:)](oslogstore/init%28scope_%29.md)
- [init(URL:)](oslogstore/init%28url_%29-5nhb2.md)

### Enumerations

- [OSLogStore.Scope](oslogstore/scope.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Read Log Entries

- [OSLogEnumerator](oslogenumerator.md): An enumerator that can access and list log entries.

# OSLogStore (Objective-C)

**Framework:** OSLog  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A set of entries from the unified logging system.

## Declaration

```objectivec
@interface OSLogStore : NSObject
```

<a id="overview"></a>

## Overview

Instances of this class represent a fixed range of entries and may be backed by a `logarchive` or your Mac’s local store.

In Swift, Use the [getEntries(with:at:matching:)](oslogstore/getentries%28with_at_matching_%29.md) function to retrieve a filtered array of log entries.

In Objective-C, use instances of this class to create [OSLogEnumerator](oslogenumerator.md) objects. One store can support multiple `OSLogEnumerator` instances concurrently.

## Topics

### Creating Log Stores

- [storeWithURL:error:](oslogstore/init%28url_%29-5v3w7.md): Creates a log store based on a log archive.
- [localStoreAndReturnError:](oslogstore/local%28%29.md): Creates a log store representing the Mac’s local store.

### Accessing Position

- [positionWithDate:](oslogstore/position%28date_%29.md): Returns a position representing the time specified.
- [positionWithTimeIntervalSinceEnd:](oslogstore/position%28timeintervalsinceend_%29.md): Returns a position representing time since the end of the time range that the entries span.
- [positionWithTimeIntervalSinceLatestBoot:](oslogstore/position%28timeintervalsincelatestboot_%29.md): Returns a position representing time since the last boot in the series of entries.

### Accessing Entries

- [entriesEnumeratorAndReturnError:](oslogstore/entriesenumeratorandreturnerror_.md): Returns a log enumerator with default options for viewing the entries.
- [entriesEnumeratorWithOptions:position:predicate:error:](oslogstore/entriesenumeratorwithoptions_position_predicate_error_.md): Returns a log enumerator based on an underlying store.

### Initializers

- [init](oslogstore/init%28%29.md): Deprecated.
- [storeWithScope:error:](oslogstore/init%28scope_%29.md)

### Enumerations

- [OSLogStoreScope](oslogstore/scope.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Read Log Entries

- [OSLogEnumerator](oslogenumerator.md): An enumerator that can access and list log entries.
