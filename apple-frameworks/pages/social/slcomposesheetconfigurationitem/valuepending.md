> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposesheetconfigurationitem/valuepending](https://developer.apple.com/documentation/social/slcomposesheetconfigurationitem/valuepending)

# valuePending (Swift)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the configuration item’s value is ready for display.

## Declaration

```swift
var valuePending: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) if a progress indicator should be displayed, to show users that a configuration item’s value is about to display. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying Configuration Information

- [title](title.md): The name of the configuration item stored as a localized string.
- [value](value.md): The current value or setting of the configuration item.

# valuePending (Objective-C)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the configuration item’s value is ready for display.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL valuePending;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) if a progress indicator should be displayed, to show users that a configuration item’s value is about to display. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying Configuration Information

- [title](title.md): The name of the configuration item stored as a localized string.
- [value](value.md): The current value or setting of the configuration item.
