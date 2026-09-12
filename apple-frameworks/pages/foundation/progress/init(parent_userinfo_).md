> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/init(parent:userinfo:)](https://developer.apple.com/documentation/foundation/progress/init(parent:userinfo:))

# init(parent:userInfo:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new progress instance.

## Declaration

```swift
init(parent parentProgressOrNil: Progress?, userInfo userInfoOrNil: [ProgressUserInfoKey : Any]? = nil)
```

## Parameters

- `parentProgressOrNil`: The containing [Progress](../progress.md) object, if any, to notify when reporting progress, or to consult when checking for cancellation.

  The only valid values are [current()](current%28%29.md) or `nil`.
- `userInfoOrNil`: The optional user information dictionary for the progress object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for the [Progress](../progress.md) class.

## See Also

### Creating Progress Objects

- [discreteProgress(totalUnitCount:)](discreteprogress%28totalunitcount_%29.md): Creates and returns a progress instance with the specified unit count that isn’t part of any existing progress tree.
- [init(totalUnitCount:)](init%28totalunitcount_%29.md): Creates and returns a progress instance.
- [init(totalUnitCount:parent:pendingUnitCount:)](init%28totalunitcount_parent_pendingunitcount_%29.md): Creates a progress instance for the specified progress object with a unit count that’s a portion of the containing object’s total unit count.

# initWithParent:userInfo: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new progress instance.

## Declaration

```objectivec
- (instancetype) initWithParent:(NSProgress *) parentProgressOrNil userInfo:(NSDictionary<NSString *,id> *) userInfoOrNil;
```

## Parameters

- `parentProgressOrNil`: The containing [NSProgress](../progress.md) object, if any, to notify when reporting progress, or to consult when checking for cancellation.

  The only valid values are [currentProgress](current%28%29.md) or `nil`.
- `userInfoOrNil`: The optional user information dictionary for the progress object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for the [NSProgress](../progress.md) class.

## See Also

### Creating Progress Objects

- [discreteProgressWithTotalUnitCount:](discreteprogress%28totalunitcount_%29.md): Creates and returns a progress instance with the specified unit count that isn’t part of any existing progress tree.
- [progressWithTotalUnitCount:](init%28totalunitcount_%29.md): Creates and returns a progress instance.
- [progressWithTotalUnitCount:parent:pendingUnitCount:](init%28totalunitcount_parent_pendingunitcount_%29.md): Creates a progress instance for the specified progress object with a unit count that’s a portion of the containing object’s total unit count.
