> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/disablesuddentermination()](https://developer.apple.com/documentation/foundation/processinfo/disablesuddentermination())

# disableSuddenTermination() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Disables the application for quickly killing using sudden termination.

## Declaration

```swift
func disableSuddenTermination()
```

<a id="Discussion"></a>

## Discussion

This method increments the sudden termination counter. When the termination counter reaches `0` the application allows sudden termination.

By default the sudden termination counter is set to 1. This can be overridden in your application Info.plist. See [Support Sudden Termination](../processinfo.md#Support-Sudden-Termination) for more information and debugging suggestions.

## See Also

### Working with sudden application termination

- [enableSuddenTermination()](enablesuddentermination%28%29.md): Enables the application for quick killing using sudden termination.

# disableSuddenTermination (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Disables the application for quickly killing using sudden termination.

## Declaration

```objectivec
- (void) disableSuddenTermination;
```

<a id="Discussion"></a>

## Discussion

This method increments the sudden termination counter. When the termination counter reaches `0` the application allows sudden termination.

By default the sudden termination counter is set to 1. This can be overridden in your application Info.plist. See [Support Sudden Termination](../processinfo.md#Support-Sudden-Termination) for more information and debugging suggestions.

## See Also

### Working with sudden application termination

- [enableSuddenTermination](enablesuddentermination%28%29.md): Enables the application for quick killing using sudden termination.
