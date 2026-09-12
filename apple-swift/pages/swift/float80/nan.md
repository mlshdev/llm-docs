> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/nan](https://developer.apple.com/documentation/swift/float80/nan)

# nan

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** macOS 10.10+

A quiet NaN (“not a number”).

## Declaration

```swift
static var nan: Float80 { get }
```

<a id="discussion"></a>

## Discussion

A NaN compares not equal, not greater than, and not less than every value, including itself. Passing a NaN to an operation generally results in NaN.

```swift
let x = 1.21
// x > Double.nan == false
// x < Double.nan == false
// x == Double.nan == false
```

Because a NaN always compares not equal to itself, to test whether a floating-point value is NaN, use its `isNaN` property instead of the equal-to operator (`==`). In the following example, `y` is NaN.

```swift
let y = x + Double.nan
print(y == Double.nan)
// Prints "false"
print(y.isNaN)
// Prints "true"
```
