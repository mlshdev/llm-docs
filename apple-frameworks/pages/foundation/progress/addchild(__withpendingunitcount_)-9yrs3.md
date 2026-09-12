> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/addchild(_:withpendingunitcount:)-9yrs3](https://developer.apple.com/documentation/foundation/progress/addchild(_:withpendingunitcount:)-9yrs3)

# addChild(\_:withPendingUnitCount:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a process object as a suboperation of a progress tree.

## Declaration

```swift
func addChild(_ child: Progress, withPendingUnitCount inUnitCount: Int64)
```

## Parameters

- `child`: The progress instance to add to the progress tree.
- `inUnitCount`: The number of units of work for the new suboperation to complete.

<a id="discussion"></a>

## Discussion

You assign the suboperation a portion of the receiver’s total unit count according to `inUnitCount`.

# addChild:withPendingUnitCount: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a process object as a suboperation of a progress tree.

## Declaration

```objectivec
- (void) addChild:(NSProgress *) child withPendingUnitCount:(int64_t) inUnitCount;
```

## Parameters

- `child`: The progress instance to add to the progress tree.
- `inUnitCount`: The number of units of work for the new suboperation to complete.

<a id="discussion"></a>

## Discussion

You assign the suboperation a portion of the receiver’s total unit count according to `inUnitCount`.
