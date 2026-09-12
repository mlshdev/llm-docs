> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcommandapi/perform(_:)](https://developer.apple.com/documentation/professional_video_applications/fxcommandapi/perform(_:))

# perform(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Instructs the host application to perform a command.

## Declaration

```swift
func perform(_ command: FxCommand) throws
```

## Parameters

- `command`: The command you wish the host application to perform.

# performCommand:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Instructs the host application to perform a command.

## Declaration

```objectivec
- (BOOL) performCommand:(FxCommand) command error:(NSError * *) error;
```

## Parameters

- `command`: The command you wish the host application to perform.
- `error`: Any errors encountered while attempting to perform the command.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the application successfully performed the command. If it did not, the error parameter will be filled out with an error explaining what went wrong.
