> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtask/identifier](https://developer.apple.com/documentation/backgroundtasks/bgtask/identifier)

# identifier (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The string identifier of the task.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

The identifier is the same as the one used to register the launch handler in [register(forTaskWithIdentifier:using:launchHandler:)](../bgtaskscheduler/register%28fortaskwithidentifier_using_launchhandler_%29.md).

# identifier (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The string identifier of the task.

## Declaration

```objectivec
@property (copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

The identifier is the same as the one used to register the launch handler in [registerForTaskWithIdentifier:usingQueue:launchHandler:](../bgtaskscheduler/register%28fortaskwithidentifier_using_launchhandler_%29.md).
