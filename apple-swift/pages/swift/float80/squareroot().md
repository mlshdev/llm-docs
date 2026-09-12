> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/squareroot()](https://developer.apple.com/documentation/swift/float80/squareroot())

# squareRoot()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the square root of the value, rounded to a representable value.

## Declaration

```swift
func squareRoot() -> Self
```

<a id="return-value"></a>

## Return Value

The square root of the value.

<a id="discussion"></a>

## Discussion

The following example declares a function that calculates the length of the hypotenuse of a right triangle given its two perpendicular sides.

```swift
func hypotenuse(_ a: Double, _ b: Double) -> Double {
    return (a * a + b * b).squareRoot()
}

let (dx, dy) = (3.0, 4.0)
let distance = hypotenuse(dx, dy)
// distance == 5.0
```
