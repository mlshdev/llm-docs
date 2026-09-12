> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponentsystem/subscript(_:)](https://developer.apple.com/documentation/gameplaykit/gkcomponentsystem/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the component at the specified index in the system’s list of components.

## Declaration

```swift
subscript(idx: Int) -> ComponentType { get }
```

## Parameters

- `idx`: A valid index to the [components](components.md) array.

<a id="return-value"></a>

## Return Value

The component at the specified index in the [components](components.md) array.

<a id="Discussion"></a>

## Discussion

This method is equivalent to accessing objects by index in the [components](components.md) array, but allows access using subscript syntax on the component system itself.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the component at the specified index in the system’s list of components.

## Declaration

```objectivec
- (ComponentType) objectAtIndexedSubscript:(NSUInteger) idx;
```

## Parameters

- `idx`: A valid index to the [components](components.md) array.

<a id="return-value"></a>

## Return Value

The component at the specified index in the [components](components.md) array.

<a id="Discussion"></a>

## Discussion

This method is equivalent to accessing objects by index in the [components](components.md) array, but allows access using subscript syntax on the component system itself.
