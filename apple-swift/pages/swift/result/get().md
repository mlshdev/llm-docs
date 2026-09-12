> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result/get()](https://developer.apple.com/documentation/swift/result/get())

# get()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the success value as a throwing expression.

## Declaration

```swift
consuming func get() throws(Failure) -> Success
```

<a id="return-value"></a>

## Return Value

The success value, if the instance represents a success.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the value of this result if it represents a success, or to catch the value if it represents a failure.

```swift
let integerResult: Result<Int, Error> = .success(5)
do {
    let value = try integerResult.get()
    print("The value is \(value).")
} catch {
    print("Error retrieving the value: \(error)")
}
// Prints "The value is 5."
```

> **Throws**

> The failure value, if the instance represents a failure.
