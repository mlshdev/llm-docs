> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfastenumeration/countbyenumerating(with:objects:count:)](https://developer.apple.com/documentation/foundation/nsfastenumeration/countbyenumerating(with:objects:count:))

# countByEnumerating(with:objects:count:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a C array of objects over which the sender should iterate, and as the return value the number of objects in the array.

## Declaration

```swift
func countByEnumerating(with state: UnsafeMutablePointer<NSFastEnumerationState>, objects buffer: AutoreleasingUnsafeMutablePointer<AnyObject?>, count len: Int) -> Int
```

## Parameters

- `state`: Context information that is used in the enumeration to, in addition to other possibilities, ensure that the collection has not been mutated.
- `buffer`: A C array of objects over which the sender is to iterate.
- `len`: The maximum number of objects to return in `stackbuf`.

<a id="return-value"></a>

## Return Value

The number of objects returned in `stackbuf`. Returns `0` when the iteration is finished.

<a id="Discussion"></a>

## Discussion

The state structure is assumed to be of stack local memory, so you can recast the passed in state structure to one more suitable for your iteration.

# countByEnumeratingWithState:objects:count: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a C array of objects over which the sender should iterate, and as the return value the number of objects in the array.

## Declaration

```objectivec
- (NSUInteger) countByEnumeratingWithState:(NSFastEnumerationState *) state objects:(id[]) buffer count:(NSUInteger) len;
```

## Parameters

- `state`: Context information that is used in the enumeration to, in addition to other possibilities, ensure that the collection has not been mutated.
- `buffer`: A C array of objects over which the sender is to iterate.
- `len`: The maximum number of objects to return in `stackbuf`.

<a id="return-value"></a>

## Return Value

The number of objects returned in `stackbuf`. Returns `0` when the iteration is finished.

<a id="Discussion"></a>

## Discussion

The state structure is assumed to be of stack local memory, so you can recast the passed in state structure to one more suitable for your iteration.
