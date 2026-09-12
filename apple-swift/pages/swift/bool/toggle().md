> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bool/toggle()](https://developer.apple.com/documentation/swift/bool/toggle())

# toggle()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Toggles the Boolean variable’s value.

## Declaration

```swift
mutating func toggle()
```

<a id="discussion"></a>

## Discussion

Use this method to toggle a Boolean value from `true` to `false` or from `false` to `true`.

```swift
var bools = [true, false]

bools[0].toggle()
// bools == [false, false]
```

## See Also

### Transforming a Boolean

- [!(\_:)](!%28__%29.md): Performs a logical NOT operation on a Boolean value.
- [||(\_:\_:)](__%28____%29.md): Performs a logical OR operation on two Boolean values.
- [&&(\_:\_:)](&&%28____%29.md): Performs a logical AND operation on two Boolean values.
