> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/init(exactly:)](https://developer.apple.com/documentation/foundation/decimal/init(exactly:))

# init(exactly:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new decimal value exactly representing the provided integer.

## Declaration

```swift
init?<T>(exactly source: T) where T : BinaryInteger
```

## Parameters

- `source`: The integer to convert.

<a id="Discussion"></a>

## Discussion

If `source` isn’t representable as a `Decimal` instance, the result is `nil`.

## See Also

### Creating a decimal from an integer

- [init(\_:)](init%28__%29-2tcho.md): Creates and initializes a decimal with the provided integer value.
- [init(\_:)](init%28__%29-4gk29.md): Creates and initializes a decimal with the provided integer value.
- [init(\_:)](init%28__%29-5aznh.md): Creates and initializes a decimal with the provided integer value.
- [init(\_:)](init%28__%29-7dmlc.md): Creates and initializes a decimal with the provided integer value.
- [init(\_:)](init%28__%29-7a033.md): Creates and initializes a decimal with the provided integer value.
- [init(integerLiteral:)](init%28integerliteral_%29.md): Creates and initializes a decimal with the provided integer value.
