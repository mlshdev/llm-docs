> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlnumericconstraint/enumeratednumbers](https://developer.apple.com/documentation/coreml/mlnumericconstraint/enumeratednumbers)

# enumeratedNumbers (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A set of the numbers allowed in this constraint.

## Declaration

```swift
var enumeratedNumbers: Set<NSNumber>? { get }
```

## See Also

### Numeric Constraints

- [minNumber](minnumber.md): The smallest numerical value allowed by this constraint.
- [maxNumber](maxnumber.md): The largest numerical value allowed by this constraint.

# enumeratedNumbers (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A set of the numbers allowed in this constraint.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSSet<NSNumber *> * enumeratedNumbers;
```

## See Also

### Numeric Constraints

- [minNumber](minnumber.md): The smallest numerical value allowed by this constraint.
- [maxNumber](maxnumber.md): The largest numerical value allowed by this constraint.
