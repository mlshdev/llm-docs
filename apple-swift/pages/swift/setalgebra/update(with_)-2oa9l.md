> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/setalgebra/update(with:)-2oa9l

# update(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts the given element into the set.

## Declaration

```swift
@discardableResult mutating func update(with newMember: Self.Element) -> Self.Element?
```

<a id="return-value"></a>

## Return Value

The intersection of `[newMember]` and the set if the intersection was nonempty; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

If `newMember` is not contained in the set but subsumes current members of the set, the subsumed members are returned.

```swift
var options: ShippingOptions = [.secondDay, .priority]
let replaced = options.update(with: .express)
print(replaced == .secondDay)
// Prints "true"
```
