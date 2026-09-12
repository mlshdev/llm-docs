> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result/flatmap(_:)](https://developer.apple.com/documentation/swift/result/flatmap(_:))

# flatMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new result, mapping any success value using the given transformation and unwrapping the produced result.

## Declaration

```swift
func flatMap<NewSuccess>(_ transform: (Success) -> Result<NewSuccess, Failure>) -> Result<NewSuccess, Failure> where NewSuccess : ~Copyable
```

## Parameters

- `transform`: A closure that takes the success value of the instance.

<a id="return-value"></a>

## Return Value

A `Result` instance, either from the closure or the previous `.failure`.

<a id="discussion"></a>

## Discussion

Use this method to avoid a nested result when your transformation produces another `Result` type.

In this example, note the difference in the result of using `map` and `flatMap` with a transformation that returns a result type.

```swift
func getNextInteger() -> Result<Int, Error> {
    .success(4)
}
func getNextAfterInteger(_ n: Int) -> Result<Int, Error> {
    .success(n + 1)
}

let result = getNextInteger().map { getNextAfterInteger($0) }
// result == .success(.success(5))

let result = getNextInteger().flatMap { getNextAfterInteger($0) }
// result == .success(5)
```

## See Also

### Transforming a Result

- [map(\_:)](map%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any success value using the given transformation.
- [mapError(\_:)](maperror%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any failure value using the given transformation.
- [flatMapError(\_:)](flatmaperror%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any failure value using the given transformation and unwrapping the produced result.
