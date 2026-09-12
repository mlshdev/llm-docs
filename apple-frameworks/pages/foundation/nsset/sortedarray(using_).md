> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/sortedarray(using:)](https://developer.apple.com/documentation/foundation/nsset/sortedarray(using:))

# sortedArray(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the set’s content sorted as specified by a given array of sort descriptors.

## Declaration

```swift
func sortedArray(using sortDescriptors: [NSSortDescriptor]) -> [Any]
```

## Parameters

- `sortDescriptors`: An array of [NSSortDescriptor](../nssortdescriptor.md) objects.

<a id="return-value"></a>

## Return Value

An NSArray containing the set’s content sorted as specified by `sortDescriptors`.

<a id="Discussion"></a>

## Discussion

The first descriptor specifies the primary key path to be used in sorting the set’s contents. Any subsequent descriptors are used to further refine sorting of objects with duplicate values. See [NSSortDescriptor](../nssortdescriptor.md) for additional information.

# sortedArrayUsingDescriptors: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the set’s content sorted as specified by a given array of sort descriptors.

## Declaration

```objectivec
- (NSArray<id> *) sortedArrayUsingDescriptors:(NSArray<NSSortDescriptor *> *) sortDescriptors;
```

## Parameters

- `sortDescriptors`: An array of [NSSortDescriptor](../nssortdescriptor.md) objects.

<a id="return-value"></a>

## Return Value

An NSArray containing the set’s content sorted as specified by `sortDescriptors`.

<a id="Discussion"></a>

## Discussion

The first descriptor specifies the primary key path to be used in sorting the set’s contents. Any subsequent descriptors are used to further refine sorting of objects with duplicate values. See [NSSortDescriptor](../nssortdescriptor.md) for additional information.
