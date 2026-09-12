> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/executeonce](https://developer.apple.com/documentation/homekit/hmeventtrigger/executeonce)

# executeOnce (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean that can execute the trigger many times.

## Declaration

```swift
var executeOnce: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Disables the trigger after its first execution if [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Controlling recurrence

- [recurrences](recurrences.md): Specifies the days on which the trigger can execute.
- [updateRecurrences(\_:completionHandler:)](updaterecurrences%28__completionhandler_%29.md): Updates the days of the week the trigger can repeat.
- [updateExecuteOnce(\_:completionHandler:)](updateexecuteonce%28__completionhandler_%29.md): Updates the repetition status of the event trigger.

# executeOnce (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean that can execute the trigger many times.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL executeOnce;
```

<a id="Discussion"></a>

## Discussion

Disables the trigger after its first execution if [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Controlling recurrence

- [recurrences](recurrences.md): Specifies the days on which the trigger can execute.
- [updateRecurrences:completionHandler:](updaterecurrences%28__completionhandler_%29.md): Updates the days of the week the trigger can repeat.
- [updateExecuteOnce:completionHandler:](updateexecuteonce%28__completionhandler_%29.md): Updates the repetition status of the event trigger.
