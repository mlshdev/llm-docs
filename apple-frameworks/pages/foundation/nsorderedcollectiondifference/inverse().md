> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectiondifference/inverse()](https://developer.apple.com/documentation/foundation/nsorderedcollectiondifference/inverse())

# inverse() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Calculate the difference between two objects in the reverse direction of comparison.

## Declaration

```swift
func inverse() -> Self
```

<a id="return-value"></a>

## Return Value

A copy of the receiver with all removals changed to insertions (and vice versa).

<a id="Discussion"></a>

## Discussion

Applying a difference to an ordered collection and then applying the inverse difference results in the original ordered collection:

```objc
NSArray *original = @[@"1", @"2"];
NSArray *modified = [original arrayByAddingObject:@"3"];

NSOrderedCollectionDifference *diff = [modified differenceFromArray:original];

NSArray *updated = [original arrayByApplyingDifference:diff];
// updated == [@"1", @"2", @"3"] == modified

NSOrderedCollectionDifference *inverse = [diff inverseDifference];

updated = [updated arrayByApplyingDifference:inverse];
// updated == [@"1", @"2"] == original
```

# inverseDifference (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Calculate the difference between two objects in the reverse direction of comparison.

## Declaration

```objectivec
- (instancetype) inverseDifference;
```

<a id="return-value"></a>

## Return Value

A copy of the receiver with all removals changed to insertions (and vice versa).

<a id="Discussion"></a>

## Discussion

Applying a difference to an ordered collection and then applying the inverse difference results in the original ordered collection:

```objc
NSArray *original = @[@"1", @"2"];
NSArray *modified = [original arrayByAddingObject:@"3"];

NSOrderedCollectionDifference *diff = [modified differenceFromArray:original];

NSArray *updated = [original arrayByApplyingDifference:diff];
// updated == [@"1", @"2", @"3"] == modified

NSOrderedCollectionDifference *inverse = [diff inverseDifference];

updated = [updated arrayByApplyingDifference:inverse];
// updated == [@"1", @"2"] == original
```
