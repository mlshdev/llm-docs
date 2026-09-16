> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float80/negate()

# negate()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Replaces this value with its additive inverse.

## Declaration

```swift
mutating func negate()
```

<a id="discussion"></a>

## Discussion

The result is always exact. This example uses the `negate()` method to negate the value of the variable `x`:

```swift
var x = 21.5
x.negate()
// x == -21.5
```
