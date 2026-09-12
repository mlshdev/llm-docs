> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/union(_:)-7mfo6](https://developer.apple.com/documentation/swift/setalgebra/union(_:)-7mfo6)

# union(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new option set of the elements contained in this set, in the given set, or in both.

## Declaration

```swift
func union(_ other: Self) -> Self
```

## Parameters

- `other`: An option set.

<a id="return-value"></a>

## Return Value

A new option set made up of the elements contained in this set, in `other`, or in both.

<a id="discussion"></a>

## Discussion

This example uses the `union(_:)` method to add two more shipping options to the default set.

```swift
let defaultShipping = ShippingOptions.standard
let memberShipping = defaultShipping.union([.secondDay, .priority])
print(memberShipping.contains(.priority))
// Prints "true"
```
