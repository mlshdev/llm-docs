> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/timestamp](https://developer.apple.com/documentation/uikit/uipress/timestamp)

# timestamp (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The time when the press occurred or when it was last mutated.

## Declaration

```swift
var timestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the time, in seconds, from system startup to the time in which the touch either originated or was last changed. You can store and compare the initial value of this attribute to subsequent timestamp values of a [UIPress](../uipress.md) instance to determine the duration of the press and, if it’s being swiped, the speed of movement. For a definition of the time-since-boot value, see the description of the [ProcessInfo](../../foundation/processinfo.md) class’s [systemUptime](../../foundation/processinfo/systemuptime.md) method.

## See Also

### Getting press attributes

- [key](key.md): The key pressed or released on a physical keyboard.
- [type](type.md): The type of the specified press.
- [phase](phase-swift.property.md): The current press phase of the object.

# timestamp (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The time when the press occurred or when it was last mutated.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timestamp;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the time, in seconds, from system startup to the time in which the touch either originated or was last changed. You can store and compare the initial value of this attribute to subsequent timestamp values of a [UIPress](../uipress.md) instance to determine the duration of the press and, if it’s being swiped, the speed of movement. For a definition of the time-since-boot value, see the description of the [NSProcessInfo](../../foundation/processinfo.md) class’s [systemUptime](../../foundation/processinfo/systemuptime.md) method.

## See Also

### Getting press attributes

- [key](key.md): The key pressed or released on a physical keyboard.
- [type](type.md): The type of the specified press.
- [phase](phase-swift.property.md): The current press phase of the object.
