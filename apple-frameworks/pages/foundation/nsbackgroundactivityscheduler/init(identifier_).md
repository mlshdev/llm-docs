> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/init(identifier:)](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/init(identifier:))

# init(identifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Initializes a background activity scheduler object with a specified unique identifier.

## Declaration

```swift
init(identifier: String)
```

## Parameters

- `identifier`: A unique string, in reverse DNS notation, that identifies the activity. For example, `com.example.MyApp.updatecheck`. `nil` and zero-length strings are not allowed.

<a id="return-value"></a>

## Return Value

A new background activity scheduler object of type [NSBackgroundActivityScheduler](../nsbackgroundactivityscheduler.md).

<a id="Discussion"></a>

## Discussion

The string passed to the `identifier` parameter should remain constant for an activity across launches of your app because the system uses this unique identifier to track the number of times the activity has run and to improve the heuristics for deciding when to run it again in the future. See [Create a Scheduler](../nsbackgroundactivityscheduler.md#Create-a-Scheduler).

## See Also

### Related Documentation

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.

# initWithIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Initializes a background activity scheduler object with a specified unique identifier.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A unique string, in reverse DNS notation, that identifies the activity. For example, `com.example.MyApp.updatecheck`. `nil` and zero-length strings are not allowed.

<a id="return-value"></a>

## Return Value

A new background activity scheduler object of type [NSBackgroundActivityScheduler](../nsbackgroundactivityscheduler.md).

<a id="Discussion"></a>

## Discussion

The string passed to the `identifier` parameter should remain constant for an activity across launches of your app because the system uses this unique identifier to track the number of times the activity has run and to improve the heuristics for deciding when to run it again in the future. See [Create a Scheduler](../nsbackgroundactivityscheduler.md#Create-a-Scheduler).

## See Also

### Related Documentation

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.
