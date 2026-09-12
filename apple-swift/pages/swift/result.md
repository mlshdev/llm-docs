> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result](https://developer.apple.com/documentation/swift/result)

# Result

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value that represents either a success or a failure, including an associated value in each case.

## Declaration

```swift
@frozen enum Result<Success, Failure> where Failure : Error, Success : ~Copyable, Success : ~Escapable
```

## Mentioned In

- [Preserving the Results of a Throwing Expression](preserving-the-results-of-a-throwing-expression.md)
- [Writing Failable Asynchronous APIs](writing-failable-asynchronous-apis.md)

## Topics

### Representing a Result

- [Result.success(\_:)](result/success%28__%29.md): A success, storing a `Success` value.
- [Result.failure(\_:)](result/failure%28__%29.md): A failure, storing a `Failure` value.
- [Writing Failable Asynchronous APIs](writing-failable-asynchronous-apis.md): Vend results as part of an API when you can’t return errors synchronously.

### Converting a Throwing Expression to a Result

- [Preserving the Results of a Throwing Expression](preserving-the-results-of-a-throwing-expression.md): Call the initializer that wraps a throwing expression when you need to serialize or memoize the result.

### Converting a Result to a Throwing Expression

- [get()](result/get%28%29.md): Conforms when `Failure` conforms to `Error`. Returns the success value as a throwing expression.

### Transforming a Result

- [map(\_:)](result/map%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any success value using the given transformation.
- [mapError(\_:)](result/maperror%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any failure value using the given transformation.
- [flatMap(\_:)](result/flatmap%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any success value using the given transformation and unwrapping the produced result.
- [flatMapError(\_:)](result/flatmaperror%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any failure value using the given transformation and unwrapping the produced result.

### Comparing Results

- [==(\_:\_:)](result/==%28____%29.md): Conforms when `Success` conforms to `Equatable`, `Failure` conforms to `Equatable`, and `Failure` conforms to `Error`. Returns a Boolean value indicating whether two values are equal.
- [!=(\_:\_:)](result/!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.

### Publishing a Result

- [publisher](result/publisher-swift.property.md): Conforms when `Failure` conforms to `Error`. A Combine publisher that publishes this instance’s result to each subscriber exactly once, or fails immediately if the result indicates failure.
- [Result.Publisher](result/publisher-swift.struct.md): Conforms when `Failure` conforms to `Error`. The type of a Combine publisher that publishes this instance’s result to each subscriber exactly once, or fails immediately if the result indicates failure.

### Initializers

- [init(catching:)](result/init%28catching_%29-1tno.md): Conforms when `Failure` conforms to `Error`. Creates a new result by evaluating an async throwing closure, capturing the returned value as a success, or any thrown error as a failure.
- [init(catching:)](result/init%28catching_%29-62kyq.md): Conforms when `Failure` conforms to `Error`. Creates a new result by evaluating a throwing closure, capturing the returned value as a success, or any thrown error as a failure.

### Default Implementations

- [Equatable Implementations](result/equatable-implementations.md)
- [Hashable Implementations](result/hashable-implementations.md)

## Relationships

### Conforms To

- [Copyable](copyable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Errors

- [Error](error.md): A type representing an error value that can be thrown.
