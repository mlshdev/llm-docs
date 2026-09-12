> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewtransitionlayout/value(foranimatedkey:)](https://developer.apple.com/documentation/uikit/uicollectionviewtransitionlayout/value(foranimatedkey:))

# value(forAnimatedKey:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the most recently set value for the specified key.

## Declaration

```swift
func value(forAnimatedKey key: String) -> CGFloat
```

## Parameters

- `key`: A key whose value you set using the [updateValue(\_:forAnimatedKey:)](updatevalue%28__foranimatedkey_%29.md) method.

<a id="return-value"></a>

## Return Value

The last value set for the key.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve floating-point values that are useful when laying out the contents of your collection view. The key you specify is a string that you define and that has some meaning to your implementation. At points during an interactive transition, you can assign new values to that key using the [updateValue(\_:forAnimatedKey:)](updatevalue%28__foranimatedkey_%29.md) method.

## See Also

### Updating the transition information

- [transitionProgress](transitionprogress.md): The completion percentage of the transition.
- [updateValue(\_:forAnimatedKey:)](updatevalue%28__foranimatedkey_%29.md): Sets the value for an animatable key.

# valueForAnimatedKey: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the most recently set value for the specified key.

## Declaration

```objectivec
- (CGFloat) valueForAnimatedKey:(NSString *) key;
```

## Parameters

- `key`: A key whose value you set using the [updateValue:forAnimatedKey:](updatevalue%28__foranimatedkey_%29.md) method.

<a id="return-value"></a>

## Return Value

The last value set for the key.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve floating-point values that are useful when laying out the contents of your collection view. The key you specify is a string that you define and that has some meaning to your implementation. At points during an interactive transition, you can assign new values to that key using the [updateValue:forAnimatedKey:](updatevalue%28__foranimatedkey_%29.md) method.

## See Also

### Updating the transition information

- [transitionProgress](transitionprogress.md): The completion percentage of the transition.
- [updateValue:forAnimatedKey:](updatevalue%28__foranimatedkey_%29.md): Sets the value for an animatable key.
