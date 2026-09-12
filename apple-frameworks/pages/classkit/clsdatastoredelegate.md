> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastoredelegate](https://developer.apple.com/documentation/classkit/clsdatastoredelegate)

# CLSDataStoreDelegate (Swift)

**Framework:** ClassKit  
**Kind:** Protocol  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

An interface the data store uses to request new contexts.

## Declaration

```swift
protocol CLSDataStoreDelegate : NSObjectProtocol
```

## Mentioned In

- [Building missing contexts](building-missing-contexts.md)

<a id="overview"></a>

## Overview

When you request a context from the data store, for example using a call to the [descendant(matchingIdentifierPath:completion:)](clscontext/descendant%28matchingidentifierpath_completion_%29.md) method, the data store first tries to locate an existing context matching the search criterion (an identifier path in this case) in its database. Depending on certain conditions, the context might already exist in the database from the last time you requested it. If it does, the data store returns the stored context. But if it doesn’t exist, the data store asks its delegate to build a new context.

Adopt the data store delegate protocol to provide contexts on demand.

You can alternatively build contexts directly without relying on the delegate callback. However, it’s generally most efficient to use the delegate protocol, building contexts only when they’re missing from the data store.

## Topics

### Creating Contexts

- [createContext(forIdentifier:parentContext:parentIdentifierPath:)](clsdatastoredelegate/createcontext%28foridentifier_parentcontext_parentidentifierpath_%29.md): Asks the delegate for a new context with the given identifier for the given parent context.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the delegate

- [Building missing contexts](building-missing-contexts.md): Create and initialize missing contexts.
- [delegate](clsdatastore/delegate.md): The data store delegate instance.

# CLSDataStoreDelegate (Objective-C)

**Framework:** ClassKit  
**Kind:** Protocol  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An interface the data store uses to request new contexts.

## Declaration

```objectivec
@protocol CLSDataStoreDelegate <NSObject>
```

## Mentioned In

- [Building missing contexts](building-missing-contexts.md)

<a id="overview"></a>

## Overview

When you request a context from the data store, for example using a call to the [descendantMatchingIdentifierPath:completion:](clscontext/descendant%28matchingidentifierpath_completion_%29.md) method, the data store first tries to locate an existing context matching the search criterion (an identifier path in this case) in its database. Depending on certain conditions, the context might already exist in the database from the last time you requested it. If it does, the data store returns the stored context. But if it doesn’t exist, the data store asks its delegate to build a new context.

Adopt the data store delegate protocol to provide contexts on demand.

You can alternatively build contexts directly without relying on the delegate callback. However, it’s generally most efficient to use the delegate protocol, building contexts only when they’re missing from the data store.

## Topics

### Creating Contexts

- [createContextForIdentifier:parentContext:parentIdentifierPath:](clsdatastoredelegate/createcontext%28foridentifier_parentcontext_parentidentifierpath_%29.md): Asks the delegate for a new context with the given identifier for the given parent context.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the delegate

- [Building missing contexts](building-missing-contexts.md): Create and initialize missing contexts.
- [delegate](clsdatastore/delegate.md): The data store delegate instance.
