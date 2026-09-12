> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result/flatmaperror(_:)](https://developer.apple.com/documentation/swift/result/flatmaperror(_:))

# flatMapError(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new result, mapping any failure value using the given transformation and unwrapping the produced result.

## Declaration

```swift
consuming func flatMapError<NewFailure>(_ transform: (Failure) -> Result<Success, NewFailure>) -> Result<Success, NewFailure> where NewFailure : Error
```

## Parameters

- `transform`: A closure that takes the failure value of the instance.

<a id="return-value"></a>

## Return Value

A `Result` instance, either from the closure or the previous `.success`.

## See Also

### Transforming a Result

- [map(\_:)](map%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any success value using the given transformation.
- [mapError(\_:)](maperror%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any failure value using the given transformation.
- [flatMap(\_:)](flatmap%28__%29.md): Conforms when `Failure` conforms to `Error`. Returns a new result, mapping any success value using the given transformation and unwrapping the produced result.
