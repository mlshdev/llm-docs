> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomparefunction](https://developer.apple.com/documentation/metal/mtlcomparefunction)

# MTLCompareFunction (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Options used to specify how a sample compare operation should be performed on a depth texture.

## Declaration

```swift
enum MTLCompareFunction
```

<a id="overview"></a>

## Overview

Whenever the comparison test passes, the incoming fragment is compared to the stored data at the specified location.

## Topics

### Compare function options

- [MTLCompareFunction.never](mtlcomparefunction/never.md): A new value never passes the comparison test.
- [MTLCompareFunction.less](mtlcomparefunction/less.md): A new value passes the comparison test if it is less than the existing value.
- [MTLCompareFunction.equal](mtlcomparefunction/equal.md): A new value passes the comparison test if it is equal to the existing value.
- [MTLCompareFunction.lessEqual](mtlcomparefunction/lessequal.md): A new value passes the comparison test if it is less than or equal to the existing value.
- [MTLCompareFunction.greater](mtlcomparefunction/greater.md): A new value passes the comparison test if it is greater than the existing value.
- [MTLCompareFunction.notEqual](mtlcomparefunction/notequal.md): A new value passes the comparison test if it is not equal to the existing value.
- [MTLCompareFunction.greaterEqual](mtlcomparefunction/greaterequal.md): A new value passes the comparison test if it is greater than or equal to the existing value.
- [MTLCompareFunction.always](mtlcomparefunction/always.md): A new value always passes the comparison test.

### Initializers

- [init(rawValue:)](mtlcomparefunction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Declaring the depth comparison mode

- [compareFunction](mtlsamplerdescriptor/comparefunction.md): The sampler comparison function used when performing a sample compare operation on a depth texture.

# MTLCompareFunction (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Options used to specify how a sample compare operation should be performed on a depth texture.

## Declaration

```objectivec
enum MTLCompareFunction : NSUInteger;
```

<a id="overview"></a>

## Overview

Whenever the comparison test passes, the incoming fragment is compared to the stored data at the specified location.

## Topics

### Compare function options

- [MTLCompareFunctionNever](mtlcomparefunction/never.md): A new value never passes the comparison test.
- [MTLCompareFunctionLess](mtlcomparefunction/less.md): A new value passes the comparison test if it is less than the existing value.
- [MTLCompareFunctionEqual](mtlcomparefunction/equal.md): A new value passes the comparison test if it is equal to the existing value.
- [MTLCompareFunctionLessEqual](mtlcomparefunction/lessequal.md): A new value passes the comparison test if it is less than or equal to the existing value.
- [MTLCompareFunctionGreater](mtlcomparefunction/greater.md): A new value passes the comparison test if it is greater than the existing value.
- [MTLCompareFunctionNotEqual](mtlcomparefunction/notequal.md): A new value passes the comparison test if it is not equal to the existing value.
- [MTLCompareFunctionGreaterEqual](mtlcomparefunction/greaterequal.md): A new value passes the comparison test if it is greater than or equal to the existing value.
- [MTLCompareFunctionAlways](mtlcomparefunction/always.md): A new value always passes the comparison test.

## See Also

### Declaring the depth comparison mode

- [compareFunction](mtlsamplerdescriptor/comparefunction.md): The sampler comparison function used when performing a sample compare operation on a depth texture.
