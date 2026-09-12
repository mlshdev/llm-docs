> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset-intersectset](https://developer.apple.com/documentation/foundation/nscountedset-intersectset)

# intersectSet: (Swift)

**Framework:** Foundation  
**Kind:** Article

Removes from the receiving set each object that isn’t a member of another given set.

<a id="overview"></a>

## Overview

For each object in the set that is not present in `otherSet`, this method decrements the associated count. If the count for an object is decremented to `0`, the object is removed from the set.

## See Also

### Related Documentation

- [NSCountedSet](nscountedset.md): A mutable, unordered collection of distinct objects that may appear more than once in the collection.

# intersectSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Article

Removes from the receiving set each object that isn’t a member of another given set.

<a id="overview"></a>

## Overview

For each object in the set that is not present in `otherSet`, this method decrements the associated count. If the count for an object is decremented to `0`, the object is removed from the set.

## See Also

### Related Documentation

- [NSCountedSet](nscountedset.md): A mutable, unordered collection of distinct objects that may appear more than once in the collection.

### Combining and Recombining Sets

- [unionSet:](nscountedset-unionset.md): Adds each object in another given set to the receiving set, if not present.
- [minusSet:](nscountedset-minusset.md): Removes each object in another given set from the receiving set, if present.
