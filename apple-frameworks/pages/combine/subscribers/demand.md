> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/demand](https://developer.apple.com/documentation/combine/subscribers/demand)

# Subscribers.Demand

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A requested number of items, sent to a publisher from a subscriber through the subscription.

## Declaration

```swift
@frozen struct Demand
```

## Mentioned In

- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)

## Topics

### Creating a demand instance

- [max(\_:)](demand/max%28__%29.md): Creates a demand for the given maximum number of elements.

### Using special demands

- [unlimited](demand/unlimited.md): A request for as many values as the publisher can produce.
- [none](demand/none.md): A request for no elements from the publisher.

### Inspecing demand properties

- [max](demand/max.md): The number of requested values.

### Encoding and decoding

- [encode(to:)](demand/encode%28to_%29.md): Encodes the demand to the provide encoder.
- [init(from:)](demand/init%28from_%29.md): Creates a demand instance from a decoder.

### Performing mathematical operations

- [\*(\_:\_:)](demand/_%28____%29.md): Returns the result of multiplying a demand by an integer.
- [\*=(\_:\_:)](demand/_=%28____%29.md): Multiplies a demand by an integer, and assigns the result to the demand.
- [+(\_:\_:)](demand/+%28____%29-2hdad.md): Returns the result of adding two demands. When adding any value to `.unlimited`, the result is `.unlimited`.
- [+(\_:\_:)](demand/+%28____%29-902we.md): Returns the result of adding an integer to a demand.
- [+=(\_:\_:)](demand/+=%28____%29-20lis.md): Adds two demands, and assigns the result to the first demand.
- [+=(\_:\_:)](demand/+=%28____%29-3k1hv.md): Adds an integer to a demand, and assigns the result to the demand.
- [-(\_:\_:)](demand/-%28____%29-1r0gm.md): Returns the result of subtracting one demand from another.
- [-(\_:\_:)](demand/-%28____%29-6mw4s.md): Returns the result of subtracting an integer from a demand.
- [-=(\_:\_:)](demand/-=%28____%29-1d0m9.md): Subtracts one demand from another, and assigns the result to the first demand.
- [-=(\_:\_:)](demand/-=%28____%29-9pwnc.md): Subtracts an integer from a demand, and assigns the result to the demand.

### Comparing demands

- [==(\_:\_:)](demand/==%28____%29-4oy8i.md): Returns a Boolean value that indicates whether a given number of elements matches the request of a given demand.
- [==(\_:\_:)](demand/==%28____%29-7246z.md): Returns a Boolean value that indicates whether a demand requests the given number of elements.
- [!=(\_:\_:)](demand/!=%28____%29-3j2h8.md): Returns a Boolean value that indicates whether an integer is unequal to a demand.
- [!=(\_:\_:)](demand/!=%28____%29-2dj1p.md): Returns a Boolean value that indicates whether a demand isn’t equal to an integer.
- [\<(\_:\_:)](demand/_%28____%29-1wuod.md): Returns a Boolean that indicates a given number of elements is less than the maximum specified by the demand.
- [\<(\_:\_:)](demand/_%28____%29-ciby.md): Returns a Boolean that indicates whether the demand requests fewer than the given number of elements.
- [\<(\_:\_:)](demand/_%28____%29-8nf1g.md): Returns a Boolean that indicates whether the first demand requests fewer elements than the second.
- [\<=(\_:\_:)](demand/_=%28____%29-5f62z.md): Returns a Boolean value that indicates a given number of elements is less than or equal the maximum specified by the demand.
- [\<=(\_:\_:)](demand/_=%28____%29-2otvi.md): Returns a Boolean that indicates whether the demand requests fewer or the same number of elements as the given integer.
- [\<=(\_:\_:)](demand/_=%28____%29-9cywv.md): Returns a Boolean value that indicates whether the first demand requests fewer or the same number of elements as the second.
- [\>(\_:\_:)](demand/_%28____%29-35p6f.md): Returns a Boolean that indicates a given number of elements is greater than the maximum specified by the demand.
- [\>(\_:\_:)](demand/_%28____%29-4k1xp.md): Returns a Boolean that indicates whether the demand requests more than the given number of elements.
- [\>(\_:\_:)](demand/_%28____%29-74yle.md): Returns a Boolean that indicates whether the first demand requests more elements than the second.
- [\>=(\_:\_:)](demand/_=%28____%29-6lv9s.md): Returns a Boolean that indicates a given number of elements is greater than or equal to the maximum specified by the demand.
- [\>=(\_:\_:)](demand/_=%28____%29-28c1e.md): Returns a Boolean that indicates whether the first demand requests more or the same number of elements as the second.
- [\>=(\_:\_:)](demand/_=%28____%29-5xnt.md): Returns a Boolean that indicates whether the first demand requests more or the same number of elements as the second.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
