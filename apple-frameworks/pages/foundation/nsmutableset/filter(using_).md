> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset/filter(using:)](https://developer.apple.com/documentation/foundation/nsmutableset/filter(using:))

# filter(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against the set’s content and removes from the set those objects for which the predicate returns false.

## Declaration

```swift
func filter(using predicate: NSPredicate)
```

## Parameters

- `predicate`: A predicate.

<a id="Discussion"></a>

## Discussion

The following example illustrates the use of this method.

```objc
NSMutableSet *mutableSet =
    [NSMutableSet setWithObjects:@"One", @"Two", @"Three", @"Four", nil];
NSPredicate *predicate =
    [NSPredicate predicateWithFormat:@"SELF beginswith 'T'"];
[mutableSet filterUsingPredicate:predicate];
// mutableSet contains (Two, Three)
```

## See Also

### Adding and removing entries

- [add(\_:)](add%28__%29.md): Adds a given object to the set, if it is not already a member.
- [remove(\_:)](remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the set of all of its members.
- [addObjects(from:)](addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.

# filterUsingPredicate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against the set’s content and removes from the set those objects for which the predicate returns false.

## Declaration

```objectivec
- (void) filterUsingPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: A predicate.

<a id="Discussion"></a>

## Discussion

The following example illustrates the use of this method.

```objc
NSMutableSet *mutableSet =
    [NSMutableSet setWithObjects:@"One", @"Two", @"Three", @"Four", nil];
NSPredicate *predicate =
    [NSPredicate predicateWithFormat:@"SELF beginswith 'T'"];
[mutableSet filterUsingPredicate:predicate];
// mutableSet contains (Two, Three)
```

## See Also

### Adding and removing entries

- [addObject:](add%28__%29.md): Adds a given object to the set, if it is not already a member.
- [removeObject:](remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects](removeallobjects%28%29.md): Empties the set of all of its members.
- [addObjectsFromArray:](addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.
