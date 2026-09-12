> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/ulpofone-817da](https://developer.apple.com/documentation/swift/float80/ulpofone-817da)

# ulpOfOne

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** macOS 10.10+

The unit in the last place of 1.0.

## Declaration

```swift
static var ulpOfOne: Self { get }
```

<a id="discussion"></a>

## Discussion

The positive difference between 1.0 and the next greater representable number. `ulpOfOne` corresponds to the value represented by the C macros `FLT_EPSILON`, `DBL_EPSILON`, etc, and is sometimes called *epsilon* or *machine epsilon*. Swift deliberately avoids using the term “epsilon” because:

- Historically “epsilon” has been used to refer to several different concepts in different languages, leading to confusion and bugs.
- The name “epsilon” suggests that this quantity is a good tolerance to choose for approximate comparisons, but it is almost always unsuitable for that purpose.

See also the `ulp` member property.
