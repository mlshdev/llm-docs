> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/actions](https://developer.apple.com/documentation/carplay/cpnavigationalert/actions)

# actions (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The array of actions associated with this navigation alert.

## Declaration

```swift
var actions: [CPAlertAction] { get }
```

<a id="discussion"></a>

## Discussion

If the alert was created with the older @c primaryAction / @c secondaryAction initializer, this property returns those actions as an array for backward compatibility.

# actions (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The array of actions associated with this navigation alert.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CPAlertAction *> * actions;
```

<a id="discussion"></a>

## Discussion

If the alert was created with the older @c primaryAction / @c secondaryAction initializer, this property returns those actions as an array for backward compatibility.
