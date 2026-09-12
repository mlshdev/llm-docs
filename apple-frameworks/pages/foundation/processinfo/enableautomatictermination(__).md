> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/enableautomatictermination(_:)](https://developer.apple.com/documentation/foundation/processinfo/enableautomatictermination(_:))

# enableAutomaticTermination(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Enables automatic termination for the application.

## Declaration

```swift
func enableAutomaticTermination(_ reason: String)
```

## Parameters

- `reason`: The reason why automatic termination is being enabled.

<a id="Discussion"></a>

## Discussion

This method decrements the automatic termination counter. When the counter is `0`, the application is eligible for automatic termination.

The reason parameter is used to track why an application is or is not automatically terminable and can be inspected by debugging tools. For example, you could pass the string `@"file transfer in progress"` if you disable automatic termination before transferring a file over the network. When you reenable automatic termination after the transfer is complete using [enableAutomaticTermination(\_:)](enableautomatictermination%28__%29.md), you should pass the matching string. A given reason can be used more than once at the same time; for example, if two files were being transferred at the same time, automatic termination could be disabled for each, passing the same reason string.

## See Also

### Controlling automatic termination

- [disableAutomaticTermination(\_:)](disableautomatictermination%28__%29.md): Disables automatic termination for the application.
- [automaticTerminationSupportEnabled](automaticterminationsupportenabled.md): A Boolean value indicating whether the app supports automatic termination.

# enableAutomaticTermination: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Enables automatic termination for the application.

## Declaration

```objectivec
- (void) enableAutomaticTermination:(NSString *) reason;
```

## Parameters

- `reason`: The reason why automatic termination is being enabled.

<a id="Discussion"></a>

## Discussion

This method decrements the automatic termination counter. When the counter is `0`, the application is eligible for automatic termination.

The reason parameter is used to track why an application is or is not automatically terminable and can be inspected by debugging tools. For example, you could pass the string `@"file transfer in progress"` if you disable automatic termination before transferring a file over the network. When you reenable automatic termination after the transfer is complete using [enableAutomaticTermination:](enableautomatictermination%28__%29.md), you should pass the matching string. A given reason can be used more than once at the same time; for example, if two files were being transferred at the same time, automatic termination could be disabled for each, passing the same reason string.

## See Also

### Controlling automatic termination

- [disableAutomaticTermination:](disableautomatictermination%28__%29.md): Disables automatic termination for the application.
- [automaticTerminationSupportEnabled](automaticterminationsupportenabled.md): A Boolean value indicating whether the app supports automatic termination.
- [automaticTerminationOptOutCounter](../nsprocessinfo/automaticterminationoptoutcounter.md)
