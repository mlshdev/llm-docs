> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/setalgebra/contains(_:)-xkyd

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given element is a member of the option set.

## Declaration

```swift
func contains(_ member: Self) -> Bool
```

## Parameters

- `member`: The element to look for in the option set.

<a id="return-value"></a>

## Return Value

`true` if the option set contains `member`; otherwise, `false`.

<a id="discussion"></a>

## Discussion

This example uses the `contains(_:)` method to check whether next-day shipping is in the `availableOptions` instance.

```swift
let availableOptions = ShippingOptions.express
if availableOptions.contains(.nextDay) {
    print("Next day shipping available")
}
// Prints "Next day shipping available"
```
