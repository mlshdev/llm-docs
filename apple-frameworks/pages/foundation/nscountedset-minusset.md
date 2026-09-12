> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset-minusset](https://developer.apple.com/documentation/foundation/nscountedset-minusset)

# minusSet: (Swift)

**Framework:** Foundation  
**Kind:** Article

Removes each object in another given set from the receiving set, if present.

<a id="overview"></a>

## Overview

For each object in `otherSet` that is present in the set, this method decrements the associated count. If the count for an object is decremented to `0`, the object is removed from the set.

## See Also

### Related Documentation

- [NSCountedSet](nscountedset.md): A mutable, unordered collection of distinct objects that may appear more than once in the collection.

# minusSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Article

Removes each object in another given set from the receiving set, if present.

<a id="overview"></a>

## Overview

For each object in `otherSet` that is present in the set, this method decrements the associated count. If the count for an object is decremented to `0`, the object is removed from the set.

## See Also

### Related Documentation

- [NSCountedSet](nscountedset.md): A mutable, unordered collection of distinct objects that may appear more than once in the collection.

### Combining and Recombining Sets

- [unionSet:](nscountedset-unionset.md): Adds each object in another given set to the receiving set, if not present.
- [intersectSet:](nscountedset-intersectset.md): Removes from the receiving set each object that isn’t a member of another given set.
