> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/percent()](https://developer.apple.com/documentation/healthkit/hkunit/percent())

# percent() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring percentages.

## Declaration

```swift
class func percent() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring percentages.

<a id="Discussion"></a>

## Discussion

Percent measures a value between 0.0 and 1.0. HealthKit uses percent units when measuring body fat percentage, oxygen saturation, blood alcohol content, and similar values.  Even though count and percent units are both scalar units, you cannot convert between them.

## See Also

### Constructing scalar units

- [count()](count%28%29.md): Returns a HealthKit unit for measuring counts.

# percentUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring percentages.

## Declaration

```objectivec
+ (instancetype) percentUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring percentages.

<a id="Discussion"></a>

## Discussion

Percent measures a value between 0.0 and 1.0. HealthKit uses percent units when measuring body fat percentage, oxygen saturation, blood alcohol content, and similar values.  Even though count and percent units are both scalar units, you cannot convert between them.

## See Also

### Constructing scalar units

- [countUnit](count%28%29.md): Returns a HealthKit unit for measuring counts.
