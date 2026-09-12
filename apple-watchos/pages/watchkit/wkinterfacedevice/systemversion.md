> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/systemversion](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/systemversion)

# systemVersion (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The version of the operating system.

## Declaration

```swift
var systemVersion: String { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the numerical version number of the system. For example, the value is `2.0` for the initial release of watchOS 2.

## See Also

### Reading System Information

- [systemName](systemname.md): The name of the operating system.

# systemVersion (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The version of the operating system.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * systemVersion;
```

<a id="Discussion"></a>

## Discussion

This property contains the numerical version number of the system. For example, the value is `2.0` for the initial release of watchOS 2.

## See Also

### Reading System Information

- [systemName](systemname.md): The name of the operating system.
