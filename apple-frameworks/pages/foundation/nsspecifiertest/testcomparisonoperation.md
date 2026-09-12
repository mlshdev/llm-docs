> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspecifiertest/testcomparisonoperation](https://developer.apple.com/documentation/foundation/nsspecifiertest/testcomparisonoperation)

# NSSpecifierTest.TestComparisonOperation (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

These are passed to  [init(objectSpecifier:comparisonOperator:test:)](init%28objectspecifier_comparisonoperator_test_%29.md) to specify the comparison operator.

## Declaration

```swift
enum TestComparisonOperation
```

## Topics

### Constants

- [NSSpecifierTest.TestComparisonOperation.equal](testcomparisonoperation/equal.md): Binary comparison operator that results in true if the two objects are equal.
- [NSSpecifierTest.TestComparisonOperation.lessThanOrEqual](testcomparisonoperation/lessthanorequal.md): Binary comparison operator that results in true if the value of the test object is equal to or less than the value of the other object.
- [NSSpecifierTest.TestComparisonOperation.lessThan](testcomparisonoperation/lessthan.md): Binary comparison operator that results in true if the value of the test object is less than the value of the other object.
- [NSSpecifierTest.TestComparisonOperation.greaterThanOrEqual](testcomparisonoperation/greaterthanorequal.md): Binary comparison operator that results in true if the value of the test object is greater than or equal to the value of the other object.
- [NSSpecifierTest.TestComparisonOperation.greaterThan](testcomparisonoperation/greaterthan.md): Binary comparison operator that results in true if the value of the test object is greater than the value of the other object.
- [NSSpecifierTest.TestComparisonOperation.beginsWith](testcomparisonoperation/beginswith.md): Binary containment operator that results in true if the test object is a list or string that matches the beginning of the other object (which is also a list or string).
- [NSSpecifierTest.TestComparisonOperation.endsWith](testcomparisonoperation/endswith.md): Binary containment operator that results in true if the test object is a list or string that matches the end of the other object (which is also a list or string).
- [NSSpecifierTest.TestComparisonOperation.contains](testcomparisonoperation/contains.md): Binary containment operator that results in true if the test object is a list or string that matches the other object (which is also a list or string) at any location.

### Initializers

- [init(rawValue:)](testcomparisonoperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSTestComparisonOperation (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

These are passed to  [initWithObjectSpecifier:comparisonOperator:testObject:](init%28objectspecifier_comparisonoperator_test_%29.md) to specify the comparison operator.

## Declaration

```objectivec
enum NSTestComparisonOperation : NSUInteger;
```

## Topics

### Constants

- [NSEqualToComparison](testcomparisonoperation/equal.md): Binary comparison operator that results in true if the two objects are equal.
- [NSLessThanOrEqualToComparison](testcomparisonoperation/lessthanorequal.md): Binary comparison operator that results in true if the value of the test object is equal to or less than the value of the other object.
- [NSLessThanComparison](testcomparisonoperation/lessthan.md): Binary comparison operator that results in true if the value of the test object is less than the value of the other object.
- [NSGreaterThanOrEqualToComparison](testcomparisonoperation/greaterthanorequal.md): Binary comparison operator that results in true if the value of the test object is greater than or equal to the value of the other object.
- [NSGreaterThanComparison](testcomparisonoperation/greaterthan.md): Binary comparison operator that results in true if the value of the test object is greater than the value of the other object.
- [NSBeginsWithComparison](testcomparisonoperation/beginswith.md): Binary containment operator that results in true if the test object is a list or string that matches the beginning of the other object (which is also a list or string).
- [NSEndsWithComparison](testcomparisonoperation/endswith.md): Binary containment operator that results in true if the test object is a list or string that matches the end of the other object (which is also a list or string).
- [NSContainsComparison](testcomparisonoperation/contains.md): Binary containment operator that results in true if the test object is a list or string that matches the other object (which is also a list or string) at any location.
