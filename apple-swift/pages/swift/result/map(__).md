> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result/map(_:)](https://developer.apple.com/documentation/swift/result/map(_:))

# map(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new result, mapping any success value using the given transformation.

## Declaration

```swift
func map<NewSuccess>(_ transform: (Success) -> NewSuccess) -> Result<NewSuccess, Failure> where NewSuccess : ~Copyable
```

## Parameters

- `transform`: A closure that takes the success value of this instance.

<a id="return-value"></a>

## Return Value

A `Result` instance with the result of evaluating `transform` as the new success value if this instance represents a success.

<a id="discussion"></a>

## Discussion

Use this method when you need to transform the value of a `Result` instance when it represents a success. The following example transforms the integer success value of a result into a string:

```swift
func getNextInteger() -> Result<Int, Error> { /* ... */ }

let integerResult = getNextInteger()
// integerResult == .success(5)
let stringResult = integerResult.map { String($0) }
// stringResult == .success("5")
```

## See Also

### Transforming a Result

- [mapError(\_:)](maperror%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any failure value using the given transformation.
- [flatMap(\_:)](flatmap%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any success value using the given transformation and unwrapping the produced result.
- [flatMapError(\_:)](flatmaperror%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any failure value using the given transformation and unwrapping the produced result.
