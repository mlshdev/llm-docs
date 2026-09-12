> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result/publisher-swift.struct/init(_:)-7t2tt](https://developer.apple.com/documentation/swift/result/publisher-swift.struct/init(_:)-7t2tt)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that sends the specified output to all subscribers and finishes normally.

## Declaration

```swift
init(_ output: Result<Success, Failure>.Publisher.Output)
```

## Parameters

- `output`: The output to deliver to each subscriber.

## See Also

### Creating a Result Publisher

- [init(\_:)](init%28__%29-516t.md): Creates a publisher that delivers the specified result.
- [init(\_:)](init%28__%29-69fv4.md): Creates a publisher that immediately terminates upon subscription with the given failure.
