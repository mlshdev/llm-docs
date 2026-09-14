> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask/userinfo

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
