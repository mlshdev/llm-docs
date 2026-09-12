> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/execute()](https://developer.apple.com/documentation/coredata/nsfetchrequest/execute())

# execute() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Executes the fetch request against the managed object context that is associated with the current queue.

## Declaration

```swift
func execute() throws -> [ResultType]
```

<a id="Discussion"></a>

## Discussion

Calling `execute` on an [NSFetchRequest](../nsfetchrequest.md) will cause the [NSFetchRequest](../nsfetchrequest.md) to run against the managed object context ([NSManagedObjectContext](../nsmanagedobjectcontext.md)) that is associated with the queue on which the `execute` is called.

# execute: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Executes the fetch request against the managed object context that is associated with the current queue.

## Declaration

```objectivec
- (NSArray<id<NSFetchRequestResult>> *) execute:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

Calling `execute` on an [NSFetchRequest](../nsfetchrequest.md) will cause the [NSFetchRequest](../nsfetchrequest.md) to run against the managed object context ([NSManagedObjectContext](../nsmanagedobjectcontext.md)) that is associated with the queue on which the `execute` is called.
