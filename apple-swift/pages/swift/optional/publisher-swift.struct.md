> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional/publisher-swift.struct](https://developer.apple.com/documentation/swift/optional/publisher-swift.struct)

# Optional.Publisher

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of a Combine publisher that publishes the value of a Swift optional instance to each subscriber exactly once, if the instance has any value at all.

## Declaration

```swift
struct Publisher
```

<a id="overview"></a>

## Overview

In contrast with the [Just](https://developer.apple.com/documentation/combine/just) publisher, which always produces a single value, this publisher might not send any values and instead finish normally, if [output](publisher-swift.struct/output-swift.property.md) is `nil`.

## Topics

### Declaring Publisher Topography

- [Optional.Publisher.Output](publisher-swift.struct/output-swift.typealias.md): The kind of value published by this publisher.
- [Optional.Publisher.Failure](publisher-swift.struct/failure.md): The kind of error this publisher might publish.

### Creating an Optional Publisher

- [init(\_:)](publisher-swift.struct/init%28__%29.md): Creates a publisher to emit the value of the optional, or to finish immediately if the optional doesn’t have a value.

### Inpsecting Publisher Properties

- [output](publisher-swift.struct/output-swift.property.md): The output to deliver to each subscriber.

### Working with Subscribers

- [receive(subscriber:)](publisher-swift.struct/receive%28subscriber_%29.md): Implements the Publisher protocol by accepting the subscriber and immediately publishing the optional’s value if it has one, or finishing normally if it doesn’t.

### Instance Methods

- [allSatisfy(\_:)](publisher-swift.struct/allsatisfy%28__%29.md)
- [collect()](publisher-swift.struct/collect%28%29.md)
- [compactMap(\_:)](publisher-swift.struct/compactmap%28__%29.md)
- [contains(\_:)](publisher-swift.struct/contains%28__%29.md): Conforms when `Wrapped` conforms to `Equatable`.
- [contains(where:)](publisher-swift.struct/contains%28where_%29.md)
- [count()](publisher-swift.struct/count%28%29.md)
- [drop(while:)](publisher-swift.struct/drop%28while_%29.md)
- [dropFirst(\_:)](publisher-swift.struct/dropfirst%28__%29.md)
- [filter(\_:)](publisher-swift.struct/filter%28__%29.md)
- [first()](publisher-swift.struct/first%28%29.md)
- [first(where:)](publisher-swift.struct/first%28where_%29.md)
- [ignoreOutput()](publisher-swift.struct/ignoreoutput%28%29.md)
- [last()](publisher-swift.struct/last%28%29.md)
- [last(where:)](publisher-swift.struct/last%28where_%29.md)
- [map(\_:)](publisher-swift.struct/map%28__%29.md)
- [max()](publisher-swift.struct/max%28%29.md): Conforms when `Wrapped` conforms to `Comparable`.
- [max(by:)](publisher-swift.struct/max%28by_%29.md)
- [min()](publisher-swift.struct/min%28%29.md): Conforms when `Wrapped` conforms to `Comparable`.
- [min(by:)](publisher-swift.struct/min%28by_%29.md)
- [output(at:)](publisher-swift.struct/output%28at_%29.md)
- [output(in:)](publisher-swift.struct/output%28in_%29.md)
- [prefix(\_:)](publisher-swift.struct/prefix%28__%29.md)
- [prefix(while:)](publisher-swift.struct/prefix%28while_%29.md)
- [reduce(\_:\_:)](publisher-swift.struct/reduce%28____%29.md)
- [removeDuplicates()](publisher-swift.struct/removeduplicates%28%29.md): Conforms when `Wrapped` conforms to `Equatable`.
- [removeDuplicates(by:)](publisher-swift.struct/removeduplicates%28by_%29.md)
- [replaceEmpty(with:)](publisher-swift.struct/replaceempty%28with_%29.md)
- [replaceError(with:)](publisher-swift.struct/replaceerror%28with_%29.md)
- [retry(\_:)](publisher-swift.struct/retry%28__%29.md)
- [scan(\_:\_:)](publisher-swift.struct/scan%28____%29.md)

## Relationships

### Conforms To

- [Equatable](../equatable.md)
- [Publisher](https://developer.apple.com/documentation/combine/publisher)

## See Also

### Publishing an Optional

- [publisher](publisher-swift.property.md): A Combine publisher that publishes this instance’s value to each subscriber exactly once, if it has any value at all.
