> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle(_:completionhandler:)

# handle(\_:completionHandler:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+ (deprecated in 9.2)

Responds to a Siri intent.

## Declaration

```swift
optional func handle(_ intent: INIntent, completionHandler: @escaping (INIntentResponse) -> Void)
```

```swift
optional func handle(_ intent: INIntent) async -> INIntentResponse
```

## Mentioned In

- [Using background tasks](../using-background-tasks.md)

## See Also

### Related Documentation

- [WKIntentDidRunRefreshBackgroundTask](../wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.

# handleIntent:completionHandler: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+ (deprecated in 9.2)

Responds to a Siri intent.

## Declaration

```objectivec
- (void) handleIntent:(INIntent *) intent completionHandler:(void (^)(INIntentResponse *intentResponse)) completionHandler;
```

## Mentioned In

- [Using background tasks](../using-background-tasks.md)

## See Also

### Related Documentation

- [WKIntentDidRunRefreshBackgroundTask](../wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
