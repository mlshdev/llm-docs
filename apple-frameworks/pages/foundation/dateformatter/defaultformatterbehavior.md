> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/defaultformatterbehavior](https://developer.apple.com/documentation/foundation/dateformatter/defaultformatterbehavior)

# defaultFormatterBehavior (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default formatting behavior for instances of the class.

## Declaration

```swift
class var defaultFormatterBehavior: DateFormatter.Behavior { get set }
```

<a id="return-value"></a>

## Return Value

The default formatting behavior for instances of the class. For possible values, see [DateFormatter.Behavior](behavior.md).

<a id="Discussion"></a>

## Discussion

For iOS and for macOS applications linked against macOS 10.5 and later, the default is `NSDateFormatterBehavior10_4`.

## See Also

### Managing Behavior Version

- [formatterBehavior](formatterbehavior.md): The formatter behavior for the receiver.

# defaultFormatterBehavior (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default formatting behavior for instances of the class.

## Declaration

```objectivec
@property (class) NSDateFormatterBehavior defaultFormatterBehavior;
```

<a id="return-value"></a>

## Return Value

The default formatting behavior for instances of the class. For possible values, see [NSDateFormatterBehavior](behavior.md).

<a id="Discussion"></a>

## Discussion

For iOS and for macOS applications linked against macOS 10.5 and later, the default is `NSDateFormatterBehavior10_4`.

## See Also

### Managing Behavior Version

- [formatterBehavior](formatterbehavior.md): The formatter behavior for the receiver.
