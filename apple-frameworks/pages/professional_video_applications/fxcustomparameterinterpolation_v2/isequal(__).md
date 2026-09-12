> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcustomparameterinterpolation_v2/isequal(_:)](https://developer.apple.com/documentation/professional_video_applications/fxcustomparameterinterpolation_v2/isequal(_:))

# isEqual(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns whether one custom parameter value is equal to another.

## Declaration

```swift
func isEqual(_ rightValue: any NSCopying & NSSecureCoding & NSObjectProtocol) -> Bool
```

## Parameters

- `rightValue`: The value to the right of the equal sign in the equation (`leftValue` == `rightValue`).

<a id="return-value"></a>

## Return Value

True if the two values are equal, false otherwise.

<a id="discussion"></a>

## Discussion

The host application will sometimes need to know whether two custom parameters are equivalent. When it needs to know that, it will call this method on one custom parameter object, and pass it the other as `rightValue`.

## See Also

### Instance Methods

- [interpolateBetween(\_:withWeight:)](interpolatebetween%28__withweight_%29.md): Returns a new parameter value which has been calculated by interpolating between two key values.

# isEqual: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns whether one custom parameter value is equal to another.

## Declaration

```objectivec
- (BOOL) isEqual:(NSObject<NSCopying,NSSecureCoding> *) rightValue;
```

## Parameters

- `rightValue`: The value to the right of the equal sign in the equation (`leftValue` == `rightValue`).

<a id="return-value"></a>

## Return Value

True if the two values are equal, false otherwise.

<a id="discussion"></a>

## Discussion

The host application will sometimes need to know whether two custom parameters are equivalent. When it needs to know that, it will call this method on one custom parameter object, and pass it the other as `rightValue`.

## See Also

### Instance Methods

- [interpolateBetween:withWeight:](interpolatebetween%28__withweight_%29.md): Returns a new parameter value which has been calculated by interpolating between two key values.
