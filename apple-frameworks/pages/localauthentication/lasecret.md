> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lasecret](https://developer.apple.com/documentation/localauthentication/lasecret)

# LASecret (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Data that’s protected by a persisted right.

## Declaration

```swift
class LASecret
```

<a id="overview"></a>

## Overview

You create [LASecret](lasecret.md) instances when you store an [LAPersistedRight](lapersistedright.md); you can’t create them directly.

## Topics

### Loading secret data

- [loadData(completion:)](lasecret/loaddata%28completion_%29.md): Retrieves data stored in a secret.

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

### Persistence

- [LARightStore](larightstore.md): A container for data protected by a right.
- [LAPersistedRight](lapersistedright.md): A right that gates access to a key and a secret.

# LASecret (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Data that’s protected by a persisted right.

## Declaration

```objectivec
@interface LASecret : NSObject
```

<a id="overview"></a>

## Overview

You create [LASecret](lasecret.md) instances when you store an [LAPersistedRight](lapersistedright.md); you can’t create them directly.

## Topics

### Loading secret data

- [loadDataWithCompletion:](lasecret/loaddata%28completion_%29.md): Retrieves data stored in a secret.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Persistence

- [LARightStore](larightstore.md): A container for data protected by a right.
- [LAPersistedRight](lapersistedright.md): A right that gates access to a key and a secret.
