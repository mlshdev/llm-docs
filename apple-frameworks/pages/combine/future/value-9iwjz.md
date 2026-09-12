> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/future/value-9iwjz](https://developer.apple.com/documentation/combine/future/value-9iwjz)

# value

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The published value of the future, delivered asynchronously.

## Declaration

```swift
final var value: Output { get async }
```

<a id="discussion"></a>

## Discussion

This property subscribes to the `Future` and delivers the value asynchronously when the `Future` publishes it. Use this property when you want to use the `async`-`await` syntax with a `Future`.

## See Also

### Accessing the value asynchronously

- [value](value-5iprp.md): Conforms when `Failure` conforms to `Error`. The published value of the future or an error, delivered asynchronously.
