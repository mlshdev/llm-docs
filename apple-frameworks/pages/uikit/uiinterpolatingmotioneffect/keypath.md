> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinterpolatingmotioneffect/keypath](https://developer.apple.com/documentation/uikit/uiinterpolatingmotioneffect/keypath)

# keyPath (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The key path you want to modify on the view.

## Declaration

```swift
var keyPath: String { get }
```

<a id="Discussion"></a>

## Discussion

This property must correspond to an animatable property of the view to which the motion effect is attached.

## See Also

### Accessing the motion attributes

- [type](type.md): The tilt direction to monitor.
- [minimumRelativeValue](minimumrelativevalue.md): The value that maps to the minimum viewer offset.
- [maximumRelativeValue](maximumrelativevalue.md): The value that maps to the maximum viewer offset.

# keyPath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The key path you want to modify on the view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * keyPath;
```

<a id="Discussion"></a>

## Discussion

This property must correspond to an animatable property of the view to which the motion effect is attached.

## See Also

### Accessing the motion attributes

- [type](type.md): The tilt direction to monitor.
- [minimumRelativeValue](minimumrelativevalue.md): The value that maps to the minimum viewer offset.
- [maximumRelativeValue](maximumrelativevalue.md): The value that maps to the maximum viewer offset.
