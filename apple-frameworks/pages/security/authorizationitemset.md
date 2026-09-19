> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/authorizationitemset

# AuthorizationItemSet (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A structure containing a set of authorization items.

## Declaration

```swift
struct AuthorizationItemSet
```

<a id="Overview"></a>

## Overview

Because it is actually a set, the list of items should not contain any duplicates.

## Topics

### Initializers

- [init()](authorizationitemset/init%28%29.md): Initializes an authorization item set.
- [init(count:items:)](authorizationitemset/init%28count_items_%29.md): Initializes an authorization item set with the given items.

### Instance Properties

- [count](authorizationitemset/count.md): The number of elements in the `items` array.
- [items](authorizationitemset/items.md): A pointer to an array of authorization items.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# AuthorizationItemSet (Objective-C)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A structure containing a set of authorization items.

## Declaration

```objectivec
typedef struct { ... } AuthorizationItemSet;
```

<a id="Overview"></a>

## Overview

Because it is actually a set, the list of items should not contain any duplicates.

## Topics

### Instance Properties

- [count](authorizationitemset/count.md): The number of elements in the `items` array.
- [items](authorizationitemset/items.md): A pointer to an array of authorization items.
