> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkrefreshbackgroundtask/userinfo](https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask/userinfo)

# userInfo (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

Custom information associated with the background task.

## Declaration

```swift
var userInfo: (any NSSecureCoding & NSObjectProtocol)? { get }
```

<a id="Discussion"></a>

## Discussion

If there is no data associated with the task, this property is set to `nil`.

# userInfo (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

Custom information associated with the background task.

## Declaration

```objectivec
@property (readonly, nullable) id<NSObject,NSSecureCoding> userInfo;
```

<a id="Discussion"></a>

## Discussion

If there is no data associated with the task, this property is set to `nil`.
