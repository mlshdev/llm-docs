> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/sortdescriptors](https://developer.apple.com/documentation/coredata/nsfetchrequest/sortdescriptors)

# sortDescriptors (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The sort descriptors of the fetch request.

## Declaration

```swift
var sortDescriptors: [NSSortDescriptor]? { get set }
```

<a id="Discussion"></a>

## Discussion

The sort descriptors specify how the objects returned when the [NSFetchRequest](../nsfetchrequest.md) is issued should be ordered—for example, by last name and then by first name. The sort descriptors are applied in the order in which they appear in the `sortDescriptors` array (serially in lowest-array-index-first order).

A value of `nil` is treated as no sort descriptors.

# sortDescriptors (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The sort descriptors of the fetch request.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSArray<NSSortDescriptor *> * sortDescriptors;
```

<a id="Discussion"></a>

## Discussion

The sort descriptors specify how the objects returned when the [NSFetchRequest](../nsfetchrequest.md) is issued should be ordered—for example, by last name and then by first name. The sort descriptors are applied in the order in which they appear in the `sortDescriptors` array (serially in lowest-array-index-first order).

A value of `nil` is treated as no sort descriptors.
