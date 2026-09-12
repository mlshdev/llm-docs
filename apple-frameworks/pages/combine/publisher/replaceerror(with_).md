> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/replaceerror(with:)](https://developer.apple.com/documentation/combine/publisher/replaceerror(with:))

# replaceError(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Replaces any errors in the stream with the provided element.

## Declaration

```swift
func replaceError(with output: Self.Output) -> Publishers.ReplaceError<Self>
```

## Parameters

- `output`: An element to emit when the upstream publisher fails.

<a id="return-value"></a>

## Return Value

A publisher that replaces an error from the upstream publisher with the provided output element.

<a id="discussion"></a>

## Discussion

If the upstream publisher fails with an error, this publisher emits the provided element, then finishes normally.

In the example below, a publisher of strings fails with a `MyError` instance, which sends a failure completion downstream. The [replaceError(with:)](replaceerror%28with_%29.md) operator handles the failure by publishing the string `(replacement element)` and completing normally.

```swift
struct MyError: Error {}
let fail = Fail<String, MyError>(error: MyError())
cancellable = fail
    .replaceError(with: "(replacement element)")
    .sink(
        receiveCompletion: { print ("\($0)") },
        receiveValue: { print ("\($0)", terminator: " ") }
    )

// Prints: "(replacement element) finished".
```

This [replaceError(with:)](replaceerror%28with_%29.md) functionality is useful when you want to handle an error by sending a single replacement element and end the stream. Use [catch(\_:)](catch%28__%29.md) to recover from an error and provide a replacement publisher to continue providing elements to the downstream subscriber.

## See Also

### Filtering elements

- [filter(\_:)](filter%28__%29.md): Republishes all elements that match a provided closure.
- [tryFilter(\_:)](tryfilter%28__%29.md): Republishes all elements that match a provided error-throwing closure.
- [compactMap(\_:)](compactmap%28__%29.md): Calls a closure with each received element and publishes any returned optional that has a value.
- [tryCompactMap(\_:)](trycompactmap%28__%29.md): Calls an error-throwing closure with each received element and publishes any returned optional that has a value.
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`. Publishes only elements that don’t match the previous element.
- [removeDuplicates(by:)](removeduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided closure.
- [tryRemoveDuplicates(by:)](tryremoveduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [replaceEmpty(with:)](replaceempty%28with_%29.md): Replaces an empty stream with the provided element.
