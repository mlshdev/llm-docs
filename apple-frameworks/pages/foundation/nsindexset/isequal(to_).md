> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/isequal(to:)](https://developer.apple.com/documentation/foundation/nsindexset/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the indexes in the receiving index set are the same indexes contained in another index set.

## Declaration

```swift
func isEqual(to indexSet: IndexSet) -> Bool
```

## Parameters

- `indexSet`: Index set being inquired about.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the indexes in the receiving index set are the same indexes `indexSet` contains, [false](https://developer.apple.com/documentation/swift/false) otherwise.

# isEqualToIndexSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the indexes in the receiving index set are the same indexes contained in another index set.

## Declaration

```objectivec
- (BOOL) isEqualToIndexSet:(NSIndexSet *) indexSet;
```

## Parameters

- `indexSet`: Index set being inquired about.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the indexes in the receiving index set are the same indexes `indexSet` contains, [false](https://developer.apple.com/documentation/swift/false) otherwise.
