> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neapppushmanager/delegate

# delegate (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A delegate that receives incoming call information from the provider.

## Declaration

```swift
weak var delegate: (any NEAppPushDelegate)? { get set }
```

## See Also

### Working with a delegate

- [NEAppPushDelegate](../neapppushdelegate.md): A protocol that defines how an app push manager instance interacts with the framework.

# delegate (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A delegate that receives incoming call information from the provider.

## Declaration

```objectivec
@property (weak, readwrite, nullable) id<NEAppPushDelegate> delegate;
```

## See Also

### Working with a delegate

- [NEAppPushDelegate](../neapppushdelegate.md): A protocol that defines how an app push manager instance interacts with the framework.
