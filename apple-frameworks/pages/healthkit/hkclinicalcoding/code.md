> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicalcoding/code](https://developer.apple.com/documentation/healthkit/hkclinicalcoding/code)

# code (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The clinical code that represents a medical concept inside the coding system.

## Declaration

```swift
var code: String { get }
```

<a id="discussion"></a>

## Discussion

The format depends on the coding system. For example, RxNorm codes are numeric.

# code (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The clinical code that represents a medical concept inside the coding system.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * code;
```

<a id="discussion"></a>

## Discussion

The format depends on the coding system. For example, RxNorm codes are numeric.
