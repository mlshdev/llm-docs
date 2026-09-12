> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result/maperror(_:)](https://developer.apple.com/documentation/swift/result/maperror(_:))

# mapError(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new result, mapping any failure value using the given transformation.

## Declaration

```swift
consuming func mapError<NewFailure>(_ transform: (Failure) -> NewFailure) -> Result<Success, NewFailure> where NewFailure : Error
```

## Parameters

- `transform`: A closure that takes the failure value of the instance.

<a id="return-value"></a>

## Return Value

A `Result` instance with the result of evaluating `transform` as the new failure value if this instance represents a failure.

<a id="discussion"></a>

## Discussion

Use this method when you need to transform the value of a `Result` instance when it represents a failure. The following example transforms the error value of a result by wrapping it in a custom `Error` type:

```swift
struct DatedError: Error {
    var error: Error
    var date: Date

    init(_ error: Error) {
        self.error = error
        self.date = Date()
    }
}

let result: Result<Int, Error> = // ...
// result == .failure(<error value>)
let resultWithDatedError = result.mapError { DatedError($0) }
// result == .failure(DatedError(error: <error value>, date: <date>))
```

## See Also

### Transforming a Result

- [map(\_:)](map%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any success value using the given transformation.
- [flatMap(\_:)](flatmap%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any success value using the given transformation and unwrapping the produced result.
- [flatMapError(\_:)](flatmaperror%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any failure value using the given transformation and unwrapping the produced result.
