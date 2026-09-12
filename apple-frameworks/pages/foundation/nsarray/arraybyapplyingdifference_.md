> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/arraybyapplyingdifference:](https://developer.apple.com/documentation/foundation/nsarray/arraybyapplyingdifference:)

# arrayByApplyingDifference:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new array by applying a difference object to an existing array.

## Declaration

```objectivec
- (NSArray<id> *) arrayByApplyingDifference:(NSOrderedCollectionDifference<id> *) difference;
```

<a id="Discussion"></a>

## Discussion

The following example computes the difference between two arrays, then applies the difference to create an array that duplicates the original:

```objc
NSArray *original = @[@"1", @"2"];
NSArray *modified = @[@"1", @"2", @"3"];

NSOrderedCollectionDifference *diff = [modified differenceFromArray:original];
// diff.hasChanges == true
// diff.insertions.count == 
// diff.removals.count == 0

NSArray *updated = [original arrayByApplyingDifference:diff];
// updated == [@"1", @"2", @"3"]

```
