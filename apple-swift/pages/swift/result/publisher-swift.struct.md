> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result/publisher-swift.struct](https://developer.apple.com/documentation/swift/result/publisher-swift.struct)

# Result.Publisher

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of a Combine publisher that publishes this instance’s result to each subscriber exactly once, or fails immediately if the result indicates failure.

## Declaration

```swift
struct Publisher
```

<a id="overview"></a>

## Overview

If the result is `Swift/Result/success`, then the publisher waits until it receives a request for at least one value, then sends the output to all subscribers and finishes normally. If the result is `/Swift/Result/failure`, then the publisher sends the failure immediately upon subscription. This latter behavior is a contrast with [Just](https://developer.apple.com/documentation/combine/just), which always publishes a single value.

## Topics

### Creating a Result Publisher

- [init(\_:)](publisher-swift.struct/init%28__%29-516t.md): Creates a publisher that delivers the specified result.
- [init(\_:)](publisher-swift.struct/init%28__%29-69fv4.md): Creates a publisher that immediately terminates upon subscription with the given failure.
- [init(\_:)](publisher-swift.struct/init%28__%29-7t2tt.md): Creates a publisher that sends the specified output to all subscribers and finishes normally.

### Inspecting Publisher Properties

- [result](publisher-swift.struct/result.md): The result to deliver to each subscriber.

### Instance Methods

- [allSatisfy(\_:)](publisher-swift.struct/allsatisfy%28__%29.md): Conforms when `Failure` conforms to `Error`.
- [collect()](publisher-swift.struct/collect%28%29.md): Conforms when `Failure` conforms to `Error`.
- [contains(\_:)](publisher-swift.struct/contains%28__%29.md): Conforms when `Success` conforms to `Equatable` and `Failure` conforms to `Error`.
- [contains(where:)](publisher-swift.struct/contains%28where_%29.md): Conforms when `Failure` conforms to `Error`.
- [count()](publisher-swift.struct/count%28%29.md): Conforms when `Failure` conforms to `Error`.
- [first()](publisher-swift.struct/first%28%29.md): Conforms when `Failure` conforms to `Error`.
- [ignoreOutput()](publisher-swift.struct/ignoreoutput%28%29.md): Conforms when `Failure` conforms to `Error`.
- [last()](publisher-swift.struct/last%28%29.md): Conforms when `Failure` conforms to `Error`.
- [map(\_:)](publisher-swift.struct/map%28__%29.md): Conforms when `Failure` conforms to `Error`.
- [mapError(\_:)](publisher-swift.struct/maperror%28__%29.md): Conforms when `Failure` conforms to `Error`.
- [max()](publisher-swift.struct/max%28%29.md): Conforms when `Success` conforms to `Comparable` and `Failure` conforms to `Error`.
- [max(by:)](publisher-swift.struct/max%28by_%29.md): Conforms when `Failure` conforms to `Error`.
- [min()](publisher-swift.struct/min%28%29.md): Conforms when `Success` conforms to `Comparable` and `Failure` conforms to `Error`.
- [min(by:)](publisher-swift.struct/min%28by_%29.md): Conforms when `Failure` conforms to `Error`.
- [reduce(\_:\_:)](publisher-swift.struct/reduce%28____%29.md): Conforms when `Failure` conforms to `Error`.
- [removeDuplicates()](publisher-swift.struct/removeduplicates%28%29.md): Conforms when `Success` conforms to `Equatable` and `Failure` conforms to `Error`.
- [removeDuplicates(by:)](publisher-swift.struct/removeduplicates%28by_%29.md): Conforms when `Failure` conforms to `Error`.
- [replaceEmpty(with:)](publisher-swift.struct/replaceempty%28with_%29.md): Conforms when `Failure` conforms to `Error`.
- [replaceError(with:)](publisher-swift.struct/replaceerror%28with_%29.md): Conforms when `Failure` conforms to `Error`.
- [retry(\_:)](publisher-swift.struct/retry%28__%29.md): Conforms when `Failure` conforms to `Error`.
- [scan(\_:\_:)](publisher-swift.struct/scan%28____%29.md): Conforms when `Failure` conforms to `Error`.
- [setFailureType(to:)](publisher-swift.struct/setfailuretype%28to_%29.md): Conforms when `Failure` is `Never`.
- [tryAllSatisfy(\_:)](publisher-swift.struct/tryallsatisfy%28__%29.md): Conforms when `Failure` conforms to `Error`.
- [tryContains(where:)](publisher-swift.struct/trycontains%28where_%29.md): Conforms when `Failure` conforms to `Error`.
- [tryMap(\_:)](publisher-swift.struct/trymap%28__%29.md): Conforms when `Failure` conforms to `Error`.
- [tryMax(by:)](publisher-swift.struct/trymax%28by_%29.md): Conforms when `Failure` conforms to `Error`.
- [tryMin(by:)](publisher-swift.struct/trymin%28by_%29.md): Conforms when `Failure` conforms to `Error`.
- [tryReduce(\_:\_:)](publisher-swift.struct/tryreduce%28____%29.md): Conforms when `Failure` conforms to `Error`.
- [tryRemoveDuplicates(by:)](publisher-swift.struct/tryremoveduplicates%28by_%29.md): Conforms when `Failure` conforms to `Error`.
- [tryScan(\_:\_:)](publisher-swift.struct/tryscan%28____%29.md): Conforms when `Failure` conforms to `Error`.

## Relationships

### Conforms To

- [Equatable](../equatable.md)
- [Publisher](https://developer.apple.com/documentation/combine/publisher)

## See Also

### Publishing a Result

- [publisher](publisher-swift.property.md): Conforms when `Failure` conforms to `Error`. A Combine publisher that publishes this instance’s result to each subscriber exactly once, or fails immediately if the result indicates failure.
