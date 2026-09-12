> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/intersection(_:)-73uhs](https://developer.apple.com/documentation/swift/setalgebra/intersection(_:)-73uhs)

# intersection(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new option set with only the elements contained in both this set and the given set.

## Declaration

```swift
func intersection(_ other: Self) -> Self
```

## Parameters

- `other`: An option set.

<a id="return-value"></a>

## Return Value

A new option set with only the elements contained in both this set and `other`.

<a id="discussion"></a>

## Discussion

This example uses the `intersection(_:)` method to limit the available shipping options to what can be used with a PO Box destination.

```swift
// Can only ship standard or priority to PO Boxes
let poboxShipping: ShippingOptions = [.standard, .priority]
let memberShipping: ShippingOptions =
        [.standard, .priority, .secondDay]

let availableOptions = memberShipping.intersection(poboxShipping)
print(availableOptions.contains(.priority))
// Prints "true"
print(availableOptions.contains(.secondDay))
// Prints "false"
```
